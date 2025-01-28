import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEECBGActivities, fetchConnectorsByActivity } from "../../redux/directory";  
import { Link } from "react-router-dom";  

const TypesOfSupportPage = () => {
  const dispatch = useDispatch();
  const eecbgActivities = useSelector((state) => state.directory.eecbgActivities); 
  const connectors = useSelector((state) => state.directory.connectors); 
  const [selectedActivity, setSelectedActivity] = useState(null); 

  // Fetch locations on page load
  useEffect(() => {
    dispatch(fetchEECBGActivities());
  }, [dispatch]);

  // Fetch connectors when a specific activity is selected
  useEffect(() => {
    if (selectedActivity) {
      dispatch(fetchConnectorsByActivity(selectedActivity)); // Fetch connectors based on selected eecbg activity
    }
  }, [selectedActivity, dispatch]);

  const handleActivityClick = (activity) => {
    setSelectedActivity(activity); // Set the selected activity
    dispatch(fetchConnectorsByActivity(activity));
  };

  const categoryNames = {
    category_1_strategy_development: "Strategy Development and Implementation",
    category_2_retaining_consulting: "Retaining Technical Consulting Services",
    category_3_residential_audits: "Residential and Commercial Building Audits",
    category_4_financial_incentives: "Financial Incentives for Energy Efficiency",
    category_5_retrofit_grants: "Energy Efficiency Retrofit Grants for Government Agencies and Nonprofit Organizations",
    category_6_efficiency_programs: "Energy Efficiency and Conservation Programs for Buildings and Facilities",
    category_7_transportation_energy: "Conservation of Transportation Energy",
    category_8_building_codes: "Building Codes and Inspection Services",
    category_9_energy_distribution: "Energy Distribution Technologies",
    category_10_material_conservation: "Material Conservation Programs",
    category_11_landfill_gas: "Reduction, Capture, and Use of Landfill Gases",
    category_12_traffic_signals: "Replacement of Traffic Signals and Street Lighting",
    category_13_renewable_energy: "On-site Renewable Energy On or In a Government Building",
    category_14_private_sector_funding: "Programs for Financing, Purchasing, and Installing Energy Efficiency, Renewable Energy, and Zero-emission Transportation"
  };

  return (
    <div>
      <h1 className="text-center font-bold text-2xl">Types of Support</h1>
      <h3 className="text-center">Click on the activity you are looking for and a list of connectors will appear below.</h3>

      {/* Render EECBG Activities */}
      <div className="flex flex-wrap justify-center mt-6 space-x-4 space-y-4">
      {eecbgActivities?.length > 0 ? (
    eecbgActivities
      .filter((activity) => 
        !['user_id', 'id', 'form_id'].includes(activity)  // Filter out the unwanted fields
      )
      .map((activity) => {
        const activityLabel = categoryNames[activity.replace(/_/g, "_")] || activity.replace(/_/g, ' ');
              
            return(
              <button
                key={activity}
                onClick={() => handleActivityClick(activity)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:shadow-lg"
              >
                {activityLabel}
              </button>
            );
            })
        ) : (
          <p>Loading activities...</p>
        )}
      </div>

      {/* Render Connectors for the selected Activity */}
      {selectedActivity && (
        <div className="mt-6">
          <h2 className="text-center font-semibold text-xl">
            Connectors for {selectedActivity.replace(/_/g, ' ')}
          </h2>
          <div className="space-y-4 mt-4">
          {connectors.length > 0 ? (
        connectors
          .filter((connector) => {
            // Check if the connector has the selected activity
            return connector.eecbg_activities.some((activity) => 
              activity[selectedActivity] === true
            );
          })
          .map((connector) => (
                <div
                  key={connector.id}
                  className="p-4 border rounded-lg shadow-lg hover:bg-gray-100"
                >
                  <h2 className="font-semibold">{connector.organization_name_4}</h2>
                  <p> {connector.first_name} {connector.last_name}</p>
                  <p>{connector.user_jobTitle_7}</p>
                  <p>{connector.user_email_5}</p>
                  <Link
                    to={`/connector/${connector.id}`}  // Link to the connector's profile page
                    className="text-blue-500 hover:underline"
                  >
                    View Profile
                  </Link>
                </div>
              ))
            ) : (
              <p>No connectors available for this activity.</p> 
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TypesOfSupportPage;
