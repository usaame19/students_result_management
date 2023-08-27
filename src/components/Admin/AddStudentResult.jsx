import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UseApp from '../../Hooks/UseApp';

const AddStudentResult = () => {
  const { className } = useParams();
  const { state } = UseApp();
  const navigate = useNavigate();

  const studentsInClass = state.students.filter(student => student.className === className);

  return (
    <div className="mt-10 mx-auto max-w-md p-6 border rounded shadow">
      <h1 className="text-2xl font-semibold mb-4">Students in {className}</h1>
      <ul className="space-y-4">
        {studentsInClass.map(student => (
          <li 
          onClick={()=> navigate(`/exams-result/${student.rollNumber}`)}
          key={student.rollNumber} className="border p-4 rounded shadow cursor-pointer">
            <h3 className="text-lg font-semibold">{student.fullName}</h3>
            <p className="text-gray-600">Email: {student.email}</p>
            <p className="text-gray-600">Roll Number: {student.rollNumber}</p>
          </li>
        ))}
      </ul>
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => navigate(-1)}
      >
        Back to Results
      </button>
    </div>
  );
};

export default AddStudentResult;
