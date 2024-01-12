import React from 'react'
import BannerComponents from '@/components/bannerComponents/banner'
import Introduce from '../home/introduce/introduce'
import AboutUs from '../home/aboutUs/aboutUs'
import Playground from './playground/playground'
import Govern from './govern/govern'
import Instructor from '../home/instructor/instructor'
import ContactUs from './contact/contact'

function About() {
  return (
    <div>
      <BannerComponents name="ABOUT US"></BannerComponents>
      <Introduce></Introduce>
      <AboutUs></AboutUs>
      <Playground></Playground>
      <Govern></Govern>
      <Instructor></Instructor>
      <ContactUs></ContactUs>
    </div>
  )
}

export default About
