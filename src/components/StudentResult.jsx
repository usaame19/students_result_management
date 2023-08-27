import React from "react";

const StudentResult = ({ student }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-5xl mx-auto mt-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Student Result</h2>
        <div className="mb-4">
          <div className="text-lg mb-2">
            <span className="font-medium">Name:</span> {student.studentName}
          </div>
          <div className="text-lg mb-2">
            <span className="font-medium">Roll Number:</span>{" "}
            {student.studentRollNumber}
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Subjects</h3>
          {student.subjects.map((subject, index) => (
            <div key={index} className="flex justify-between py-1">
              <span>{subject.subjectName}</span>
              <span className="font-semibold">{subject.studentResult}%</span>
            </div>
          ))}
        </div>
        <div className="mb-4">
          <div className="flex justify-between">
            <span className="font-medium">Total percentage:</span>{" "}
            <span>{student.totalPercentage}%</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">
              Status:
            </span>{" "}
            <span
              className={
                student.status === "Pass"
                  ? "text-green-600 font-semibold"
                  : "text-red-600 font-semibold"
              }
            >
              {student.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentResult;
