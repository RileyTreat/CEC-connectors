// DirectoryDropdown.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DirectoryDropdown = ({closeDropdown}) => {
    const navigate = useNavigate();

    const handleLinkClick = (to) => {
      navigate(to); // Navigate to the specified path
      closeDropdown(); // Close the dropdown
    };

  return (
    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
      <div className="py-2">
    
      <div
          className="block px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer"
          onClick={() => handleLinkClick("/map")}
        >
          <p className="font-bold">Interactive Map</p>
          <p className="text-sm">- Coming soon</p>
        </div>
        <div
          className="block px-4 py-2 font-bold text-gray-800 hover:bg-blue-100 cursor-pointer"
          onClick={() => handleLinkClick("/serviceAreas")}
        >
          Service Areas
        </div>
        <div
          className="block px-4 py-2 font-bold text-gray-800 hover:bg-blue-100 cursor-pointer"
          onClick={() => handleLinkClick("/support")}
        >
          Types of Support
        </div>
      </div>
    </div>
  );
};

export default DirectoryDropdown;
