import React from 'react'
import styles from './latestNews.module.scss'
import Image from 'next/image'

import newsImg1 from '../../../../public/img/home/11.webp'
import newsImg2 from '../../../../public/img/home/12.webp'
import newsImg3 from '../../../../public/img/home/13.webp'
import newsImg4 from '../../../../public/img/home/14.webp'
import newsImg5 from '../../../../public/img/home/15.webp'
import newsImg6 from '../../../../public/img/home/16.webp'


function LatestNews() {

  const data = [
    {
      id: 1,
      time: '2023-11-29',
      title: '家校携手 扬帆奋进 笃志前行',
      img: newsImg1
    }, {
      id: 2,
      time: '2023-11-29',
      title: '借力奋斗鲲鹏翅 乘风扶摇九万里',
      img: newsImg2
    }, {
      id: 3,
      time: '2023-11-28',
      title: '百舸争流少年志 “燃”动青春筑梦时',
      img: newsImg3
    }, {
      id: 4,
      time: '2023-09-01',
      title: '用铁纪铸我风采 以军魂耀我青春',
      img: newsImg4
    }, {
      id: 5,
      time: '2023-06-25',
      title: '青衿鸿鹄同风志 展翅寰宇万里云',
      img: newsImg5
    }, {
      id: 6,
      time: '2023-02-26',
      title: '军风巍巍淬青春 英姿飒爽致芳华',
      img: newsImg6
    },
  ]

  return (
    <div className={styles.news}>
      <div className={styles.content}>
        <h2>云顶资讯</h2>
        <h3>Latest News</h3>
        <div className={styles.card}>
          <ul>
            {
              data.map((item) => {
                return (
                  <li key={item.id}>
                    <Image src={item.img} alt=''></Image>
                    <div className={styles.title}>
                      <p>{item.title}</p>
                      <span>{item.time}</span>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LatestNews
