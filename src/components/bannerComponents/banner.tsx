'use client'
import React from 'react'
import styles from './banner.module.scss'
import Image from 'next/image'

function BannerComponents(props: { name: string }) {
  return (
    <div className={styles.banner}>
      <Image
        src="https://icon-apply.oss-cn-hangzhou.aliyuncs.com/2024/01/10/229_image%20201.png" alt=""
        width={1920}
        height={609}
      />
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>{props.name}</h1>
        </div>
      </div>
    </div>
  )
}

export default BannerComponents
