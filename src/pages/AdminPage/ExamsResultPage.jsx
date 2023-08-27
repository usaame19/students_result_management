import React from 'react'
import Protected from '../../util/Protected'
import ExamsResult from '../../components/Admin/ExamsResult'


const ExamsResultPage = () => {
  return (
    <div>
      <Protected>
        <ExamsResult />
      </Protected>
    </div>
  )
}

export default ExamsResultPage
