import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserConnector, deleteConnector } from '../../redux/directory';
import OpenModalButton from "../OpenModalButton";
import DeleteModal from "../DeleteModal";

function ManagePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // Get the user ID from the session
    const userId = useSelector((state) => state.session.user.id);

    // Get the user's connector form data from Redux state
    const userConnector = useSelector(state => state.directory.userConnector);

    // Dispatch fetchUserConnector on component mount to get the logged-in user's form data
    useEffect(() => {
        if (userId) {
            dispatch(fetchUserConnector(userId));  // Fetch user form data based on userId
        }
    }, [dispatch, userId]);  // Re-run the effect if userId changes

    const handleDeleteForm = async () => {
        if (!userConnector) {
            console.error("No form to delete");
            return;
        }
        
        try {
            console.log("Deleting form with ID:", userConnector.id);
            const result = await dispatch(deleteConnector(userConnector.id));
            
            if (result.success) {
                console.log("Form deleted successfully");
                // Stay on the manage page and show a success message
                alert("Form deleted successfully");
                // Refresh the user connector data to show the updated state
                dispatch(fetchUserConnector(userId));
            } else {
                console.error("Failed to delete form:", result.error);
                alert("Failed to delete form: " + result.error);
            }
        } catch (error) {
            console.error("Error deleting form:", error);
            alert("An error occurred while deleting the form");
        }
    };
    
    const handleTileClick = (e)=> {
        if (e.target.closest('button')) {
            return; // Stop navigation if delete button is clicked
        }
        navigate(`/connector/${userId}`);
    }

    // If no userConnector data exists yet, show loading message
    // if (!userConnector) {
    //     return <div>Loading...</div>;
    // }

    return(
    <div>
        <img
            src="/logo-name.jpg"
            alt="Logo"
            className="mx-auto my-4"
            />
        <h1 className="text-center text-2xl font-bold">Manage CEC Partner Organizations</h1>
          {/* Add your Organization button */}
        <div className="mb-4">
            <Link
                to="/CECform"  // Navigate to the /CECform page when clicked
                className="inline-block px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-700 transition-all"
                >
                Add an Organization to CEC partners
            </Link>
        </div>

        <div onClick={handleTileClick} className="organization-tile mt-8 p-6 border-2 border-gray-300 rounded-lg hover:shadow-lg hover:border-blue-500 transition-all inline-block px-4">
        {userConnector ? (
    <>
            <h3 className="text-xl font-semibold">{userConnector.organization_name_4}</h3>
            <p className="text-gray-600">{userConnector.organization_website_6}</p>
            <p className="text-gray-600">{userConnector.user_jobTitle_7}</p>
            <p className="text-gray-600">{userConnector.user_email_5}</p>
            <p className="text-gray-600">{userConnector.user_workPhone_3}</p>
            <p className="text-gray-600">{userConnector.user_timezone_30}</p>
            </>
  ) : (
    <p className="text-gray-600">No organization data available. Please fill out the form.</p>
  )}

            <div className="mt-4 flex gap-4">
                <button 
                    onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/CECform/update`);
                      }}
                    className="btn btn-primary px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-all"
                    >
                    Update Form
                </button>
                <OpenModalButton
                  buttonText="Delete Form"
                  className="btn btn-danger px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 transition-all"
                  onClick={(e) => {
                    e.stopPropagation();                 
                  }}
                  modalComponent={
                    <DeleteModal
                      itemType="CEC Partner"
                      onConfirm={handleDeleteForm}
                    />
                }
                />
            </div>
        </div>
    </div>
    )
}

export default ManagePage
