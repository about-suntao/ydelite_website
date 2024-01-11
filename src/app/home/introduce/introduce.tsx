import React from 'react'
import styles from './introduce.module.scss'
import Image from 'next/image'

function Introduce() {
  return (
    <div className={styles.introduce}>
      <div className={styles.introduceCenter}>
        <div className={styles.title}>
          <h2>ABOUT</h2>
          <h2>Elite Education</h2>
          <h2>精英部国际高中</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.detail}>
            <p>深圳市云顶学校是2004年经深圳市批准创办的一所“十二年一贯制”国有民办学校。学校毗邻福田区政府，位于福田中心区域。</p>
            <p>云顶学校精英部成立于2014年，学部坚持“外语特色、文理并重、国际合作”的办学思想，
              云顶精英国际高中经深圳市教育局批准开设“国际课程实验班”，搭建对外交流合作平台，拓宽云顶学子升学渠道。</p>
            <p>2023年，原广大附中AP国际部核心团队加盟云顶精英国际高中，依托中科大校友基金会全球知名校友与教授网络，在深圳打造一所全体系，高品质，强出口的国际化学校新旗舰。</p>
          </div>
          <button>learn more</button>
        </div>
      </div>
    </div>
  )
}

export default Introduce
