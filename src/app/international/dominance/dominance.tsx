import React from 'react'
import styles from './dominance.module.scss'
import Image from 'next/image'

import logoImg1 from '../../../../public/img/home/d1.png'
import logoImg2 from '../../../../public/img/home/d2.png'
import logoImg3 from '../../../../public/img/home/d3.png'
import logoImg4 from '../../../../public/img/home/d4.png'
import logoImg5 from '../../../../public/img/home/d5.png'
import logoImg6 from '../../../../public/img/home/d6.png'

import star from '../../../../public/img/home/star.png'



function Dominance() {

  const leftData = [
    { id: 1, name: '注册海外高中学籍' },
    { id: 2, name: '引进海外优质课程' },
    { id: 3, name: '保障升学名效率高' },
    { id: 4, name: '国际名师低师生比' },
    { id: 5, name: '专业升学规划服务' },
    { id: 6, name: '升学留学全程护航' },
  ]

  const rightData = [
    { id: 1, title: '文化学习', img: logoImg1 },
    { id: 2, title: '生活成长', img: logoImg2 },
    { id: 3, title: '安全管理', img: logoImg3 },
    { id: 4, title: '全方面发展', img: logoImg4 },
    { id: 5, title: '个性化教育', img: logoImg5 },
    { id: 6, title: '实践力培养', img: logoImg6 },
  ]

  return (
    <div className={styles.dominance}>
      <div className={styles.content}>
        <h2>国际班班级优势</h2>
        <h3>Dominance</h3>
        <div className={styles.cardBox}>
          <div className={styles.cardLeft}>
            <ul>
              {
                leftData.map((item) => {
                  return (
                    <li key={item.id}>
                      <Image src={star} alt=''></Image>
                      <p>{item.name}</p>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className={styles.cardRight}>
            <ul>
              {
                rightData.map((item) => {
                  return (
                    <li key={item.id}>
                      <Image src={item.img} alt={item.title}></Image>
                      <div className={styles.title}>
                        <p>{item.title}</p>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dominance
