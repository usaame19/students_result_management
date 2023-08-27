import React from "react";
import AddResult from "../../components/Admin/AddResult";
import Protected from "../../util/Protected";

const AddResultPage = () => {
  return (
    <div>
      <Protected>
        <AddResult />
      </Protected>
    </div>
  );
};

export default AddResultPage;
