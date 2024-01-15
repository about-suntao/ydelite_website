import React from 'react'
import styles from './InternationalClass.module.scss'
import Image from 'next/image'

import playground from '../../../../public/img/home/playground.png'

function InternationalClass() {
  return (
    <div className={styles.international}>
      <div className={styles.pc}>
        <div className={styles.content}>
          <div className={styles.left}>
            <Image src={playground} alt=''></Image>
            <div className={styles.text}>
              <p>学校展示图</p>
              <span>School display map</span>
            </div>
          </div>
          <div className={styles.right}>
            <h2>云顶精英国际班</h2>
            <h3>International Class</h3>
            <p>云顶学校精英部成立于2014年，学部坚持“外语特色、文理并重、国际合作”的办学思想，
              云顶精英国际高中经深圳市教育局批准开设“国际课程实验班”
              搭建对外交流合作平台，拓宽云顶学子升学渠道</p>
            <button>立即申请</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default InternationalClass
