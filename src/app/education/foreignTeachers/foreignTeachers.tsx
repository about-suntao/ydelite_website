'use client'
import React from 'react'
import styles from './foreignTeachers.module.scss'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import teamP1 from '../../../../public/img/edu/ft1.png'
import teamP2 from '../../../../public/img/edu/ft2.png'
import teamP3 from '../../../../public/img/edu/ft3.png'
import teamP4 from '../../../../public/img/edu/ft4.png'

import signatureP1 from '../../../../public/img/edu/Soneji.png'
import signatureP2 from '../../../../public/img/edu/Sok.png'
import signatureP3 from '../../../../public/img/edu/Kennedy.png'
import signatureP4 from '../../../../public/img/edu/linda.png'

import serialP1 from '../../../../public/img/edu/serialP1.png'
import serialP2 from '../../../../public/img/edu/serialP2.png'
import serialP3 from '../../../../public/img/edu/serialP3.png'
import serialP4 from '../../../../public/img/edu/serialP4.png'

import icon from '../../../../public/img/edu/icon.png'
import honorLogo from '../../../../public/img/edu/honor_logo.png'




function ForeignTeachers() {

  const teamData = [
    {
      id: 1,
      name: 'Samir Soneji',
      picture: teamP1,
      honor: ['普林斯顿大学人口统计学博士', '前普林斯顿大学招生官'],
      signature: signatureP1,
      introduce: '已为寻求进入排名前20的大学的学生提供专业咨询超过10年。他所指导的学生已被录取进入包括布朗、哥伦比亚、达特茅斯、哈佛和宾夕法尼亚大学在内的常春藤联盟学校，以及芝加哥大学、斯坦福大学和加利福尼亚大学。',
      serialNumber: serialP1,
    }, {
      id: 2,
      name: 'Christina Sok',
      picture: teamP2,
      honor: ['哥伦比亚大学巴纳德学院学士', '伦敦大学硕士'],
      signature: signatureP2,
      introduce: '在2014年至2020年期间，曾担任南洋理工大学、新加坡国立大学和拉萨尔艺术学院的教职，为学生提供艺术类课程教学与专业指导。',
      serialNumber: serialP2,
    }, {
      id: 3,
      name: 'Francesca Kennedy',
      picture: teamP3,
      honor: ['哈佛大学历史与文学学士'],
      signature: signatureP3,
      introduce: '教授9至12年级学生文学辩证、学术写作和比较文学等课程，帮助学生发展他们在大学及以后所需的写作和批判性思维技能。对于中国有着浓厚的感情，曾在北京为一档教育电视节目工作两年，并在大学学习中文，使她能够在美国申请背景下帮助中国学生定位他们的申请。在工作之外，也是一位小说家，获得了巴黎评论杂志的出版商德鲁·海因兹女士的2022年小说赫桑丁奖学金。',
      serialNumber: serialP3,
    }, {
      id: 4,
      name: 'Linda Wu',
      picture: teamP4,
      honor: ['布朗大学'],
      signature: signatureP4,
      introduce: '曾在世界顶尖投资银行摩根士丹利任高管，也曾任美国多所名校招生官，近十多年，一直在发展中美国际教育事业，因在教育领域的工作被评为希望女性。',
      serialNumber: serialP4,
    },
  ]
  return (
    <div className={styles.teacher}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>外方教师及升学顾问</h2>
          <h3>Foreign Teachers and Counselors</h3>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {
            teamData.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className={styles.card}>
                    <div className={styles.details_left}>
                      <Image src={item.picture} alt={item.name}></Image>
                    </div>
                    <div className={styles.details_right}>
                      <div className={styles.name}>
                        <p>{item.name}</p>
                        <Image src={icon} alt=''></Image>
                      </div>
                      <div className={styles.honor}>
                        <div className={styles.h_left}>
                          {
                            item.honor.map((item, index) => {
                              return (
                                <div key={index} className={styles.tips}>
                                  <Image src={honorLogo} alt=''></Image>
                                  <p >{item}</p>
                                  <Image src={honorLogo} alt=''></Image>
                                </div>
                              )
                            })
                          }
                        </div>
                        <div className={styles.h_right}>
                          <Image src={item.signature} alt=''></Image>
                        </div>
                        <hr />
                      </div>
                      <div className={styles.introduce}>
                        <span>{item.introduce}</span>
                      </div>
                      <div className={styles.serial}>
                        <Image src={item.serialNumber} alt=''></Image>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </div>
  )
}

export default ForeignTeachers
