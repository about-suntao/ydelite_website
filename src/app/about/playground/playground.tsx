import React from 'react'
import styles from './playground.module.scss'
import Image from 'next/image'

import p1 from '../../../../public/img/home/p1.png'
import p2 from '../../../../public/img/home/p2.png'
import p3 from '../../../../public/img/home/p3.png'

function Playground() {

  const data = [
    {
      id: 1,
      img: p1,
      title: '操场远景',
      title_en: 'playground vista',
    }, {
      id: 2,
      img: p2,
      title: '篮球场',
      title_en: 'basketball court',
    }, {
      id: 3,
      img: p3,
      title: '学校足球场',
      title_en: 'school football field',
    },
  ]

  return (
    <div className={styles.playground}>
      <div className={styles.content}>
        <div className={styles.cardBox}>
          <ul>
            {
              data.map((item) => {
                return (
                  <li key={item.id}>
                    <Image src={item.img} alt={item.title}></Image>
                    <div className={styles.titleBox}>
                      <p>{item.title}</p>
                      <span>{item.title_en}</span>
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

export default Playground
