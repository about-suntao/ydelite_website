'use client'

import React from 'react'
import styles from './instructor.module.scss'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Navigation } from 'swiper/modules';

import item1 from '../../../../public/img/home/activity1.png'
import item2 from '../../../../public/img/home/activity2.png'
import item3 from '../../../../public/img/home/activity3.png'
import item4 from '../../../../public/img/home/activity4.png'
import item5 from '../../../../public/img/home/activity5.png'
import item6 from '../../../../public/img/home/activity6.png'
import item7 from '../../../../public/img/home/activity7.png'

function Instructor() {
  const cardData = [
    {
      id: 1,
      img: item1,
      name: '王卫华',
      position: '云顶奥数社团导师',
      introduce: '《数学竞赛之窗》主编，中国数学奥林匹克高级教练、联盟杯数学竞赛主试委员会主任，中国香港数学奥林匹克领队。',
    }, {
      id: 2,
      img: item2,
      name: '黄罡',
      position: '云顶量子计算社团导师',
      introduce: '本源量子创业合伙人，合肥科创学会副会长，中国科学技术大学学士，北京大学光华管理学院EMBA。',
    }, {
      id: 3,
      img: item3,
      name: '张李鸿',
      position: '云顶高尔夫社团导师',
      introduce: '中国台湾高尔夫职业球手，中国香港长青PGA职业选手，加拿大世界高尔夫大赛冠军，从事教练工作已超26年，所教导的学生数以千计。',
    }, {
      id: 4,
      img: item4,
      name: '刘可佳',
      position: '云顶拳击社团导师',
      introduce: '中国拳击运动员，2012年全国女子拳击锦标赛冠军，2013年获得国家体育总局授予的国际级运动健将称号。',
    }, {
      id: 5,
      img: item5,
      name: '钟智敏',
      position: '云顶人工智能社团导师',
      introduce: '科大智联董事长，中国科学技术大学硕士，物联网、大数据、工业智能化专家。',
    }, {
      id: 6,
      img: item6,
      name: 'Lydia',
      position: '云顶马术社团导师',
      introduce: '中级一星马术教练、国家一级马术裁判员、广东省马术协会副会长、曾带领学员参加广东省联赛夺得最高级别120cm障碍总冠军。',
    }, {
      id: 7,
      img: item7,
      name: '徐敏亚',
      position: '云顶商务管理社团导师',
      introduce: '北京大学光华管理学院商务统计与经济计量系副教授，中国科技大学学士，美国罗格斯大学统计学博士学位。',
    },
  ]

  return (
    <div className={styles.pc}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>活动导师</h2>
          <h3>Activity Instructor</h3>
        </div>
        <div className={styles.swiperBox}>
          <Swiper
            slidesPerView={4}
            spaceBetween={60}
            navigation={true}
            modules={[Virtual, Navigation]}
            className={styles.mySwiper}
            virtual
          >
            {
              cardData.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <div className={styles.card}>
                      <Image src={item.img} alt=''></Image>
                      <div className={styles.card_c}>
                        <div className={styles.cardName}>
                          <p>{item.name}</p>
                          <span>{item.position}</span>
                        </div>
                        <div className={styles.text}>
                          <span>{item.introduce}</span>
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
    </div>
  )
}

export default Instructor
