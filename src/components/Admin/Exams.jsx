import React from "react";
import { useNavigate } from "react-router-dom";
import UseApp from "../../Hooks/UseApp";
import { TbMoodEmptyFilled } from "react-icons/tb"; 

const Exams = () => {
  const { state, dispatch } = UseApp();
  const navigate = useNavigate();

  return (
    <div className="pt-16">
      {state.results.length > 0 ? (
        <div className="bg-white rounded-lg shadow-md p-4 max-w-md mx-auto mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Saved Exams</h2>
            <button
              onClick={() => navigate("/add-result")}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add New Exam
            </button>
          </div>
          {state.results.map((result, index) => (
            <div
              key={index}
              className="border p-4 mb-4 flex items-center justify-between"
            >
              <div>
                <p>
                  <span className="font-semibold">Exam Name:</span>{" "}
                  {result.exam}
                </p>
                <p>
                  <span className="font-semibold">Exam Date:</span>{" "}
                  {result.examDate}
                </p>
                <p>
                  <span className="font-semibold">Class Name:</span>{" "}
                  {result.className}
                </p>
              </div>
              <div className="flex">
                <button 
                onClick={() => navigate(`/add-student-result/${result.className}`)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                  Edit
                </button>
                <button
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_RESULT",
                            payload: result.examId,
                          })
                        }
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Delete
                      </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4 justify-center items-center min-h-screen">
          <div className="flex flex-col items-center justify-center mt-8">
            <TbMoodEmptyFilled className="w-16 h-16 text-gray-400" />
            <h1 className="text-xl font-semibold mt-4">No results in here</h1>
          </div>
          <button
            onClick={() => navigate("/add-result")}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Add New Exam
          </button>
        </div>
      )}
    </div>
  );
};

export default Exams;
