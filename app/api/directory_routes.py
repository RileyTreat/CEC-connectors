from flask import Blueprint, request, jsonify
from app.models import db, Form, ServiceArea, EECBGActivity

directory_routes = Blueprint('directory', __name__)

# Get all connectors (Forms) with their related data and user details
@directory_routes.route('/connectors', methods=['GET'])
def get_all_connectors():
    location_filter = request.args.getlist('location')  # List of states/regions

    query = Form.query
    
    if location_filter:
        # Join the ServiceArea table and filter based on the selected location
        query = query.join(ServiceArea).filter(ServiceArea.form_id == Form.id)
        for location in location_filter:
            query = query.filter(getattr(ServiceArea, location) == True)  # Filter by location
    
    connectors = query.all()

    return jsonify([form.to_dict() for form in connectors])

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
    # Retrieve distinct service areas (states, territories, etc.) associated with connectors
    service_areas = ServiceArea.query.filter(ServiceArea.form_id.isnot(None)).distinct().all()
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

# Get connectors by service area
@directory_routes.route('/connectors-by-area', methods=['GET'])
def get_connectors_by_area():
    # Get the selected service area (e.g., 'alabama', 'arizona', etc.)
    area = request.args.get('area')

    # Query connectors that have the selected service area marked as True
    connectors = Form.query.join(ServiceArea).filter(getattr(ServiceArea, area) == True).all()

    return jsonify([connector.to_dict() for connector in connectors])
