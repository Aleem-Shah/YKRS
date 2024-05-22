import React from 'react'
import { Hero } from './Hero'
import AboutVideo from './AboutVideo'
import Programs from './Programs'

import Testimonials from './Testemonials'


const page = () => {
  return (
    <div>
        <Hero/>
        <div className="!px-6  xl:!px-72">

        <AboutVideo/>
        <Programs/>
        <Testimonials/>
        </div>
    </div>
  )
}

export default page