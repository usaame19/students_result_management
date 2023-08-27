import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UseApp from "../../Hooks/UseApp";

const ExamsResult = () => {
  const { rollNumber } = useParams();
  const navigate = useNavigate();
  const { state, dispatch } = UseApp();

  const [studentResults, setStudentResults] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const student = state.students.find(
    (student) => student.rollNumber === parseInt(rollNumber)
  );
  const studentExam = state.results.find(
    (result) => result.className === student.className
  );

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const results = [];
    let totalStudentMarks = 0;
    let totalSubjectMarks = 0;
  
    studentExam.subjects.forEach((subject) => {
      const result = studentResults[subject.subjectName] || "";
      const passMarks = subject.passMarks;
      const totalMarks = subject.totalMarks;
  
      totalStudentMarks += parseFloat(result || 0);
      totalSubjectMarks += parseFloat(totalMarks);
  
      results.push({
        subjectName: subject.subjectName,
        studentResult: result,
      });
    });
  
    const totalPercentage = (totalStudentMarks / totalSubjectMarks) * 100;
    const status = totalPercentage >= 40 ? "Pass" : "Fail";
  
    const studentResult = {
      studentName: student.fullName,
      studentRollNumber: student.rollNumber,
      subjects: results,
      totalPercentage,
      status,
    };
  
    dispatch({
      type: "ADD_STUDENT_RESULT",
      payload: [studentResult], 
    });
  
    setSubmitted(true);
    setStudentResults({});
  };

  const handleResultChange = (event, subjectName) => {
    const newStudentResults = {
      ...studentResults,
      [subjectName]: event.target.value,
    };
    setStudentResults(newStudentResults);
  };

  return (
    <div className="mt-10 mx-auto max-w-md p-6 border rounded shadow">
      <button
        className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => navigate(-1)}
      >
        Back to Results
      </button>

      {studentExam && studentExam.subjects.length > 0 ? (
        <>
          {studentExam.subjects.map((subject, index) => (
            <div key={index} className="mb-6">
              <h1 className="text-2xl font-semibold mb-2">
                {subject.subjectName}
              </h1>
              <p className="text-lg">Total Marks: {subject.totalMarks}</p>
              <input
                value={studentResults[subject.subjectName] || ""}
                onChange={(e) => handleResultChange(e, subject.subjectName)}
                type="number"
                className="border p-2 w-full mt-4"
                placeholder="Enter student result"
                required
              />
            </div>
          ))}
          <button
            onClick={handleSubmit}
            className={`mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
              submitted ? "bg-gray-400 cursor-not-allowed" : ""
            }`}
            disabled={submitted}
          >
            {submitted ? "Results Submitted" : "Submit Results"}
          </button>
        </>
      ) : (
        <p>No exam results available for this student.</p>
      )}
    </div>
  );
};

export default ExamsResult;
