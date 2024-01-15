import React from 'react'
import styles from './idea.module.scss'
import Image from 'next/image'

import img1 from '../../../../public/img/home/aboutImg1.png'
import img2 from '../../../../public/img/home/aboutImg2.png'
import img3 from '../../../../public/img/home/aboutImg3.png'


function About() {
  const data = [
    {
      id: 1,
      img: img1,
      title: '阳光育人',
      details: '致力于阳光管理、阳光德育、阳光课程、阳光课堂、阳光校园建设，打造阳光教师，培养阳光学子。',
    }, {
      id: 2,
      img: img2,
      title: '以人为本',
      details: '坚持一切从人出发，把关心人、尊重人、培养人、 发展人作为管理的目的，处处体现对学生、对老师的人文关爱。',
    }, {
      id: 3,
      img: img3,
      title: '和谐发展',
      details: '管理以人为本，生生、师师、师生互勉共进，和谐发展;中高考升学与多元成才并举，普通升学与特长培养相互融合。',
    },
  ]

  return (
    <div className={styles.idea}>
      <div className={styles.pc}>
        <ul>
          {
            data.map((item) => {
              return (
                <li key={item.id}>
                  <div className={styles.card}>
                    <div className={styles.left}>
                      <Image src={item.img} alt=""></Image>
                    </div>
                    <div className={styles.right}>
                      <h3>{item.title}</h3>
                      <p>{item.details}</p>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default About
