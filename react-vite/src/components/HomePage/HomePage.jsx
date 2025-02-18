import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OpenModalButton from "../OpenModalButton"; // Correct path if necessary
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { useDispatch } from "react-redux";
import { thunkLogin } from "../../redux/session"; // Assuming you have a login thunk action

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();



  return (
    <div className="relative h-screen bg-cover bg-center bg-fixed " style={{ backgroundImage: "url('/bulb.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      {/* Content goes here */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-white text-center w-full">
        <img src="/logo-name.jpg" alt="CEC Logo" className="mx-auto mb-8 rounded-lg" />
        <div className="flex justify-center space-x-12">
          {/* Right column */}
          <div className="w-1/2 p-4 bg-opacity-80 bg-black rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Welcome to the CEC</h2>
            <p className="text-lg mb-4">
              Please enjoy our list of energy connectors across the country that want to make a difference in your community.
            </p>
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              onClick={() => navigate('/about')}  // Navigate to About page directly
            >
              Learn More
            </button>
          </div>

          {/* Left column */}
          <div className="w-1/2 p-4 bg-opacity-80 bg-black rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Become a CEC Partner</h2>
            <p className="text-lg mb-4">If you are a CEC partner or want to be, please sign up or log in below.</p>
            <div className="flex justify-center space-x-4">
              {/* OpenModalMenuItem for Log In */}
              <OpenModalButton
                buttonText="Log In"
                className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
                modalComponent={<LoginFormModal  />}
              />

              {/* OpenModalMenuItem for Sign Up */}
              <OpenModalButton
                buttonText="Sign Up"
                modalComponent={<SignupFormModal />}
                className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all"
              />
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default HomePage;
