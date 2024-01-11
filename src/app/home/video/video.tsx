import React from 'react'
import styles from './video.module.scss'
import Image from 'next/image'
import play from '../../../../public/img/home/play.png'

function Video() {
  return (
    <div className={styles.video}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h2>精英国际高中</h2>
          <p>Shenzhen Yunding Elite Education</p>
        </div>
        <div className={styles.right}>
          <Image src={play} alt=''></Image>
        </div>
      </div>
    </div>
  )
}

export default Video
