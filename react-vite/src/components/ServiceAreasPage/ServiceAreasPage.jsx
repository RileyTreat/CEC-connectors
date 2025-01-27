import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocations, fetchConnectorsByLocation } from "../../redux/directory";  
import { Link } from "react-router-dom";  

const ServiceAreasPage = () => {
  const dispatch = useDispatch();
  const locations = useSelector((state) => state.directory.locations); 
  const connectors = useSelector((state) => state.directory.connectors); 
  const [selectedArea, setSelectedArea] = useState(null); 


  // Fetch locations on page load
  useEffect(() => {
    dispatch(fetchLocations());
  }, [dispatch]);

  // Fetch connectors when a service area is selected
  useEffect(() => {
    if (selectedArea) {
      dispatch(fetchConnectorsByLocation(selectedArea)); // Fetch connectors based on selected service area
    }
  }, [selectedArea, dispatch]);

  const handleAreaClick = (area) => {
    setSelectedArea(area); // Set the selected area
  };

 


  return (
    <div>
      <h1 className="text-center font-bold text-2xl">Service Areas</h1>
      <h3 className="text-center">Click on the service area you are looking for and a list of connectors will appear below.</h3>

      {/* Render Service Areas */}
      
        <div className="flex flex-wrap justify-center mt-6 space-x-4 space-y-4">
          {locations.length > 0 ? (
            locations.filter(area => !["user_id", "id"].includes(area)).sort().map((area) => (
              <button
                key={area}
                onClick={() => handleAreaClick(area)}  
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:shadow-lg"
              >
                {area.replace(/_/g, ' ')}
              </button>
            ))
          ) : (
            <p>Loading locations...</p> 
          )}
        </div>
      

      {/* Render Connectors for the selected Area */}
      {selectedArea && (
        <div className="mt-6">
          <h2 className="text-center font-semibold text-xl">
            Connectors in {selectedArea.replace(/_/g, ' ')}
          </h2>
          <div className="space-y-4 mt-4">
            {connectors.length > 0 ? (
              connectors.map((connector) => (
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
              <p>No connectors available for this area.</p> 
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceAreasPage;
