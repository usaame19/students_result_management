import React from 'react'
import Students from '../../components/Admin/Students'
import Protected from '../../util/Protected'

const StudentsPage = () => {
  return (
    <div>
        <Protected>
      <Students />
      </Protected>
    </div>
  )
}

export default StudentsPage
