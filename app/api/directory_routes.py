from flask import Blueprint, request, jsonify
from app.models import db, Form, ServiceArea, EECBGActivity

directory_routes = Blueprint('directory', __name__)

# Get all connectors (Forms) with their related data and user details
@directory_routes.route('/connectors', methods=['GET'])
def get_all_connectors():
    # Optional query params for filtering
    location_filter = request.args.getlist('location')  # This could be a list of states/regions
    activity_filter = request.args.getlist('activity')  # This could be a list of EECBG activities
    
    # Query forms (connectors)
    query = Form.query
    
    # Filter by location if provided
    if location_filter:
        query = query.join(ServiceArea).filter(ServiceArea.form_id == Form.id)
        query = query.filter(ServiceArea.global_area == True | 
                             ServiceArea.national == True |
                             ServiceArea.__dict__[location_filter] == True)

    # Filter by activity if provided
    if activity_filter:
        query = query.join(EECBGActivity).filter(EECBGActivity.form_id == Form.id)
        for activity in activity_filter:
            query = query.filter(getattr(EECBGActivity, activity) == True)
    
    # Get filtered results
    forms = query.all()

    # Return all connectors with related data and user info
    return jsonify([form.to_dict() for form in forms])

# Search for connectors
@directory_routes.route('/search', methods=['GET'])
def search_connectors():
    location = request.args.get('location')
    support_type = request.args.get('support_type')

    query = Form.query

    if location:
        query = query.join(ServiceArea).filter(ServiceArea.location.ilike(f"%{location}%"))
    
    if support_type:
        query = query.join(EECBGActivity).filter(EECBGActivity.support_type.ilike(f"%{support_type}%"))

    connectors = query.all()
    return jsonify([connector.to_dict_with_related_data() for connector in connectors])


# Get a specific connector (Form) by ID with user and related data
@directory_routes.route('/connectors/<int:id>', methods=['GET'])
def get_connector_by_id(id):
    form = Form.query.filter_by(id=id).first()
    if form:
        return jsonify(form.to_dict())
    return {'error': 'Connector not found'}, 404


# Get all available locations (States, Territories) for filtering
@directory_routes.route('/locations', methods=['GET'])
def get_all_locations():
    # Retrieve distinct service areas (states, territories, etc.)
    service_areas = ServiceArea.query.distinct().all()
    locations = []
    
    # Loop through the service areas and gather all possible locations
    for area in service_areas:
        locations.extend([column for column in ServiceArea.__table__.columns.keys() if getattr(area, column)])
    
    return jsonify(list(set(locations)))  # Return unique list


# Get all available EECBG activities for filtering
@directory_routes.route('/activities', methods=['GET'])
def get_all_activities():
    # Retrieve distinct EECBG activities
    activities = EECBGActivity.query.distinct().all()
    activity_list = []

    # Loop through the activities and gather all possible activities
    for activity in activities:
        activity_list.extend([column for column in EECBGActivity.__table__.columns.keys() if getattr(activity, column)])
    
    return jsonify(list(set(activity_list)))  # Return unique list


# Example: Add service areas or eecbg activities to connectors (or for further exploration)
@directory_routes.route('/filter', methods=['GET'])
def filter_connectors():
    location = request.args.get('location')  # Can be a specific location filter
    activity = request.args.get('activity')  # Can be a specific activity filter

    query = Form.query

    # Apply location filter
    if location:
        query = query.join(ServiceArea).filter(ServiceArea.form_id == Form.id)
        query = query.filter(getattr(ServiceArea, location) == True)

    # Apply activity filter
    if activity:
        query = query.join(EECBGActivity).filter(EECBGActivity.form_id == Form.id)
        query = query.filter(getattr(EECBGActivity, activity) == True)

    # Get filtered results
    filtered_forms = query.all()

    return jsonify([form.to_dict() for form in filtered_forms])
