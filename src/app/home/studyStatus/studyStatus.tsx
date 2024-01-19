'use client'

import React, { useState, useEffect } from 'react'
import styles from './studyStatus.module.scss'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';

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

import schoolImg from '../../../../public/img/home/schoollmg.png'


function CarouselBox(props: any) {

  const cardData = [
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
      logo: logoImg4,
      name: '加州大学戴维斯分校',
      index: '美国大学排名#28',
      num: '43封',
    }, {
      id: 4,
      logo: logoImg6,
      name: '加州大学欧文分校',
      index: '美国大学排名#33',
      num: '56封',
    }, {
      id: 5,
      logo: logoImg7,
      name: '加州大学圣塔芭芭拉分校',
      index: '美国大学排名#35',
      num: '21封',
    }, {
      id: 6,
      logo: logoImg3,
      name: '纽约大学',
      index: '美国大学排名#35',
      num: '26封',
    }, {
      id: 7,
      logo: logoImg5,
      name: '波士顿大学',
      index: '美国大学排名#39',
      num: '12封',
    }, {
      id: 8,
      logo: logoImg8,
      name: '伦敦大学学院',
      index: 'QS世界排名#09',
      num: '11封',
    }, {
      id: 9,
      logo: logoImg10,
      name: '悉尼大学',
      index: 'QS世界排名#19',
      num: '25封',
    }, {
      id: 10,
      logo: logoImg9,
      name: '多伦多大学',
      index: 'QS世界排名#21',
      num: '42封',
    }, {
      id: 11,
      logo: logoImg11,
      name: '香港城市大学',
      index: 'QS世界排名#70',
      num: '15封',
    }
  ]

  return (
    <div className={styles.swiperBox}>
      <Swiper
        slidesPerView={props.cardRenderNum}
        grid={{ rows: props.gridNum }}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Grid, Pagination]}
        className={styles.mySwiper}
      >
        {
          cardData.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className={styles.card}>
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
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}


function StudyStatus() {


  const [cardNum, setCardNum] = useState(3)

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(document.body.offsetWidth + 17)
    // 监屏幕宽度
    window.addEventListener("resize", () => setWindowWidth(document.body.offsetWidth + 17))
    // 销毁
    return () => window.removeEventListener("resize", () => setWindowWidth(0));
  }, []);

  useEffect(() => {
    // 根据屏幕宽度改变swiper 显示数量
    windowWidth >= 1501 ? setCardNum(3) :
      windowWidth < 1501 && windowWidth >= 769 ? setCardNum(2) : setCardNum(1)
  }, [windowWidth])

  return (
    <div className={styles.pc}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>近年升学情况</h2>
          <h3>Progression status</h3>
        </div>
        <CarouselBox cardRenderNum={cardNum} gridNum={cardNum === 1 ? 3 : 2}></CarouselBox>
      </div>
    </div>
  )
}

export default StudyStatus
