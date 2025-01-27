import React from "react";
import { Link } from 'react-router-dom';

const DirectoryPage = () => {
    return (
        <div className="flex flex-col items-center space-y-8 py-8">
        {/* Main Title */}
        <h1 className="text-4xl font-bold">CEC Directory</h1>
  
        {/* Subtitle */}
        <h2 className="text-2xl font-semibold">Please choose from one of the three options to help connect you to one of our Community Engergy Connectors.</h2>
  
        {/* Button Container */}
        <div className="space-y-4">
          <Link
            to="/map"
            className="w-64 py-3 px-6 text-center text-white bg-blue-500 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out mr-4 last:mr-0"
          >
            Interactive Map
          </Link>
          <Link
            to="/serviceAreas"
            className="w-64 py-3 px-6 text-center text-white bg-blue-500 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out mr-4 last:mr-0"
          >
            Service Areas
          </Link>
          <Link
            to="/support"
            className="w-64 py-3 px-6 text-center text-white bg-blue-500 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out"
          >
            Types of Support
          </Link>
        </div>
      </div>
      
    )
}

export default DirectoryPage
