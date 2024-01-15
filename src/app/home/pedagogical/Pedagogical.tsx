'use client'
import React, { useState, useEffect } from 'react'
import styles from './Pedagogical.module.scss'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import leaderImg1 from '../../../../public/img/home/leader1.png'
import leaderImg2 from '../../../../public/img/home/leader2.png'
import leaderImg3 from '../../../../public/img/home/leader3.png'
import leaderImg4 from '../../../../public/img/home/leader4.png'


function Pedagogical() {
  const cardData = [
    {
      id: 1,
      img: leaderImg1,
      name: '张向阳',
      position: '精英国际高中校长',
      introduce: '美国耶鲁大学硕士毕业，拥有26年中西方跨文化交流经验',
    },
    {
      id: 2,
      img: leaderImg2,
      name: '陈浩宇',
      position: '精英国际高中教学校长',
      introduce: '美国杜克大学硕士毕业，曾任广州大学附属中学国际部校长，美国Kuder职业生涯测评机构华南区代表',
    },
    {
      id: 3,
      img: leaderImg3,
      name: 'MARTY REMPLE',
      position: '外方校长',
      introduce: '教育专家，阿尔伯塔大学硕士，40年教学管理经验，任职加拿大教育部考试与标准委员会委员16年',
    }, {
      id: 4,
      img: leaderImg4,
      name: '李芬芬',
      position: '精英国际高中副校长',
      introduce: '中国科学技术大学硕士，6年学校运营管理经验',
    },
  ]

  return (
    <div className={styles.pedagogical}>
      <div className={styles.pc}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2>教育教学</h2>
            <h3>Pedagogical</h3>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
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
      <div className={styles.ipad}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2>教育教学</h2>
            <h3>Pedagogical</h3>
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
      <div className={styles.mobile}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2>教育教学</h2>
            <h3>Pedagogical</h3>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
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

export default Pedagogical
