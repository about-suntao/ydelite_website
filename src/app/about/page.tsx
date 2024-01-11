import React from 'react'
import BannerComponents from '@/components/bannerComponents/banner'
import Introduce from '../home/introduce/introduce'
import AboutUs from '../home/aboutUs/aboutUs'
import Instructor from '../home/instructor/instructor'

function About() {
  return (
    <div>
      <BannerComponents name="ABOUT US"></BannerComponents>
      <Introduce></Introduce>
      <AboutUs></AboutUs>
      <Instructor></Instructor>
    </div>
  )
}

export default About
