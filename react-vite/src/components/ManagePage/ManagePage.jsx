import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserConnector } from '../../redux/directory';

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

    // Debugging: Log the data to check if it's being correctly set
    console.log("User Connector: ", userConnector);

    const handleUpdateForm = () => {
        navigate('/CECform');
    };
    
    const handleTileClick = ()=> {
        navigate(`/connector/${userId}`)
    }

    // If no userConnector data exists yet, show loading message
    if (!userConnector) {
        return <div>Loading...</div>;
    }

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
            <h3 className="text-xl font-semibold">{userConnector.organization_name_4}</h3>
            <p className="text-gray-600">{userConnector.organization_website_6}</p>
            <p className="text-gray-600">{userConnector.user_jobTitle_7}</p>
            <p className="text-gray-600">{userConnector.user_email_5}</p>
            <p className="text-gray-600">{userConnector.user_workPhone_3}</p>
            <p className="text-gray-600">{userConnector.user_timezone_30}</p>

            <div className="mt-4 flex gap-4">
                <button 
                    onClick={handleUpdateForm}
                    className="btn btn-primary px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-all"
                    >
                    Update Form
                </button>
                <button 
                    className="btn btn-danger px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 transition-all"   
                    >
                    Delete Form
                </button>
            </div>
        </div>
    </div>
    )
}

export default ManagePage
