import React from 'react'
import styles from './aboutUs.module.scss'
import Image from 'next/image'
import logoImg1 from '../../../../public/img/home/into1.png'
import logoImg2 from '../../../../public/img/home/into2.png'
import logoImg3 from '../../../../public/img/home/into3.png'
import logoImg4 from '../../../../public/img/home/into4.png'


function AboutUs() {

  const cardData = [
    {
      id: 1,
      img: logoImg1,
      num: '17',
      symbol: '年',
      title: '教育历史',
    },
    {
      id: 2,
      img: logoImg2,
      num: '70',
      symbol: '个',
      title: '教学班',
    },
    {
      id: 3,
      img: logoImg3,
      num: '30',
      symbol: '%',
      title: '研究生学历教师',
    },
    {
      id: 4,
      img: logoImg4,
      num: '2800',
      symbol: '+',
      title: '师生人数',
    },
  ]

  return (
    <div className={styles.aboutUs}>
      <div className={styles.pc}>
        <div className={styles.content}>
          <h2>走进云顶</h2>
          <h3>About us</h3>
          <div className={styles.card}>
            <hr />
            <ul>
              {
                cardData.map((item) => {
                  return (
                    <li key={item.id}>
                      <div className={styles.logo}>
                        <div className={styles.logoBox}>
                          <Image src={item.img} alt=''></Image>
                        </div>
                      </div>
                      <div className={styles.number}>
                        <span>{item.num}</span>
                        <span>{item.symbol}</span>
                      </div>
                      <p>{item.title}</p>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.mobile}>
        <div className={styles.content}>
          <h2>走进云顶</h2>
          <h3>About us</h3>
          <div className={styles.card}>
            <hr />
            <ul>
              {
                cardData.map((item) => {
                  return (
                    <li key={item.id}>
                      <div className={styles.logo}>
                        <div className={styles.logoBox}>
                          <Image src={item.img} alt=''></Image>
                        </div>
                      </div>
                      <div className={styles.cardRight}>
                        <div className={styles.number}>
                          <span>{item.num}</span>
                          <span>{item.symbol}</span>
                        </div>
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

export default AboutUs
