import React from 'react'
import styles from './page.module.scss'
import Image from 'next/image'

import { EnvironmentFilled, PhoneFilled } from '@ant-design/icons';

import cap from '../../../public/img/footer/cap.png'
import logo from '../../../public/img/footer/logo.png'
import publicCode from '../../../public/img/footer/publicCode.png'
import wxCode from '../../../public/img/footer/wxCode.png'

import img1 from '../../../public/img/home/14.webp'
import img2 from '../../../public/img/home/15.webp'
import img3 from '../../../public/img/home/16.webp'



import { QRCode } from 'antd'

function Footer() {

  const newsData = [
    {
      id: 1,
      img: img1,
      title: '用铁纪铸我风采 以军魂耀我青春',
      time: '2023-09-01',
    },
    {
      id: 2,
      img: img2,
      title: '青衿鸿鹄同风志 展翅寰宇万里云',
      time: '2023-06-25',
    },
    {
      id: 3,
      img: img3,
      title: '军风巍巍淬青春 英姿飒爽致芳华',
      time: '2023-02-26',
    },
  ]

  return (
    <div className={styles.footer}>
      <div className={styles.foot_top}>
        <div className={styles.top_content}>
          <div className={styles.img}>
            <Image src={cap} alt=''></Image>
          </div>
          <div className={styles.search}>
            <p>SHENZHEN YUNDING ELITE EDUCATION</p>
            <div className={styles.searchBox}>
              <input></input>
              <button>搜索</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.foot_bottom}>
        <div className={styles.bottom_content}>
          <div className={styles.school}>
            <div className={styles.logo}>
              <Image src={logo} alt='logo'></Image>
            </div>
            <p className={styles.mark}>阳光.和谐.多元.发展</p>
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
          <div className={styles.contact}>
            <h2>联系方式</h2>
            <div className={styles.card}>
              <p>学校地址</p>
              <div className={styles.cardBody}>
                <div className={styles.left}>
                  <EnvironmentFilled />
                </div>
                <div className={styles.right}>
                  <p>深圳市福田区皇岗公园⼀街</p>
                  <p>深圳市云顶学校精英教育招⽣办D101</p>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <p>联系电话</p>
              <div className={styles.cardBody}>
                <div className={styles.left}>
                  <PhoneFilled />
                </div>
                <div className={styles.right}>
                  <p>13923745800</p>
                  <p>0755-83846474</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.situation}>
            <h2>云顶概况</h2>
            <p>关于我们</p>
            <p>教育教学</p>
            <p>国际合作</p>
            <p>新闻资讯</p>
            <p>近年录取情况</p>
          </div>
          <div className={styles.news}>
            <h2>最新资讯</h2>
            {
              newsData.map((item) => {
                return (
                  <div className={styles.card} key={item.id}>
                    <div className={styles.card_left}>
                      <Image src={item.img} alt=''></Image>
                    </div>
                    <div className={styles.card_right}>
                      <p>{item.title}</p>
                      <span>{item.time}</span>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
