import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle } from 'react-icons/fa';
import { thunkLogout } from "../../redux/session";
import OpenModalMenuItem from "./OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

function ProfileButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const user = useSelector((store) => store.session.user);
  const ulRef = useRef();

  const toggleMenu = (e) => {
    e.stopPropagation(); // Keep from bubbling up to document and triggering closeMenu
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (ulRef.current && !ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(thunkLogout());
    closeMenu();
    navigate('/');
  };


  return (
    <>
      <button onClick={toggleMenu}>
        <FaUserCircle className="text-2xl"/>
      </button>
      {showMenu && (
        <div className="absolute right-0 mt-2 shadow-lg rounded-md w-48 text-sm text-gray-700 bg-white bg-white z-50"
        ref={ulRef}>
        <ul className="py-2" >
          {user ? (
            <>
              <li className="px-4 py-2 hover:bg-gray-100">{user.first_name} {user.last_name}</li>
                <li className="px-4 py-2 hover:bg-gray-100">{user.email}</li>
                <li>
                  <Link
                    to="/manage"  
                    className="block w-full text-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-all"
                  >
                    Manage Organizations
                  </Link>
                </li>
                <li>
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    Log Out
                  </button>
                </li>
            </>
          ) : (
            <>
              <OpenModalMenuItem
                itemText="Log In"
                onItemClick={closeMenu}
                modalComponent={<LoginFormModal />}
                className="block px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300"
              />
              <OpenModalMenuItem
                itemText="Sign Up"
                onItemClick={closeMenu}
                modalComponent={<SignupFormModal />}
                className="block px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300"
                
              />
            </>
          )}
        </ul>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
