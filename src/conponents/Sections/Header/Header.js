import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Headers = () => {
  const [toggle, setToggle] = useState(true);
  const { user, logOut } = useAuth();
  const LogOutHandler = () => {
    logOut();
  };
  return (
    <div>
      {/* <!-- navbar goes here --> */}
      <nav className="bg-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* <!-- logo --> */}
              <div>
                <NavLink
                  to="/"
                  className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  <svg
                    className="h-6 w-6 mr-1 text-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  <span className="font-bold">Destination</span>
                </NavLink>
              </div>

              {/* <!-- primary nav --> */}
              <div className="hidden md:flex items-center space-x-1">
                <NavLink
                  to="/add-destination"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  Add Destination
                </NavLink>
                <NavLink
                  to="/manage-movie"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  Manage All Orders
                </NavLink>
                <NavLink
                  to="/manage-movie"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  My Orders
                </NavLink>
              </div>
            </div>

            {/* <!-- secondary nav --> */}
            <div className="hidden md:flex items-center space-x-1">
              {user ? (
                <div className="flex items-center gap-3">
                  <p>Sign in As: {user.displayName}</p>

                  <button
                    onClick={LogOutHandler}
                    className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300
                  text-yellow-900 hover:text-yellow-800 rounded transition
                  duration-300"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <NavLink
                  to="/login"
                  className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
                >
                  Login
                </NavLink>
              )}
            </div>

            {/* <!-- mobile button goes here --> */}
            <div className="md:hidden flex items-center">
              <button
                className="mobile-menu-button"
                onClick={() => setToggle(!toggle)}
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* <!-- mobile menu --> */}
        <div
          className={`mobile-menu  ${
            toggle ? "hidden" : " "
          } md:hidden mx-4 flex flex-col items-center`}
        >
          {user ? (
            <div className="flex items-center flex-col gap-3">
              <p>Sign in As: {user.displayName}</p>

              <button
                onClick={LogOutHandler}
                className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300
                  text-yellow-900 hover:text-yellow-800 rounded transition
                  duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
            >
              Login
            </NavLink>
          )}
          <NavLink
            to="/add-movie"
            className="block py-2 px-3 text-gray-700 hover:text-gray-900"
          >
            My Orders
          </NavLink>
          <NavLink
            to="/manage-movie"
            className="block py-2 px-3 text-gray-700 hover:text-gray-900"
          >
            Manage All Orders
          </NavLink>
          <NavLink
            to="/add-destination"
            className="block py-2 px-3 text-gray-700 hover:text-gray-900"
          >
            Add Destination
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Headers;
