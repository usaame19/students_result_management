import React from "react";
import AddStudent from "../../components/Admin/AddStudent";
import Protected from "../../util/Protected";

const AddStudentPage = () => {
  return (
    <div>
      <Protected>
        <AddStudent />
      </Protected>
    </div>
  );
};

export default AddStudentPage;
