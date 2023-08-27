import React from "react";
import { PiExamDuotone, PiStudentFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="font-semibold text-4xl sm:text-6xl mb-4">
          Welcome, Eng Usama
        </h1>
        <div
          className="grid gap-8 md:grid-cols-2 pt-10 cursor-pointer"
        >
          <div
          onClick={() => navigate("/add-student")}
          className="border p-6 flex flex-col items-center justify-center rounded-lg shadow-md transition duration-300 hover:bg-blue-50">
            <PiStudentFill className="w-12 h-12 text-blue-500 mb-2" />
            <h2 className="text-xl font-semibold">Students</h2>
            <p className="text-gray-600 mt-2">
              Manage student profiles and results
            </p>
          </div>
          <div 
          onClick={() => navigate("/add-result")}
          className="border p-6 flex flex-col items-center justify-center rounded-lg shadow-md transition duration-300 hover:bg-blue-50">
            <PiExamDuotone className="w-12 h-12 text-blue-500 mb-2" />
            <h2 className="text-xl font-semibold">Exams</h2>
            <p className="text-gray-600 mt-2">Manage and analyze exam data</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
