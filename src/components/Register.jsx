import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UseApp from "../Hooks/UseApp";

const Register = () => {
    const {state, dispatch} = UseApp()
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const  handleSubmit = (event)=> {
        event.preventDefault();
        const newUserData = {
            id: Date.now(),
            username: userName,
            password: password,
        };
        dispatch({
            type: "REGISTER_USER",
            payload: newUserData,
        })
        navigate("/login")
    }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8">
        <div className="text-center">
          <Link className="text-blue-800 text-3xl font-bold mb-2" to="/">
            SHAAM
          </Link>
          <p className="text-gray-600">Web Solutions Woven with Excellence</p>
        </div>

        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Username">
              Username
            </label>
            <input
              className="w-full px-3 py-2 rounded-lg border border-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
              type="text"
              id="text"
              placeholder="Enter your Username"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 rounded-lg border border-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 mb-4"
            type="submit"
          >
            Sign Up
          </button>
          <div className="text-center">
            <Link className="text-blue-500 hover:underline" to="/forgot-password">
              Forgot Password?
            </Link>
            <span className="mx-2 text-gray-400">|</span>
            <Link className="text-blue-500 hover:underline" to="/login">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
