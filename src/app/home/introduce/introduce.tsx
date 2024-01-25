import React from 'react'
import styles from './introduce.module.scss'
import Image from 'next/image'
import Link from 'next/link'

function Introduce() {
  return (
    <div className={styles.introduce}>
      <div className={styles.introduceCenter}>
        <div className={styles.title}>
          <h2>ABOUT</h2>
          <h2>Elite Education</h2>
          <h2>云顶学校精英部</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.detail}>
            <p>深圳市云顶学校是2004年经深圳市批准而创办的一所“十二年一贯制”国有民办学校。</p>
            <p>学校毗邻福田区政府，靠近皇岗公园东侧，位居中心区域。得天独厚的地域条件，使之交通便利、环境优雅静谧，是读书就学的理想境地。</p>
            <p>云顶学校精英部成立于2014年，学部坚持“外语特色、文理并重、国际合作”的办学思想，经过十年的发展，目前已初具规模，办学成果显著。云顶精英学子在各项比赛中均取得了骄人的成绩。</p>
          </div>
          <Link href="/about">
            <button>learn more</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Introduce
