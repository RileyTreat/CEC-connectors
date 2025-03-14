import  { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from 'react-router-dom'; // To access state passed by navigate
import { useDispatch, useSelector } from 'react-redux';
import { updateConnector } from '../../redux/directory'; 
//import { updateCecForm, setCecFormData } from '../../redux/directory';

function CECUpdateForm() {
  const location = useLocation();  // Access passed data from ManagePage
  const { id: connectorId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const connector = useSelector(state => state.directory.connector);


  const [formData, setFormData] = useState({
    organization_name_4: "",
    user_jobTitle_7: "",
    user_firstName_3: "",
    user_lastName_3: "",
    user_workPhone_3: "",
    user_mobilePhone_8: "",
    user_email_5: "",
    organization_website_6: "",
    service_areas: [],
    eecbg_activities: [],
    EECBGExperience_11: "",
    publicTaExperience_12: "",
    inPersonExperience_13: "",
    virtualExperience_14: "",
    underservedExperience_15: "",
    underservedPlan_16: "",
    federalGrantExperience_17: "",
    collaborationExperience_18: "",
    uniqueResorces_19: "",
    workplanDeliverables_20: "",
    milestoneTimelines_21: "",
    keyMetrics_22: "",
    shortTermCommitment_24: "",
    longTermCommitment_25: "",
    callRequest_26: "",
    termsAndConditions_27: false,
    user_timezone_30: "",
    desired_roles: [],
  });

  useEffect(() => {
    // If connector data is available, populate the form
    if (connector) {
      setFormData({
        organization_name_4: connector.organization_name_4 || "",
        user_jobTitle_7: connector.user_jobTitle_7 || "",
        user_firstName_3: connector.user_firstName_3 || "",
        user_lastName_3: connector.user_lastName_3 || "",
        user_workPhone_3: connector.user_workPhone_3 || "",
        user_mobilePhone_8: connector.user_mobilePhone_8 || "",
        user_email_5: connector.user_email_5 || "",
        organization_website_6: connector.organization_website_6 || "",
        service_areas: connector.service_areas || [],
        eecbg_activities: connector.eecbg_activities || [],
        EECBGExperience_11: connector.EECBGExperience_11 || "",
        publicTaExperience_12: connector.publicTaExperience_12 || "",
        inPersonExperience_13: connector.inPersonExperience_13 || "",
        virtualExperience_14: connector.virtualExperience_14 || "",
        underservedExperience_15: connector.underservedExperience_15 || "",
        underservedPlan_16: connector.underservedPlan_16 || "",
        federalGrantExperience_17: connector.federalGrantExperience_17 || "",
        collaborationExperience_18: connector.collaborationExperience_18 || "",
        uniqueResorces_19: connector.uniqueResorces_19 || "",
        workplanDeliverables_20: connector.workplanDeliverables_20 || "",
        milestoneTimelines_21: connector.milestoneTimelines_21 || "",
        keyMetrics_22: connector.keyMetrics_22 || "",
        shortTermCommitment_24: connector.shortTermCommitment_24 || "",
        longTermCommitment_25: connector.longTermCommitment_25 || "",
        callRequest_26: connector.callRequest_26 || "",
        termsAndConditions_27: connector.termsAndConditions_27 || false,
        user_timezone_30: connector.user_timezone_30 || "",
        desired_roles: connector.desired_roles || [],
      });
       console.log(connector.service_areas);
    }
  }, [connector]); // Re-run when connector change

  // Pre-populate the form if data is passed from ManagePage
  useEffect(() => {
    if (location.state?.formData) {
      setFormData(location.state.formData); // Set the form data from state passed via ManagePage
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked ? [...formData[name], value] : formData[name].filter((v) => v !== value),
      });
    } else if (type === "radio") {
      setFormData({ ...formData, [name]: value });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: e.target.files });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the updated form data from the form state
    const updatedFormData = {
        ...formData, 
    };
    // Dispatch the update action to Redux or send the updated data to your backend
    dispatch(updateConnector(connectorId, updatedFormDataformData)); 

    // Navigate to the connector profile page after update
    navigate(`/connector/${connectorId}`); // Redirect to the connector's profile page
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <img
        src="/logo-name.jpg"
        alt="Logo"
        className="mx-auto my-4"
      />
      <h1 className="text-2xl font-bold text-center mb-6">CEC Collaborative Teaming Partner Survey</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* A. General Information */}
        <section>
          <h2 className="text-xl font-semibold mb-4">A. General Information</h2>
          <label className="block">
            Organization Name *
            <input
              type="text"
              name="organization_name_4"
              value={formData.organization_name_4}
              onChange={handleChange}
              placeholder="Organization"
              className="mt-2 p-2 border rounded-md w-full text-[#003366]"
              required
            />
          </label>

          <label className="block">
            Primary Contact Job Title *
            <input
              type="text"
              name="user_jobTitle_7"
              value={formData.user_jobTitle_7}
              onChange={handleChange}
              placeholder="Director, Project Manager, etc."
              className="mt-2 p-2 border rounded-md w-full text-[#003366]"
              required
            />
          </label>

          <label className="block">
            First Name *
            <input
              type="text"
              name="user_firstName_3"
              value={formData.user_firstName_3}
              onChange={handleChange}
              placeholder="First Name"
              className="mt-2 p-2 border rounded-md w-full text-[#003366]"
              required
            />
          </label>

          <label className="block">
            Last Name *
            <input
              type="text"
              name="user_lastName_3"
              value={formData.user_lastName_3}
              onChange={handleChange}
              placeholder="Last Name"
              className="mt-2 p-2 border rounded-md w-full text-[#003366]"
              required
            />
          </label>

          <label className="block">
            Work Phone *
            <input
              type="text"
              name="user_workPhone_3"
              value={formData.user_workPhone_3}
              onChange={handleChange}
              placeholder="Work Phone"
              className="mt-2 p-2 border rounded-md w-full text-[#003366]"
              required
            />
          </label>

          <label className="block">
            Mobile Phone (If different)
            <input
              type="text"
              name="user_mobilePhone_8"
              value={formData.user_mobilePhone_8}
              onChange={handleChange}
              className="mt-2 p-2 border rounded-md w-full text-[#003366]"
            />
          </label>

          <label className="block">
            Email *
            <input
              type="email"
              name="user_email_5"
              value={formData.user_email_5}
              onChange={handleChange}
              placeholder="Email"
              className="mt-2 p-2 border rounded-md w-full text-[#003366]"
              required
            />
          </label>

          <label className="block">
            Website *
            <input
              type="url"
              name="organization_website_6"
              value={formData.organization_website_6}
              onChange={handleChange}
              placeholder="Web URL goes here"
              className="mt-2 p-2 border rounded-md w-full text-[#003366]"
            />
          </label>
        </section>

        {/* B. Service Areas */}
        <section>
          <h2 className="text-xl font-semibold mb-4">B. Which areas do you serve? (Select ALL that apply) *</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
                "global_area", "national", "alabama", "alaska", "arizona", "arkansas", "california", "colorado", "connecticut", 
                "delaware", "district_of_columbia", "florida", "georgia", "hawaii", "idaho", "illinois", "indiana", "iowa", 
                "kansas", "kentucky", "louisiana", "maine", "maryland", "massachusetts", "michigan", "minnesota", "mississippi", 
                "missouri", "montana", "nebraska", "nevada", "new_hampshire", "new_jersey", "new_mexico", "new_york", "north_carolina", 
                "north_dakota", "ohio", "oklahoma", "oregon", "pennsylvania", "rhode_island", "south_carolina", "south_dakota", "tennessee", 
                "texas", "utah", "vermont", "virginia", "washington", "west_virginia", "wisconsin", "wyoming", "american_samoa", 
                "guam", "northern_mariana_islands", "puerto_rico", "us_virgin_islands", "federally_recognized_tribes", "alaska_native_villages", 
                "energy_communities", "disadvantaged_communities"
            ].map((area) => (
              <label key={area} className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="service_areas"
                  value={area}
                  checked={formData.service_areas.some(areaObj => areaObj[area.toLowerCase()])}//{formData.service_areas[area] === "True"}
                  onChange={handleChange}
                  className="mr-2"
                />
                {area.replace(/_/g, " ").replace(/\b\w/g, char => char.toUpperCase())}
              </label>
            ))}
          </div>
        </section>

        {/* C. EECBG Activities */}
        <section>
          <h2 className="text-xl font-semibold mb-4">C. EECBG Activities</h2>
          <div className="space-y-2">
            {[
              { id: "category_1_strategy_development", label: "Category (1) Strategy Development and Implementation" },
              { id: "category_2_retaining_consulting", label: "Category (2) Retaining Technical Consulting Services" },
              { id: "category_3_residential_audits", label: "Category (3) Residential and Commercial Building Audits" },
              { id: "category_4_financial_incentives", label: "Category (4) Financial Incentives for Energy Efficiency" },
              { id: "category_5_retrofit_grants", label: "Category (5) Energy Efficiency Retrofit Grants for Government Agencies and Nonprofit Organizations" },
              { id: "category_6_efficiency_programs", label: "Category (6) Energy Efficiency and Conservation Programs for Buildings and Facilities" },
              { id: "category_7_transportation_energy", label: "Category (7) Conservation of Transportation Energy" },
              { id: "category_8_building_codes", label: "Category (8) Building Codes and Inspection Services" },
              { id: "category_9_energy_distribution", label: "Category (9) Energy Distribution Technologies" },
              { id: "category_10_material_conservation", label: "Category (10) Material Conservation Programs" },
              { id: "category_11_landfill_gas", label: "Category (11) Reduction, Capture, and Use of Landfill Gases" },
              { id: "category_12_traffic_signals", label: "Category (12) Replacement of Traffic Signals and Street Lighting" },
              { id: "category_13_renewable_energy", label: "Category (13) On-site Renewable Energy On or In a Government Building" },
              { id: "category_14_private_sector_funding", label: "Category (14) Programs for Financing, Purchasing, and Installing Energy Efficiency, Renewable Energy, and Zero-emission Transportation (and associated infrastructure) Measures and Capital Investments, Projects, and Programs for Leveraging Public and Private Sector Funds" },
              // Add other activities
            ].map((activity) => (
              <label key={activity.id} className="block">
                <input
                  type="checkbox"
                  name="eecbg_activities"
                  value={activity.id}
                  checked={formData.eecbg_activities.some((act) => act[activity.id])}
                  onChange={handleChange}
                  className="mr-2"
                />
                {activity.label}
              </label>
            ))}
          </div>
        </section>

        {/* Descriptive Sections (D, E, F, etc.) */}
        {/* D. Descriptive Questions */}
        <section>
        <h2 className="text-xl font-semibold mb-4">D. Clean Energy and Economic Development</h2>

        <label className="block">
            Please describe your organization’s experience in providing support for EECBG formula applicants throughout the application, award, or service phase. (Provide examples of successful applications, chosen categories and blueprints.) *
            <textarea
            name="EECBGExperience_11"
            value={formData.EECBGExperience_11}
            onChange={handleChange}
            placeholder="If none, enter NA"
            className="mt-2 p-2 border rounded-md w-full text-[#003366]"
            rows="3"
            />
        </label>

        <label className="block">
            Please describe your organization’s experience in providing technical assistance to state and local government entities, especially related to clean energy and economic development. (Provide examples of successful initiatives, engagement strategies, or outcomes.) *
            <textarea
            name="publicTaExperience_12"
            value={formData.publicTaExperience_12}
            onChange={handleChange}
            placeholder="If none, enter NA"
            className="mt-2 p-2 border rounded-md w-full text-[#003366]"
            rows="3"
            />
        </label>

        <label className="block">
            What is your experience in facilitating IN-PERSON trainings, workshops, conferences, or networking events? (Provide details on the scope, topics, and your role in organizing or delivering these events.) *
            <textarea
            name="inPersonExperience_13"
            value={formData.inPersonExperience_13}
            onChange={handleChange}
            placeholder="If none, enter NA"
            className="mt-2 p-2 border rounded-md w-full text-[#003366]"
            rows="3"
            />
        </label>

        <label className="block">
            What is your experience in facilitating VIRTUAL trainings, workshops, conferences, or networking events? (Provide details on the scope, topics, and your role in organizing or delivering these events.) *
            <textarea
            name="virtualExperience_14"
            value={formData.virtualExperience_14}
            onChange={handleChange}
            placeholder="If none, enter NA"
            className="mt-2 p-2 border rounded-md w-full text-[#003366]"
            rows="3"
            />
        </label>
        </section>

        {/* E. Engagement with Underserved Communities */}
        <section>
        <h2 className="text-xl font-semibold mb-4">E. Engagement with Underserved Communities</h2>

        <label className="block">
            Describe your organization’s past experience working with underserved communities, including disadvantaged, environmental justice, and energy communities, and Tribes, Alaska Native Villages, or territories. (Provide examples of the communities served and the outcomes of the work.) *
            <textarea
            name="underservedExperience_15"
            value={formData.underservedExperience_15}
            onChange={handleChange}
            placeholder="If none, enter NA"
            className="mt-2 p-2 border rounded-md w-full text-[#003366]"
            rows="3"
            />
        </label>

        <label className="block">
            How does your organization plan to engage with underserved communities under the Community Energy Connectors initiative? (Include outreach strategies, stakeholder engagement, and capacity-building plans.) *
            <textarea
            name="underservedPlan_16"
            value={formData.underservedPlan_16}
            onChange={handleChange}
            placeholder="If none, enter NA"
            className="mt-2 p-2 border rounded-md w-full text-[#003366]"
            rows="3"
            />
        </label>
        </section>

        {/* F. Federal Grants and Collaboration */}
        <section>
        <h2 className="text-xl font-semibold mb-4">F. Federal Grants and Collaboration</h2>

        <label className="block">
            Please describe your organization’s experience with federal grant management processes, especially related to clean energy or economic development. (Provide examples of successfully managed projects or grants.) *
            <textarea
            name="federalGrantExperience_17"
            value={formData.federalGrantExperience_17}
            onChange={handleChange}
            placeholder="If none, enter NA"
            className="mt-2 p-2 border rounded-md w-full text-[#003366]"
            rows="3"
            />
        </label>

        <label className="block">
            Have you previously collaborated with other organizations or teams on similar initiatives? If yes, please describe the collaboration and outcomes. (Provide details on how you worked together to achieve project goals.) *
            <textarea
            name="collaborationExperience_18"
            value={formData.collaborationExperience_18}
            onChange={handleChange}
            placeholder="If none, enter NA"
            className="mt-2 p-2 border rounded-md w-full text-[#003366]"
            rows="3"
            />
        </label>

        <label className="block">
            What unique capabilities or resources does your organization bring to this collaboration that would increase the impact of the Community Energy Connectors initiative? *
            <textarea
            name="uniqueResorces_19"
            value={formData.uniqueResorces_19}
            onChange={handleChange}
            placeholder="If none, enter NA"
            className="mt-2 p-2 border rounded-md w-full text-[#003366]"
            rows="3"
            />
        </label>
        </section>

        {/* G. Workplan and Metrics */}
        <section>
        <h2 className="text-xl font-semibold mb-4">G. Workplan and Metrics</h2>

        <label className="block">
            What activities and deliverables would your organization propose for inclusion in the overall workplan? (Provide a high-level description of your approach and key activities.) *
            <textarea
            name="workplanDeliverables_20"
            value={formData.workplanDeliverables_20}
            onChange={handleChange}
            placeholder="If none, enter NA"
            className="mt-2 p-2 border rounded-md w-full text-[#003366]"
            rows="3"
            />
        </label>

        <label className="block">
            What milestones and timelines can your organization realistically commit to achieving within the 3-year performance period of the project? *
            <textarea
            name="milestoneTimelines_21"
            value={formData.milestoneTimelines_21}
            onChange={handleChange}
            placeholder="If none, enter NA"
            className="mt-2 p-2 border rounded-md w-full text-[#003366]"
            rows="3"
            />
        </label>

        <label className="block">
            What metrics would you suggest to track the success of your proposed activities? (Provide examples of key performance indicators such as the number of workshops, communities engaged, etc.) *
            <textarea
            name="keyMetrics_22"
            value={formData.keyMetrics_22}
            onChange={handleChange}
            placeholder="If none, enter NA"
            className="mt-2 p-2 border rounded-md w-full text-[#003366]"
            rows="3"
            />
        </label>
        </section>

{/* H. Commitment and Availability */}
<section className="space-y-6">
          <h2 className="text-xl font-semibold mb-4">H. Commitment and Availability</h2>

          <label className="block">
            What role would you like to serve in this application? (Select all that apply) *
            <div className="flex flex-col gap-4">
              {[
                {label: "Administrator team, in a leading role", value: "admin_lead"},
                {label: "Administrator team, in a support role", value: "admin_support" },
                {label: "Regional Partner team, in a leading role", value: "regional_partner_lead" },
                {label: "Regional Partner team, in a support role", value: "regional_partner_support"},
                {label: "In an advisory capacity, supporting any team", value: "advisory_support"},
              ].map((role) => (
                <label key={role.value} className="inline-flex items-center mr-4">
                  <input
                    type="checkbox"
                    name="desired_roles"
                    value={role.value}
                    checked={formData.desired_roles.some(r => r[role.value] === true)} //{formData.desired_roles.includes(role.value)}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {role.label}
                </label>
              ))}
            </div>
          </label>

          <label className="block mb-4">
            Is your organization available to commit to immediate collaboration? *
            <div className="flex space-x-6 mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="shortTermCommitment_24"
                  value="Yes"
                  checked={formData.shortTermCommitment_24 === "Yes"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Yes
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="shortTermCommitment_24"
                  value="No"
                  checked={formData.shortTermCommitment_24 === "No"}
                  onChange={handleChange}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </label>

          <label className="block">
          Is your organization available to commit to the 3-year duration of the project, including regular communication and reporting? *
            <div className="flex space-x-6 mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="longTermCommitment_25"
                  value="Yes"
                  checked={formData.longTermCommitment_25 === "Yes"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Yes
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="longTermCommitment_25"
                  value="No"
                  checked={formData.longTermCommitment_25 === "No"}
                  onChange={handleChange}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </label>

          <label className="block">
          Would you like someone to call you promptly to further discuss the requirements of Community Energy Connectors or the EECBG? *
            <div className="flex space-x-6 mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="callRequest_26"
                  value="Yes"
                  checked={formData.callRequest_26 === "Yes"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Yes
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="callRequest_26"
                  value="No"
                  checked={formData.callRequest_26 === "No"}
                  onChange={handleChange}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </label>

          <label className="block">
            By submitting this survey response, you confirm that the information provided is accurate and that your organization is committed to partnering with other Teaming Partners. *
            <input
              type="checkbox"
              name="termsAndConditions_27"
              checked={formData.termsAndConditions_27}
              onChange={handleChange}
              className="mr-2"
            />
            I confirm
          </label>
        </section>


        {/* Submit Button */}
        <button type="submit" className="w-full py-3 px-6 text-center bg-blue-500 text-white rounded-lg mt-6">
          Submit Updated Form
        </button>
      </form>
    </div>
  );
}

export default CECUpdateForm;
