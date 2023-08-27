import React, { useState } from "react";
import UseApp from "../../Hooks/UseApp";
import { useNavigate } from "react-router-dom";
import { TbMoodEmptyFilled } from "react-icons/tb";

const Students = () => {
  const { state, dispatch } = UseApp();
  const navigate = useNavigate();

  return (
    <div>
      {state.students.length > 0 ? (
        <>
          <div className="bg-white rounded-lg shadow-md p-4 max-w-md mx-auto mt-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Students</h2>
              <button
                onClick={() => navigate("/add-student")}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Add New Student
              </button>
            </div>

            <ul>
              {state.students.map((student, index) => (
                  <li
                    key={index}
                    className="border p-4 mb-4 flex justify-between items-center"
                  >
                    <div>
                      <p>
                        <span className="font-semibold">Class Name:</span>{" "}
                        {student.className}
                      </p>
                      <p>
                        <span className="font-semibold">Roll Number:</span>{" "}
                        {student.rollNumber}
                      </p>
                      <p>
                        <span className="font-semibold">First Name:</span>{" "}
                        {student.firstName}
                      </p>
                      <p>
                        <span className="font-semibold">Last Name:</span>{" "}
                        {student.lastName}
                      </p>
                      <p>
                        <span className="font-semibold">Email:</span>{" "}
                        {student.email}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          navigate(`/admin/edit-student/${student.studentId}`)
                        }
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_STUDENT",
                            payload: student.studentId,
                          })
                        }
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-4 justify-center items-center min-h-screen">
          <div className="flex flex-col items-center justify-center mt-8">
            <TbMoodEmptyFilled className="w-16 h-16 text-gray-400" />
            <h1 className="text-xl font-semibold mt-4">No Students in here</h1>
          </div>
          <button
            onClick={() => navigate("/add-student")}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Add New Student
          </button>
        </div>
      )}
    </div>
  );
};

export default Students;
