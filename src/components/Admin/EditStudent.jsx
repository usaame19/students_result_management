import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UseApp from "../../Hooks/UseApp";

const EditStudent = () => {
  const { state, dispatch } = UseApp();
  const { id } = useParams();
  const student = state.students.find((s) => s.studentId === parseInt(id));
  const [firstName, setFirstName] = useState(student?.firstName || "");
  const [lastName, setLastName] = useState(student?.lastName || "");
  const [className, setClassName] = useState(student?.className || "");
  const [email, setEmail] = useState(student?.email || "");
  const navigate = useNavigate();


  useEffect(() => {
    // If the post doesn't exist, navigate back to the homepage
    if (!student) navigate("/");
  }, [student, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newStudent = {
      studentId: student.studentId,
      firstName,
      lastName,
      className,
      email,
      rollNumber: student.rollNumber
    };


    dispatch({
      type: "EDIT_STUDENT",
      payload: newStudent,
    });

    navigate("/admin/students");
  };

  return (
    <div className="bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-4 max-w-md mx-auto mt-16">
        <h2 className="text-2xl font-semibold mb-4">Add Student</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium mb-1"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full border p-2"
              required
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium mb-1"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full border p-2"
              required
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border p-2"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="selectedClass"
              className="block text-sm font-medium mb-1"
            >
              Class
            </label>
            <input
              type="text"
              id="selectedClass"
              className="w-full border p-2"
              required
              value={className}
              onChange={(event) => setClassName(event.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            UPDATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditStudent;
