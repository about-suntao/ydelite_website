import React from 'react'
import BannerComponents from '@/components/bannerComponents/banner'
import ProgressionStatus from './status/status'
import Apply from './apply/apply'

function AdmissionSituation() {
  return (
    <div>
      <BannerComponents name='Progression Status'></BannerComponents>
      <ProgressionStatus></ProgressionStatus>
      <Apply></Apply>
    </div>
  )
}

export default AdmissionSituation
