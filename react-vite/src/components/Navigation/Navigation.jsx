import { useState } from "react";
import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle the dropdown menu
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo on the left */}
        <div className="text-xl font-semibold">
          <NavLink to="/" className="text-gray-800">
          <img
              src="/image.png"
              alt="Logo"
              className="w-22 h-14 hover:ring-4 hover:ring-blue-500 rounded-full transition duration-200"
            />
          </NavLink>
        </div>

        {/* Links in the middle */}
        <div className="space-x-8 hidden md:flex">
          <NavLink to="/about" className="text-gray-800 hover:text-blue-500">
            About
          </NavLink>
          <NavLink to="/directory" className="text-gray-800 hover:text-blue-500">
            Directory
          </NavLink>
          <NavLink to="/resources" className="text-gray-800 hover:text-blue-500">
            Resources
          </NavLink>
          <NavLink to="/contact" className="text-gray-800 hover:text-blue-500">
            Contact
          </NavLink>
        </div>

      {/* Profile Button with dropdown on the right */}
      <div className="relative">
        <ProfileButton />  {/* Add ProfileButton here */}
      </div>
      </div>
    </nav>
  );
}

export default Navigation;
