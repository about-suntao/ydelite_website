import React from 'react'
import BannerComponents from '@/components/bannerComponents/banner'
import Class from './class/class'
import Dominance from './dominance/dominance'
import Introduction from '../home/introduction/introduction'
import Apply from '../admissionSituation/apply/apply'
function International() {
  return (
    <div>
      <BannerComponents name="Global Cooperation"></BannerComponents>
      <Class></Class>
      <Dominance></Dominance>
      <Introduction></Introduction>
      <Apply></Apply>
    </div>
  )
}

export default International
