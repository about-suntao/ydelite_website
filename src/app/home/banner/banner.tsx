import React from 'react'
import styles from './banner.module.scss'
import Image from 'next/image'
import logoImg from '../../../../public/img/footer/logo.png'
import cap from '../../../../public/img/home/cap.png'

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.pc}>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <Image src={logoImg} alt='' ></Image>
            </div>
            <h1>云顶精英国际部</h1>
            <h2>Shenzhen Yunding Elite Education</h2>
            <p>阳光.和谐.多元.发展</p>
            <p>云自天上来 顶从脚下立</p>
          </div>
          <div className={styles.right}>
            <Image src={cap} alt=''></Image>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
