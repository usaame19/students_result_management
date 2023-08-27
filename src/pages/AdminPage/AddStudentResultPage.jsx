import React from 'react'
import Protected from '../../util/Protected'
import AddStudentResult from '../../components/Admin/AddStudentResult'

const AddStudentResultPage = () => {
  return (
    <div>
      <Protected>
        <AddStudentResult />
      </Protected>
    </div>
  )
}

export default AddStudentResultPage
