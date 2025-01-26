from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user
from app.models import db, Form, ServiceArea, EECBGActivity, DesiredRole

form_routes = Blueprint('form', __name__)

# Create a new form for the logged-in user
@form_routes.route('/', methods=['POST'])
@login_required
def create_form():
    data = request.get_json()
    
    # Create the form and associate with the user
    form = Form(
        user_id=current_user.id,
        user_workPhone_3=data.get('user_workPhone_3'),
        organization_name_4=data.get('organization_name_4'),
        user_email_5=data.get('user_email_5'),
        organization_website_6=data.get('organization_website_6'),
        user_jobTitle_7=data.get('user_jobTitle_7'),
        user_mobilePhone_8=data.get('user_mobilePhone_8'),
        EECBGExperience_11=data.get('EECBGExperience_11'),
        publicTaExperience_12=data.get('publicTaExperience_12'),
        inPersonExperience_13=data.get('inPersonExperience_13'),
        virtualExperience_14=data.get('virtualExperience_14'),
        underservedExperience_15=data.get('underservedExperience_15'),
        underservedPlan_16=data.get('underservedPlan_16'),
        federalGrantExperience_17=data.get('federalGrantExperience_17'),
        collaborationExperience_18=data.get('collaborationExperience_18'),
        uniqueResorces_19=data.get('uniqueResorces_19'),
        workplanDeliverables_20=data.get('workplanDeliverables_20'),
        milestoneTimelines_21=data.get('milestoneTimelines_21'),
        keyMetrics_22=data.get('keyMetrics_22'),
        shortTermCommitment_24=data.get('shortTermCommitment_24'),
        longTermCommitment_25=data.get('longTermCommitment_25'),
        callRequest_26=data.get('callRequest_26'),
        termsAndConditions_27=data.get('termsAndConditions_27'),
        user_timezone_30=data.get('user_timezone_30')
    )
    
    # Add the form and commit
    db.session.add(form)
    db.session.commit()


    # Add service areas, EECBG activities, desired roles
    service_areas_data = data.get('service_areas', [])
    for area in service_areas_data:
        service_area = ServiceArea(form_id=form.id, **area)
        db.session.add(service_area)

    eecbg_activities_data = data.get('eecbg_activities', [])
    for activity in eecbg_activities_data:
        eecbg_activity = EECBGActivity(form_id=form.id, **activity)
        db.session.add(eecbg_activity)
    
    desired_roles_data = data.get('desired_roles', [])
    for role in desired_roles_data:
        desired_role = DesiredRole(form_id=form.id, **role)
        db.session.add(desired_role)
    
    db.session.commit()

    return jsonify(form.to_dict()), 201


# Get all forms for the logged-in user
@form_routes.route('/', methods=['GET'])
@login_required
def get_all_forms():
    forms = Form.query.filter_by(user_id=current_user.id).all()
    return jsonify([form.to_dict() for form in forms])


# Get a specific form by ID for the logged-in user
@form_routes.route('/<int:id>', methods=['GET'])
@login_required
def get_form(id):
    form = Form.query.filter_by(id=id, user_id=current_user.id).first()
    if form:
        return jsonify(form.to_dict())
    return {'error': 'Form not found or unauthorized'}, 404

#Get All Forms with Related Data (No Authorization Required)
@form_routes.route('/', methods=['GET'])
def get_all_forms_public():
    forms = Form.query.all()
    return jsonify([form.to_dict_with_related_data() for form in forms])

#Get a Specific Form by ID with All Related Data (No Authorization Required)
@form_routes.route('/<int:id>', methods=['GET'])
def get_form_public(id):
    form = Form.query.get(id)
    if form:
        return jsonify(form.to_dict_with_related_data())
    return {'error': 'Form not found'}, 404


# Update an existing form for the logged-in user
@form_routes.route('/<int:id>', methods=['PUT'])
@login_required
def update_form(id):
    form = Form.query.filter_by(id=id, user_id=current_user.id).first()
    if not form:
        return {'error': 'Form not found or unauthorized'}, 404
    
    data = request.get_json()
    
    # Update form details
    form.organization_name_4 = data.get('organization_name_4', form.organization_name_4)
    form.user_email_5 = data.get('user_email_5', form.user_email_5)
    form.organization_website_6 = data.get('organization_website_6', form.organization_website_6)
    form.user_jobTitle_7 = data.get('user_jobTitle_7', form.user_jobTitle_7)
    form.user_mobilePhone_8 = data.get('user_mobilePhone_8', form.user_mobilePhone_8)
    form.EECBGExperience_11 = data.get('EECBGExperience_11', form.EECBGExperience_11)
    form.publicTaExperience_12 = data.get('publicTaExperience_12', form.publicTaExperience_12)
    form.inPersonExperience_13 = data.get('inPersonExperience_13', form.inPersonExperience_13)
    form.virtualExperience_14 = data.get('virtualExperience_14', form.virtualExperience_14)
    form.underservedExperience_15 = data.get('underservedExperience_15', form.underservedExperience_15)
    form.underservedPlan_16 = data.get('underservedPlan_16', form.underservedPlan_16)
    form.federalGrantExperience_17 = data.get('federalGrantExperience_17', form.federalGrantExperience_17)
    form.collaborationExperience_18 = data.get('collaborationExperience_18', form.collaborationExperience_18)
    form.uniqueResorces_19 = data.get('uniqueResorces_19', form.uniqueResorces_19)
    form.workplanDeliverables_20 = data.get('workplanDeliverables_20', form.workplanDeliverables_20)
    form.milestoneTimelines_21 = data.get('milestoneTimelines_21', form.milestoneTimelines_21)
    form.keyMetrics_22 = data.get('keyMetrics_22', form.keyMetrics_22)
    form.shortTermCommitment_24 = data.get('shortTermCommitment_24', form.shortTermCommitment_24)
    form.longTermCommitment_25 = data.get('longTermCommitment_25', form.longTermCommitment_25)
    form.callRequest_26 = data.get('callRequest_26', form.callRequest_26)
    form.termsAndConditions_27 = data.get('termsAndConditions_27', form.termsAndConditions_27)
    form.user_timezone_30 = data.get('user_timezone_30', form.user_timezone_30)
    
    # Update service areas, EECBG activities, and desired roles

    # Update related service areas
    if 'service_areas' in data:
        for area_data in data['service_areas']:
            service_area = ServiceArea.query.filter_by(id=area_data['id'], form_id=form.id).first()
            if service_area:
                service_area.global_area = area_data.get('global_area', service_area.global_area)
                service_area.national = area_data.get('national', service_area.national)
                service_area.alabama = area_data.get('alabama', service_area.alabama)
                service_area.alaska = area_data.get('alaska', service_area.alaska)
                service_area.arizona = area_data.get('arizona', service_area.arizona)
                service_area.arkansas = area_data.get('arkansas', service_area.arkansas)
                service_area.california = area_data.get('california', service_area.california)
                service_area.colorado = area_data.get('colorado', service_area.colorado)
                service_area.connecticut = area_data.get('connecticut', service_area.connecticut)
                service_area.delaware = area_data.get('delaware', service_area.delaware)
                service_area.district_of_columbia = area_data.get('district_of_columbia', service_area.district_of_columbia)
                service_area.florida = area_data.get('florida', service_area.florida)
                service_area.georgia = area_data.get('georgia', service_area.georgia)
                service_area.hawaii = area_data.get('hawaii', service_area.hawaii)
                service_area.idaho = area_data.get('idaho', service_area.idaho)
                service_area.illinois = area_data.get('illinois', service_area.illinois)
                service_area.indiana = area_data.get('indiana', service_area.indiana)
                service_area.iowa = area_data.get('iowa', service_area.iowa)
                service_area.kansas = area_data.get('kansas', service_area.kansas)
                service_area.kentucky = area_data.get('kentucky', service_area.kentucky)
                service_area.louisiana = area_data.get('louisiana', service_area.louisiana)
                service_area.maine = area_data.get('maine', service_area.maine)
                service_area.maryland = area_data.get('maryland', service_area.maryland)
                service_area.massachusetts = area_data.get('massachusetts', service_area.massachusetts)
                service_area.michigan = area_data.get('michigan', service_area.michigan)
                service_area.minnesota = area_data.get('minnesota', service_area.minnesota)
                service_area.mississippi = area_data.get('mississippi', service_area.mississippi)
                service_area.missouri = area_data.get('missouri', service_area.missouri)
                service_area.montana = area_data.get('montana', service_area.montana)
                service_area.nebraska = area_data.get('nebraska', service_area.nebraska)
                service_area.nevada = area_data.get('nevada', service_area.nevada)
                service_area.new_hampshire = area_data.get('new_hampshire', service_area.new_hampshire)
                service_area.new_jersey = area_data.get('new_jersey', service_area.new_jersey)
                service_area.new_mexico = area_data.get('new_mexico', service_area.new_mexico)
                service_area.new_york = area_data.get('new_york', service_area.new_york)
                service_area.north_carolina = area_data.get('north_carolina', service_area.north_carolina)
                service_area.north_dakota = area_data.get('north_dakota', service_area.north_dakota)
                service_area.ohio = area_data.get('ohio', service_area.ohio)
                service_area.oklahoma = area_data.get('oklahoma', service_area.oklahoma)
                service_area.oregon = area_data.get('oregon', service_area.oregon)
                service_area.pennsylvania = area_data.get('pennsylvania', service_area.pennsylvania)
                service_area.rhode_island = area_data.get('rhode_island', service_area.rhode_island)
                service_area.south_carolina = area_data.get('south_carolina', service_area.south_carolina)
                service_area.south_dakota = area_data.get('south_dakota', service_area.south_dakota)
                service_area.tennessee = area_data.get('tennessee', service_area.tennessee)
                service_area.texas = area_data.get('texas', service_area.texas)
                service_area.utah = area_data.get('utah', service_area.utah)
                service_area.vermont = area_data.get('vermont', service_area.vermont)
                service_area.virginia = area_data.get('virginia', service_area.virginia)
                service_area.washington = area_data.get('washington', service_area.washington)
                service_area.west_virginia = area_data.get('west_virginia', service_area.west_virginia)
                service_area.wisconsin = area_data.get('wisconsin', service_area.wisconsin)
                service_area.wyoming = area_data.get('wyoming', service_area.wyoming)
                service_area.american_samoa = area_data.get('american_samoa', service_area.american_samoa)
                service_area.guam = area_data.get('guam', service_area.guam)
                service_area.northern_mariana_islands = area_data.get('northern_mariana_islands', service_area.northern_mariana_islands)
                service_area.puerto_rico = area_data.get('puerto_rico', service_area.puerto_rico)
                service_area.us_virgin_islands = area_data.get('us_virgin_islands', service_area.us_virgin_islands)
                service_area.federally_recognized_tribes = area_data.get('federally_recognized_tribes', service_area.federally_recognized_tribes)
                service_area.alaska_native_villages = area_data.get('alaska_native_villages', service_area.alaska_native_villages)
                service_area.energy_communities = area_data.get('energy_communities', service_area.energy_communities)
                service_area.disadvantaged_communities = area_data.get('disadvantaged_communities', service_area.disadvantaged_communities)
        db.session.commit()


        # Update related EECBG activities
    if 'eecbg_activities' in data:
        for activity_data in data['eecbg_activities']:
            activity = EECBGActivity.query.filter_by(id=activity_data['id'], form_id=form.id).first()
            if activity:
                activity.category_1_strategy_development = activity_data.get('category_1_strategy_development', activity.category_1_strategy_development)
                activity.category_2_retaining_consulting = activity_data.get('category_2_retaining_consulting', activity.category_2_retaining_consulting)
                activity.category_3_residential_audits = activity_data.get('category_3_residential_audits', activity.category_3_residential_audits)
                activity.category_4_financial_incentives = activity_data.get('category_4_financial_incentives', activity.category_4_financial_incentives)
                activity.category_5_retrofit_grants = activity_data.get('category_5_retrofit_grants', activity.category_5_retrofit_grants)
                activity.category_6_efficiency_programs = activity_data.get('category_6_efficiency_programs', activity.category_6_efficiency_programs)
                activity.category_7_transportation_energy = activity_data.get('category_7_transportation_energy', activity.category_7_transportation_energy)
                activity.category_8_building_codes = activity_data.get('category_8_building_codes', activity.category_8_building_codes)
                activity.category_9_energy_distribution = activity_data.get('category_9_energy_distribution', activity.category_9_energy_distribution)
                activity.category_10_material_conservation = activity_data.get('category_10_material_conservation', activity.category_10_material_conservation)
                activity.category_11_landfill_gas = activity_data.get('category_11_landfill_gas', activity.category_11_landfill_gas)
                activity.category_12_traffic_signals = activity_data.get('category_12_traffic_signals', activity.category_12_traffic_signals)
                activity.category_13_renewable_energy = activity_data.get('category_13_renewable_energy', activity.category_13_renewable_energy)
                activity.category_14_private_sector_funding = activity_data.get('category_14_private_sector_funding', activity.category_14_private_sector_funding)
        db.session.commit()

                # Update related desired roles
    if 'desired_roles' in data:
        for role_data in data['desired_roles']:
            role = DesiredRole.query.filter_by(id=role_data['id'], form_id=form.id).first()
            if role:
                role.admin_lead = role_data.get('admin_lead', role.admin_lead)
                role.admin_support = role_data.get('admin_support', role.admin_support)
                role.regional_partner_lead = role_data.get('regional_partner_lead', role.regional_partner_lead)
                role.regional_partner_support = role_data.get('regional_partner_support', role.regional_partner_support)
                role.advisory_support = role_data.get('advisory_support', role.advisory_support)
        db.session.commit()
    
    
    db.session.commit()
    
    return jsonify(form.to_dict())


# Delete a specific form for the logged-in user
@form_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_form(id):
    form = Form.query.filter_by(id=id, user_id=current_user.id).first()
    if not form:
        return {'error': 'Form not found or unauthorized'}, 404
    
    db.session.delete(form)
    db.session.commit()
    
    return {'message': 'Form and related data successfully deleted'}
