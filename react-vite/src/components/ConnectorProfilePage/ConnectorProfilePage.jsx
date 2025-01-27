import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // To get the connector ID from the URL
import { useDispatch, useSelector } from 'react-redux';
import { fetchConnectorById } from '../../redux/directory';

const ConnectorsProfilePage = () => {
  const { id } = useParams(); // Getting the connector ID from URL params
  const dispatch = useDispatch();
  const connector = useSelector(state => state.directory.connectors.find(connector => connector.id === parseInt(id)));
  
  useEffect(() => {
    dispatch(fetchConnectorById(id)); // Fetch the connector details based on ID when component mounts
  }, [dispatch, id]);

  if (!connector) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    console.log(connector); // Log to check the data structure
  }, [connector]);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center mt-6">{connector.organization_name_4}</h1>

      <div className="mt-6">
        <a
          href={connector.organization_website_6}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          {connector.organization_website_6}
        </a>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Contact Information</h2>
        <p><strong>{connector.first_name} {connector.last_name}</strong></p>
        <p>{connector.user_jobTitle_7}</p>
        <p>Email: {connector.user_email_5}</p>
        <p>Work Phone: {connector.user_workPhone_3}</p>
        <p>Personal Phone: {connector.user_mobilePhone_8 || "N/A"}</p>
        <p>TimeZone: {connector.user_timezone_30}</p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">EECBG Eligible Activities Currently Addressed</h2>
        <ul>
          {connector.eecbg_activities.map((activity, idx) => {
            const activityCategories = Object.keys(activity).filter((key) => activity[key] === true);
            return activityCategories.length > 0 ? (
              <li key={idx} className="ml-4">
                {activityCategories.map((category, index) => {
                  // Optionally, you can map category keys to category names for display
                  const categoryNames = {
                    category_1_strategy_development: "Strategy Development and Implementation",
                    category_2_retaining_consulting: "Retaining Technical Consulting Services",
                    category_3_residential_audits: " Residential and Commercial Building Audits",
                    category_4_financial_incentives: "Financial Incentives for Energy Efficiency",
                    category_5_retrofit_grants: "Energy Efficiency Retrofit Grants for Government Agencies and Nonprofit Organizations",
                    category_6_efficiency_programs: "Energy Efficiency and Conservation Programs for Buildings and Facilities",
                    category_7_transportation_energy: "Conservation of Transportation Energy",
                    category_8_building_codes: " Building Codes and Inspection Service",
                    category_9_energy_distribution: "Energy Distribution Technologies",
                    category_10_material_conservation: "Material Conservation Programs",
                    category_11_landfill_gas: "Reduction, Capture, and Use of Landfill Gases",
                    category_12_traffic_signals: "Replacement of Traffic Signals and Street Lighting",
                    category_13_renewable_energy: "On-site Renewable Energy On or In a Government Building",
                    category_14_private_sector_funding: "Programs for Financing, Purchasing, and Installing Energy Efficiency, Renewable Energy, and Zero-emission Transportation (and associated infrastructure) Measures and Capital Investments, Projects, and Programs for Leveraging Public and Private Sector Funds",
                  };
                  return <div key={index}>{categoryNames[category]}</div>;
                })}
              </li>
            ) : null;
          })}
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Service Areas</h2>
        <ul>
          {connector.service_areas && connector.service_areas[0] ? (
            Object.keys(connector.service_areas[0])
            .filter(area => !['id', 'form_id', 'user_id'].includes(area))
            .map((area, idx) => {
              return connector.service_areas[0][area] ? (
                <li key={idx} className="ml-4">{area.replace(/_/g, ' ')}</li> // Rendering area names
              ) : null;
            })
          ) : (
            <li>No service areas available</li>
          )}
        </ul>
      </div>


      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Relevant Projects and Initiatives</h2>
        <h3 className="text-xl font-semibold">Organization’s Experience in Providing Support for EECBG Formula Applicants</h3>
        <p>{connector.EECBGExperience_11}</p>

        <h3 className="text-xl font-semibold mt-4">Organization’s Experience in Providing Technical Assistance</h3>
        <p>{connector.publicTaExperience_12}</p>

        <h3 className="text-xl font-semibold mt-4">Organization’s Plan to Engage with Underserved Communities</h3>
        <p>{connector.underservedPlan_16}</p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Success Stories and Case Studies</h2>
        <h3 className="text-xl font-semibold">Organization’s Past Experience Working with Underserved Communities</h3>
        <p>{connector.underservedExperience_15}</p>

        <h3 className="text-xl font-semibold mt-4">Organization’s Experience with Federal Grant Management Processes</h3>
        <p>{connector.federalGrantExperience_17}</p>

        <h3 className="text-xl font-semibold mt-4">Previously Collaborated with Other Organizations</h3>
        <p>{connector.collaborationExperience_18}</p>
      </div>
    </div>
  );
};

export default ConnectorsProfilePage;
