'use client'
import React, { useState } from 'react'
import styles from './status.module.scss'
import Image from 'next/image'

import logoImg1 from '../../../../public/img/home/school/logo1.png'
import logoImg2 from '../../../../public/img/home/school/logo2.png'
import logoImg3 from '../../../../public/img/home/school/logo3.png'
import logoImg4 from '../../../../public/img/home/school/logo4.png'
import logoImg5 from '../../../../public/img/home/school/logo5.png'
import logoImg6 from '../../../../public/img/home/school/logo6.png'
import logoImg7 from '../../../../public/img/home/school/logo7.png'
import logoImg8 from '../../../../public/img/home/school/logo8.png'
import logoImg9 from '../../../../public/img/home/school/logo9.png'
import logoImg10 from '../../../../public/img/home/school/logo10.png'
import logoImg11 from '../../../../public/img/home/school/logo11.png'

import s1 from '../../../../public/img/admissionSituation/s1.png'
import s2 from '../../../../public/img/admissionSituation/s2.png'
import s3 from '../../../../public/img/admissionSituation/s3.png'
import s4 from '../../../../public/img/admissionSituation/s4.png'
import s5 from '../../../../public/img/admissionSituation/s5.png'
import s6 from '../../../../public/img/admissionSituation/s6.png'
import s7 from '../../../../public/img/admissionSituation/s7.png'
import s8 from '../../../../public/img/admissionSituation/s8.png'
import s9 from '../../../../public/img/admissionSituation/s9.png'
import s10 from '../../../../public/img/admissionSituation/s10.png'
import s11 from '../../../../public/img/admissionSituation/s11.png'
import s12 from '../../../../public/img/admissionSituation/s12.png'




import schoolImg from '../../../../public/img/home/schoollmg.png'


function ProgressionStatus() {
  const menuData = [
    {
      id: 1,
      title: '优秀毕业生录取情况',
      status: {
        title: '优秀毕业生录取情况',
        title_en: 'Progression status',
        cardData: [
          {
            id: 1,
            logo: s1,
            name: '美国宾夕法尼亚大学',
            index: '美国大学排名#06',
            num: '陈*音',
          }, {
            id: 2,
            logo: s2,
            name: '美国约翰霍普金斯大学',
            index: '美国大学排名#09',
            num: '黎*骢',
          }, {
            id: 3,
            logo: s3,
            name: '美国韦尔斯利学院',
            index: '美国文理学院排名#04',
            num: '马*骅',
          }, {
            id: 4,
            logo: s4,
            name: '美国加州大学伯克利分校',
            index: '美国大学排名#15',
            num: '林*',
          }, {
            id: 5,
            logo: s5,
            name: '美国范德堡大学',
            index: '美国大学排名#18',
            num: '黎*莹',
          }, {
            id: 6,
            logo: s6,
            name: '美国埃默里大学',
            index: '美国大学排名#24',
            num: '林*扬',
          }, {
            id: 7,
            logo: s7,
            name: '美国弗吉利亚大学',
            index: '美国大学排名#24',
            num: '许*亮',
          }, {
            id: 8,
            logo: s8,
            name: '美国格林内尔学院',
            index: '美国文理学院排名#11',
            num: '谢*',
          }, {
            id: 9,
            logo: s9,
            name: '英国帝国理工学院',
            index: 'QS世界排名#06',
            num: '关*南',
          }, {
            id: 10,
            logo: s10,
            name: '澳大利亚墨尔本大学',
            index: 'QS世界排名#14',
            num: '丘*宜',
          }, {
            id: 11,
            logo: s11,
            name: '香港科技大学',
            index: 'QS世界排名#60',
            num: '刘*芬',
          }, {
            id: 12,
            logo: s12,
            name: '南洋理工大学',
            index: 'QS世界排名#26',
            num: '宋*馨',
          }
        ]
      }
    },
    {
      id: 2,
      title: '其他世界名校录取数据',
      status: {
        title: '近年升学情况',
        title_en: 'Progression status',
        cardData: [
          {
            id: 1,
            logo: logoImg1,
            name: '北卡罗来纳教堂山分校',
            index: '美国大学排名#22',
            num: '8封',
          }, {
            id: 2,
            logo: logoImg2,
            name: '加州大学圣地亚哥分校',
            index: '美国大学排名#28',
            num: '15封',
          }, {
            id: 3,
            logo: logoImg3,
            name: '纽约大学',
            index: '美国大学排名#35',
            num: '26封',
          }, {
            id: 4,
            logo: logoImg4,
            name: '加州大学戴维斯分校',
            index: '美国大学排名#28',
            num: '43封',
          }, {
            id: 5,
            logo: logoImg5,
            name: '波士顿大学',
            index: '美国大学排名#39',
            num: '12封',
          }, {
            id: 6,
            logo: logoImg6,
            name: '加州大学欧文分校',
            index: '美国大学排名#33',
            num: '56封',
          }, {
            id: 7,
            logo: logoImg7,
            name: '加州大学圣塔芭芭拉分校',
            index: '美国大学排名#35',
            num: '21封',
          }, {
            id: 8,
            logo: logoImg8,
            name: '伦敦大学学院',
            index: 'QS世界排名#09',
            num: '11封',
          }, {
            id: 9,
            logo: logoImg9,
            name: '多伦多大学',
            index: 'QS世界排名#21',
            num: '42封',
          }, {
            id: 10,
            logo: logoImg10,
            name: '悉尼大学',
            index: 'QS世界排名#19',
            num: '25封',
          }, {
            id: 11,
            logo: logoImg11,
            name: '香港城市大学',
            index: 'QS世界排名#70',
            num: '15封',
          }
        ]
      }
    }
  ]

  const [active, setActive] = useState(menuData[0])

  const handleActive = (data: any) => {
    setActive(data)
  }

  return (
    <div className={styles.status}>
      <div className={styles.content}>
        <div className={styles.menu}>
          {
            menuData.map((item) => {
              return (
                <button key={item.id} className={styles.menuItem} onClick={() => handleActive(item)}>
                  <div className={` ${active.id === item.id ? styles.active : ''}`}></div>
                  <p>{item.title}</p>
                </button>
              )
            })
          }
        </div>
        <div className={styles.details}>
          <h2>{active.status.title}</h2>
          <h3>{active.status.title_en}</h3>
          <div className={styles.cardBox}>
            {
              active.status.cardData.map((item) => {
                return (
                  <div key={item.id} className={styles.card}>
                    <div className={styles.cardLft}>
                      <Image src={item.logo} alt=''></Image>
                    </div>
                    <div className={styles.cardCenter}>
                      <p>{item.name}</p>
                      <span>{item.index}</span>
                      <p>{item.num}</p>
                    </div>
                    <div className={styles.cardRight}>
                      <Image src={schoolImg} alt=''></Image>
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

export default ProgressionStatus
