import React from 'react'
import BannerComponents from '@/components/bannerComponents/banner'
import Govern from './govern/govern'
import Features from './feature/features'
import ForeignTeachers from './foreignTeachers/foreignTeachers'
import Counselors from './Counselors/counselors'
import Instructor from '../home/instructor/instructor'

function Education() {
  return (
    <div>
      <BannerComponents name="Pedagogical"></BannerComponents>
      <Govern></Govern>
      <Features></Features>
      <ForeignTeachers></ForeignTeachers>
      <Counselors></Counselors>
      <Instructor></Instructor>
    </div>
  )
}

export default Education
