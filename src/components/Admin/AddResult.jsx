import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UseApp from "../../Hooks/UseApp";

const AddResult = () => {
  const { state, dispatch } = UseApp();
  const randomExamId = Math.floor(Math.random() * 10000) + 1;
  const [examData, setExamData] = useState({
    examId: randomExamId,
    exam: "",
    examDate: "",
    className: "",
    subjects: [],
    total: "",
    passMarks: "",
  });

  const navigate = useNavigate();

  const handleAddSubject = () => {
    // Check if any of the required fields are empty
    if (
      !examData.exam ||
      !examData.examDate ||
      !examData.className ||
      !examData.subject ||
      !examData.total ||
      !examData.passMarks
    ) {
      alert("Please fill in all fields before adding a subject.");
      return;
    }

    // Check for duplicate examination name
    const hasDuplicateExamName = state.results.some(
      (result) => result.exam === examData.exam
    );
    if (hasDuplicateExamName) {
      alert("Examination name is already added.");
      return;
    }

    // Check for duplicate subject name
    const hasDuplicateSubject = examData.subjects.some(
      (subject) => subject.subjectName === examData.subject
    );
    if (hasDuplicateSubject) {
      alert("A subject with the same name already exists.");
      return;
    }
     // Check if the entered class name exists in the list of student classes
     const hasValidClassName = state.students.some(
      (student) => student.className === examData.className
    );
    if (!hasValidClassName) {
      alert("We don't have this class. It must be found in students' classes.");
      return;
    }

    const newSubject = {
      subjectName: examData.subject,
      totalMarks: examData.total,
      passMarks: examData.passMarks,
    };

    setExamData((prevData) => ({
      ...prevData,
      subjects: [...prevData.subjects, newSubject],
      subject: "",
      total: "",
      passMarks: "",
    }));
  };

  const handleSubmitResults = () => {
    if (examData.subjects.length === 0) {
      alert("Please add at least one subject before saving.");
      return;
    }
    

    dispatch({
      type: "ADD_RESULT",
      payload: examData,
    });
    navigate("/admin/exams");
  };

  const isSaveButtonDisabled = examData.subjects.length === 0;
  return (
    <div className="bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-4 max-w-md mx-auto mt-16">
        <h2 className="text-2xl font-semibold mb-4">Add Result</h2>
        <form onSubmit={handleSubmitResults}>
          <div className="mb-4">
            <label
              htmlFor="examName"
              className="block text-sm font-medium mb-1"
            >
              Examination Name
            </label>
            <input
              type="text"
              id="exam"
              className="w-full border p-2"
              required
              value={examData.exam}
              onChange={(event) =>
                setExamData({ ...examData, exam: event.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="examDate"
              className="block text-sm font-medium mb-1"
            >
              Examination Date
            </label>
            <input
              type="date"
              id="examDate"
              className="w-full border p-2"
              required
              value={examData.examDate}
              onChange={(event) =>
                setExamData({ ...examData, examDate: event.target.value })
              }
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
              value={examData.className}
              onChange={(event) =>
                setExamData({ ...examData, className: event.target.value })
              }
            />
          </div>

          {/* Subject Section */}
          <div className="mb-4">
            <label
              htmlFor="subjectName"
              className="block text-sm font-medium mb-1"
            >
              Subject Name
            </label>
            <input
              type="text"
              id="subjectName"
              className="w-full border p-2"
              required
              value={examData.subject}
              onChange={(event) =>
                setExamData({ ...examData, subject: event.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="totalMarks"
              className="block text-sm font-medium mb-1"
            >
              Total Marks
            </label>
            <input
              type="text"
              id="totalMarks"
              className="w-full border p-2"
              required
              value={examData.total}
              onChange={(event) =>
                setExamData({ ...examData, total: event.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="passMarks"
              className="block text-sm font-medium mb-1"
            >
              Pass Marks
            </label>
            <input
              type="text"
              id="passMarks"
              className="w-full border p-2"
              required
              value={examData.passMarks}
              onChange={(event) =>
                setExamData({ ...examData, passMarks: event.target.value })
              }
            />
          </div>
          <button
            type="button"
            onClick={handleAddSubject}
            disabled={
              !examData.exam ||
              !examData.examDate ||
              !examData.className ||
              !examData.subject ||
              !examData.total ||
              !examData.passMarks
            }
            className={`${
              !examData.exam ||
              !examData.examDate ||
              !examData.className ||
              !examData.subject ||
              !examData.total ||
              !examData.passMarks
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-700"
            } text-white font-bold py-2 px-4 rounded`}
          >
            Add Subject
          </button>
          <button
            type="submit"
            onClick={handleSubmitResults}
            disabled={isSaveButtonDisabled} // Disable the button if no subjects are added
            className={`${
              isSaveButtonDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-700"
            } text-white font-bold py-2 px-4 rounded ml-4`}
          >
            Save Results
          </button>

          {/* Display Added Subjects */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Added Subjects:</h3>
            {examData.subjects.map((subject, index) => (
              <div key={index} className="border p-4 mb-2">
                <p className="text-lg font-semibold">{subject.subjectName}</p>
                <p>Total Marks: {subject.totalMarks}</p>
                <p>Pass Marks: {subject.passMarks}</p>
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddResult;
