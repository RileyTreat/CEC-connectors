import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // To get the connector ID from the URL
import { useDispatch, useSelector } from 'react-redux';
import { fetchConnectorById } from '../../redux/directory';

const ConnectorsProfilePage = () => {
  const { id } = useParams(); // Getting the connector ID from URL params
  const dispatch = useDispatch();
  const connector = useSelector(state => state.directory.connector) //s.find(connector => connector.id === parseInt(id)));
  
  useEffect(() => {
    dispatch(fetchConnectorById(id)); 
  }, [dispatch, id]);

  if (!connector) {
    return <div>Loading...</div>;
  }

  // useEffect(() => {
  //   console.log(connector); // Log to check the data structure
  // }, [connector]);

  return (
    <div className="container mx-auto p-8">
    {/* Logo Section */}
    <div className="text-center mb-8">
      <img
        src="/logo-name.jpg"
        alt="CEC Logo"
        className="mx-auto mb-4 rounded-lg"
      />
    </div>

    {/* Organization Name */}
    <div className="bg-blue-500 rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold text-white ">Contact Information</h2>
    

    {/* Contact Information Section */}
    <div className="bg-gray-100 rounded-lg p-6 mb-6">
      <h2 className="text-4xl font-semibold mb-4">{connector.organization_name_4}</h2>
      <div className="flex justify-between">
        {/* Left Box - Contact Info */}
        <div className="w-1/2">
          <p><strong>{connector.first_name} {connector.last_name}</strong></p>
          <p>{connector.user_jobTitle_7}</p>
          <p>Email: {connector.user_email_5}</p>
          <p>Work Phone: {connector.user_workPhone_3}</p>
          <p>Personal Phone: {connector.user_mobilePhone_8 || "N/A"}</p>
          <p>TimeZone: {connector.user_timezone_30}</p>
        </div>
        {/* Right Box - Website */}
        <div className="w-1/2 flex items-center justify-center bg-gray-100 rounded-lg p-4">
          <div className="text-center">
            <h3 className="font-semibold mb-2">Website Link</h3>
          <a
            href={connector.organization_website_6.startsWith('http://') || connector.organization_website_6.startsWith('https://') 
              ? connector.organization_website_6
              : `https://${connector.organization_website_6}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            {connector.organization_website_6}
          </a>
          </div>
        </div>
      </div>
    </div>
    </div>

    {/* Service Areas & EECBG Activities Section */}
    <div className="bg-green-500 rounded-lg p-6 mb-6">
    <h2 className="text-2xl font-semibold mb-4 text-white">Areas & Activities</h2>
      <div className="flex justify-between gap-x-6">
        {/* Left Box - Service Areas */}
        <div className="w-1/2 bg-gray-100 rounded-lg p-4">
          <h2 className="text-xl font-semibold">Service Areas</h2>
          <ul className="list-disc pl-6">
            {connector.service_areas && connector.service_areas[0] ? (
              Object.keys(connector.service_areas[0])
                .filter(area => !['id', 'form_id', 'user_id'].includes(area))
                .map((area, idx) => {
                  return connector.service_areas[0][area] ? (
                    <li key={idx}>{area.replace(/_/g, ' ')}</li> 
                  ) : null;
                })
            ) : (
              <li>No service areas available</li>
            )}
          </ul>
        </div>
        {/* Right Box - EECBG Activities */}
        <div className="w-1/2 bg-gray-100 rounded-lg p-4">
          <h2 className="text-xl font-semibold">EECBG Eligible Activities</h2>
          <ul className="list-disc pl-6">
            {connector.eecbg_activities.map((activity, idx) => {
              const activityCategories = Object.keys(activity).filter((key) => activity[key] === true);
              return activityCategories.length > 0 ? (
                <div key={idx}>
                  {activityCategories.map((category, index) => {
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
                      category_14_private_sector_funding: "Programs for Financing, Purchasing, and Installing Energy Efficiency, Renewable Energy, and Zero-emission Transportation",
                    };
                    return <li key={index}>{categoryNames[category]}</li>;
                  })}
                </div>
              ) : null;
            })}
          </ul>
        </div>
      </div>
    </div>

    {/* Relevant Projects and Initiatives */}
    <div className="bg-blue-500 rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold text-white mb-4">Relevant Projects and Initiatives</h2>
      <div className="bg-gray-100 rounded-lg p-4 mb-4">
        <h3 className="text-xl font-semibold">Experience in Supporting EECBG Formula Applicants</h3>
        <p>{connector.EECBGExperience_11}</p>
      </div>
      <div className="bg-gray-100 rounded-lg p-4 mb-4">
        <h3 className="text-xl font-semibold">Experience in Providing Technical Assistance</h3>
        <p>{connector.publicTaExperience_12}</p>
      </div>
      <div className="bg-gray-100 rounded-lg p-4">
        <h3 className="text-xl font-semibold">Plan to Engage with Underserved Communities</h3>
        <p>{connector.underservedPlan_16}</p>
      </div>
    </div>

    {/* Success Stories and Case Studies */}
    <div className="bg-green-500 rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-white">Success Stories and Case Studies</h2>
      <div className="bg-gray-100 rounded-lg p-4 mb-4">
        <h3 className="text-xl font-semibold">Past Experience with Underserved Communities</h3>
        <p>{connector.underservedExperience_15}</p>
      </div>
      <div className="bg-gray-100 rounded-lg p-4 mb-4">
        <h3 className="text-xl font-semibold">Experience with Federal Grant Management Processes</h3>
        <p>{connector.federalGrantExperience_17}</p>
      </div>
      <div className="bg-gray-100 rounded-lg p-4">
        <h3 className="text-xl font-semibold">Collaborations with Other Organizations</h3>
        <p>{connector.collaborationExperience_18}</p>
      </div>
    </div>
  </div>
  );
};

export default ConnectorsProfilePage;
