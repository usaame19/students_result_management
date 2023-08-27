import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UseApp from "../../Hooks/UseApp";
const AddStudent = () => {
    const {state, dispatch} = UseApp()
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [className, setClassName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const randomRollNumber = Math.floor(Math.random() * 10000) + 1;
  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Check if a student with the same class name already exists
    const sameEmail = state.students.find(
      (student) => student.email === email
    );
  
    if (sameEmail) {
      alert('the email is already used by another student')
    } else {
      const newStudent = {
        studentId: randomRollNumber,
        firstName,
        lastName,
        className,
        email,
        fullName: firstName + ' ' + lastName,
        rollNumber: randomRollNumber,
      };
      
      dispatch({
        type: "ADD_STUDENT",
        payload: newStudent,
      });
  
      navigate("/admin/students");
    }
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
              onChange={(event) => setClassName(event.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
