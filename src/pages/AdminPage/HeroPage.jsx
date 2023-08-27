import React from 'react'
import Hero from '../../components/Admin/Hero'
import Protected from '../../util/Protected'

const HeroPage = () => {
  return (
    <div>
      <Protected>
      <Hero />
      </Protected>
    </div>
  )
}

export default HeroPage
