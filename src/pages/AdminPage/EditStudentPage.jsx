import React from "react";
import EditStudent from "../../components/Admin/EditStudent";
import Protected from "../../util/Protected";

const EditStudentPage = () => {
  return (
    <div>
      <Protected>
        <EditStudent />
      </Protected>
    </div>
  );
};

export default EditStudentPage;
