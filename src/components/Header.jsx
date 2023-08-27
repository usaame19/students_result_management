import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

import useApp from "../Hooks/UseApp";

const Header = () => {
  const { state, dispatch } = useApp();
  return (
    <div className=" fixed top-0 left-0 right-0  bg-opacity-60 backdrop-blur-md shadow z-10 bg-[#001de4]">
      <div className=" max-w-4xl mx-auto flex justify-between items-center p-4">
        <Link className=" text-white text-2xl font-bold" to="/">
          SHAAM
        </Link>

        <ul className="flex gap-4 text-lg text-white font-semibold">
          
          {state.auth.isAuthenticated ? (
            <>
            <Link className="hover:text-yellow-100" to="/admin">
                Admin
              </Link>
             <Link className="hover:text-yellow-100" to="/admin/exams">
                Results
              </Link>
              
             <Link className="hover:text-yellow-100" to="/admin/students">
                Students
              </Link>
              <button onClick={() => dispatch({ type: "LOGOUT" })}>
                signOut
              </button>
            </>
          ) : (
            <>
            <Link className="hover:text-yellow-100" to="/search-results">
            Search Results
          </Link>
             <Link className="hover:text-yellow-100" to="/admin">
                Admin
              </Link>
              <Link className="hover:text-yellow-100" to="login">
                Login
              </Link>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
