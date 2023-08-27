import React, { useState } from "react";
import UseApp from "../Hooks/UseApp";
import StudentResult from "./StudentResult";

const SearchResults = () => {
  const { state } = UseApp();
  const [searchRollNumber, setSearchRollNumber] = useState("");
  const [foundStudents, setFoundStudents] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
  
    const students = state.studentsResult.flatMap((resultArray) =>
      resultArray.filter(
        (student) => student.studentRollNumber === parseInt(searchRollNumber)
      )
    );
  
    console.log(state.studentsResult);
    console.log(students);
  
    setFoundStudents(students);
  };
  
  

  return (
    <div className="flex pt-16 justify-center min-h-screen bg-gray-100">
  <div className="max-w-md mx-auto p-6 border rounded shadow">
    <div>
      <h3 className="font-semibold">
        Please Use Your Roll Number to See Your Results
      </h3>
      <p className="mt-2">
        If you don't have one, please contact the admin.
      </p>
    </div>
    <div className="pt-8">
      <h1 className="font-semibold text-2xl">Instructions</h1>
      <ul className="pl-8 list-disc">
        <li>If your marks are less than 40%, you have failed.</li>
        <li>If you have not paid the fee, you will not get the results.</li>
        <li>If you don't see your results, please contact the admin.</li>
      </ul>
    </div>
    <form className="mt-8 flex flex-col" onSubmit={handleSearch}>
      <label className="font-semibold" htmlFor="rollNumber">
        Search The Result
      </label>
      <input
        type="text"
        id="rollNumber"
        placeholder="Enter your roll number"
        className="border p-2 mt-1"
        value={searchRollNumber}
        onChange={(e) => setSearchRollNumber(e.target.value)}
        required
      />
      <button
        type="submit"
        className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Search
      </button>
    </form>
    {foundStudents.map((student, index) => (
      <StudentResult key={index} student={student} />
    ))}
  </div>
</div>

  );
};

export default SearchResults;
