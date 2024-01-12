import React from 'react'
import styles from './contact.module.scss'
import Image from 'next/image'
import dynamic from 'next/dynamic';

import publicCode from '../../../../public/img/footer/publicCode.png'
import wxCode from '../../../../public/img/footer/wxCode.png'

import { EnvironmentFilled, PhoneFilled } from '@ant-design/icons';

const GdMapWithNoSSR = dynamic(() => import('@/components/gaode/GdMap'), {
  ssr: false
});

function ContactUs() {
  return (
    <div className={styles.contact}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h2>联系方式</h2>
          <h3>Contact Us</h3>
          <div className={styles.itemBox}>
            <h4>学校地址</h4>
            <div className={styles.item}>
              <div className={styles.itemLeft}>
                <EnvironmentFilled />
              </div>
              <div className={styles.itemRight}>
                <p>深圳市福田区皇岗公园⼀街 </p>
                <p>深圳市云顶学校精英教育招⽣办D101</p>
              </div>
            </div>
          </div>
          <div className={styles.itemBox}>
            <h4>联系电话</h4>
            <div className={styles.item}>
              <div className={styles.itemLeft}>
                <PhoneFilled />
              </div>
              <div className={styles.itemRight}>
                <p>13923745800 </p>
                <p>0755-83846474</p>
              </div>
            </div>
          </div>
          <div className={styles.qrBox}>
            <div className={styles.qrCode}>
              <Image src={publicCode} alt=''></Image>
              <p>云顶精英公众号</p>
            </div>
            <div className={styles.qrCode}>
              <Image src={wxCode} alt=''></Image>
              <p>云顶精英微信号</p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <GdMapWithNoSSR></GdMapWithNoSSR>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
