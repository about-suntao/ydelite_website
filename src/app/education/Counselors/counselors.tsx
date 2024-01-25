'use client'
import React, { useState } from 'react'
import styles from './counselors.module.scss'
import Image from 'next/image'

import teacher1 from '../../../../public/img/edu/teacher1.png'
import teacher2 from '../../../../public/img/edu/teacher2.png'
import teacher3 from '../../../../public/img/edu/teacher3.png'
import teacher4 from '../../../../public/img/edu/teacher4.png'
import teacher5 from '../../../../public/img/edu/teacher5.png'
import teacher6 from '../../../../public/img/edu/teacher6.png'
import teacher7 from '../../../../public/img/edu/teacher7.png'
import teacher8 from '../../../../public/img/edu/teacher8.png'
import teacher9 from '../../../../public/img/edu/teacher9.png'
import teacher10 from '../../../../public/img/edu/teacher10.png'

import nextImg from '../../../../public/img/edu/next.png'

function Counselors() {

  const [active, setActive] = useState(true)

  const data = [
    {
      id: 1,
      img: teacher1,
      name: 'Peter',
      introduce: ['毕业于英国帝国理工学院工程专业', '拥有剑桥CELTA教师资格证', '多年海外教学经验及企业管理经验'],
    }, {
      id: 2,
      img: teacher2,
      name: '程丹',
      introduce: ['华中科技大学国际教育专业', '曾在美国以及泰国等国家从事教育工作', '学部英语教学负责人，对美国英语教材研究透彻'],
    }, {
      id: 3,
      img: teacher3,
      name: '曾虎',
      introduce: ['中山大学微电子科学与技术专业', '初中数学竞赛全省一等奖', '高中物理竞赛全省一等奖', '江西省高考数学143分，高考总成绩638分'],
    }, {
      id: 4,
      img: teacher4,
      name: '颜小芳',
      introduce: ['华南师范大学本硕连读', '福田区领航工程骨干教师', '3次获得福田区优秀班主任，所带班级被评为福田区 “文明班”'],
    }, {
      id: 5,
      img: teacher5,
      name: '王晶  ',
      introduce: ['原广州大学附属中学国际部德育主任', '超10年一线国际教学经验', '连续多届获得校级“优秀德育工作者”称号'],
    }, {
      id: 6,
      img: teacher6,
      name: '张丽银',
      introduce: ['伯明翰大学应用语言学硕士', '六年雅思托福教学经验', '雅思8分，托福114分'],
    }, {
      id: 7,
      img: teacher7,
      name: '陈碧雄',
      introduce: ['浙江大学理学和经济学双学位学士， 英国利物浦大学交换生', '中考、高考物理满分成绩', '利物浦大学Exchange特别奖学金获得者'],
    }, {
      id: 8,
      img: teacher8,
      name: '颜婉琦',
      introduce: ['深圳外国语学校保送浙江大学 英语专业，高考英语142分'],
    }, {
      id: 9,
      img: teacher9,
      name: 'Semson',
      introduce: [
        '精通西班牙语、英语等多种语言',
        '2009年-2013年以留学生身份修读中国地质大学艺术设计硕士课程，并获得奖学金',
        '拥有桥梁英语 TEFL 认证',
        '曾在中国教授艺术和语言，教学经验丰富，擅长与学生交流',
      ],
    }, {
      id: 10,
      img: teacher10,
      name: 'Chelsea',
      introduce: ['在中国有长达7年教学经验', '毕业于伦敦的格林威治大学理学专业'],
    },
  ]

  return (
    <div className={styles.counselors}>
      <div className={styles.pc}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2>师资介绍</h2>
            <h3>Foreign Teachers and Counselors</h3>
          </div>
          <ul className={styles.cardBox}>
            {
              data.slice(0, 5).map((item) => {
                return (
                  <li key={item.id} className={styles.card}>
                    <div className={styles.cardLeft}>
                      <Image src={item.img} alt={item.name}></Image>
                    </div>
                    <div className={styles.cardRight}>
                      <div className={styles.card_r_c}>
                        <h4>{item.name}</h4>
                        <ul>
                          {
                            item.introduce.map((i, j) => {
                              return (
                                <li key={j}>
                                  <div className={styles.point}></div>
                                  {i}
                                </li>
                              )
                            })
                          }
                        </ul>
                      </div>
                    </div>
                  </li>
                )
              })
            }
          </ul>
          <ul className={`${styles.cardBox} ${active ? styles.active : styles.noActive}`}>
            {
              data.slice(5, 10).map((item) => {
                return (
                  <li key={item.id} className={styles.card}>
                    <div className={styles.cardLeft}>
                      <Image src={item.img} alt={item.name}></Image>
                    </div>
                    <div className={styles.cardRight}>
                      <div className={styles.card_r_c}>
                        <h4>{item.name}</h4>
                        <ul>
                          {
                            item.introduce.map((i, j) => {
                              return (
                                <li key={j}>
                                  <div className={styles.point}></div>
                                  {i}
                                </li>
                              )
                            })
                          }
                        </ul>
                      </div>
                    </div>
                  </li>
                )
              })
            }
          </ul>
          <div className={`${active ? styles.next : styles.nextActive}`}>
            <button onClick={() => setActive(!active)}>
              <Image src={nextImg} alt=''></Image>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Counselors
