'use client'
import React, { useState } from 'react'
import styles from './introduce.module.scss'
import Image from 'next/image'
import szImg from '../../../../public/img/home/szyd.png'
import rightArrow from '../../../../public/img/home/rightArrow.png'

function Introduce() {
  const data = [
    {
      id: 1,
      title: '强大的背景优势',
      introduce: '云顶学校精英部成立于2014年，学部坚持“外语特色、文理并重、国际合作”的办学思想。<br/>2023年，原广大附中AP国际部核心团队加盟云顶精英国际高中，依托于中科大、北大等资深校友基金会全球知名校友与教授网络，致力于在深圳打造一所多元体系、精英教育、领航出口的国际化学校新旗舰。',
    }, {
      id: 2,
      title: '稀缺的国际课程办学资质',
      introduce: '云顶精英国际高中已获得深圳市教育局颁发的“国际课程实验班”授权书，拥有招收中国籍学生学习国际化课程的合法资质。',
    }, {
      id: 3,
      title: '一站式解决升学难题',
      introduce: '标化考试培训<br/>高科技企业活动平台<br/>世界名校全明星升学指导团队',
    },
  ]

  const [activeData, setActiveData] = useState(data[0])

  const handleClick = (arr: any) => {
    setActiveData(arr)
  }
  const handleNext = () => {
    data.forEach((item, index) => {
      if (activeData.id === 3) {
        setActiveData(data[0])
      } else if (activeData.id === item.id) {
        setActiveData(data[index + 1])
      }
    })
  }

  return (
    <div className={styles.introduce}>
      <div className={styles.pc}>
        <div className={styles.content}>
          <div className={styles.left}>
            <p className={styles.title}>Elite Education</p>
            <h2>精英部国际高中</h2>
            <div className={styles.serial}>
              {
                data.map((item) => {
                  return (
                    <div
                      className={`${item.id === activeData.id ? styles.activeSerial : styles.serialCard}`}
                      key={item.id}
                      onClick={() => handleClick(item)}
                    >
                      <p>0{item.id}</p>
                    </div>
                  )
                })
              }
            </div>
            <div className={styles.activeCard}>
              <h3>{activeData.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: activeData.introduce }}></p>
              <div className={styles.arrow}>
                <Image src={rightArrow} alt='' onClick={() => handleNext()}></Image>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.right_bg}>
              <Image src={szImg} alt=''></Image>
            </div>
            <div className={styles.mask}>
              <p>深圳市云顶学校是2004年经深圳市批准创办的一所“十二年一贯制”国有民办学校。学校位于福田中心区域，毗邻福田区政府、紧邻“特区中的特区”——河套深港创新合作区。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduce
