'use client'
import React, { useState } from 'react'
import styles from './govern.module.scss'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import leaderImg1 from '../../../../public/img/home/leader1.png'
import leaderImg2 from '../../../../public/img/home/leader2.png'
import leaderImg3 from '../../../../public/img/home/leader3.png'
import leaderImg4 from '../../../../public/img/home/leader4.png'

function Govern() {

  const [cardData, setCardData] = useState([
    {
      id: 1,
      img: leaderImg1,
      name: '张向阳',
      spell: 'Zhang Xiangyang',
      position: '精英国际高中校长',
      position_en: 'Principal of Yunding Elite International school',
      introduce: '美国耶鲁大学硕士毕业，拥有26年中西方跨文化交流经验',
    },
    {
      id: 2,
      img: leaderImg2,
      name: '陈浩宇',
      spell: 'Chen Haoyu',
      position: '精英国际高中教学校长',
      position_en: 'Vice-Principal of Yunding Elite International School ',
      introduce: '美国杜克大学硕士毕业，曾任广州大学附属中学国际部校长，美国Kuder职业生涯测评机构华南区代表',
    },
    {
      id: 3,
      img: leaderImg3,
      name: 'MARTY REMPLE',
      spell: '',
      position: '外方校长',
      position_en: 'FOREIGN PRINCIPAL',
      introduce: '教育专家，阿尔伯塔大学硕士，40年教学管理经验，任职加拿大教育部考试与标准委员会委员16年',
    }, {
      id: 4,
      img: leaderImg4,
      name: '李芬芬',
      spell: 'Li Fenfen',
      position: '精英国际高中副校长',
      position_en: 'Vice-Principal of Yunding Elite International School',
      introduce: '中国科学技术大学硕士，6年学校运营管理经验',
    },
  ])

  const handleActive = (id: any) => {
    let data = cardData
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        // 将点击项移到数组头部
        let obj = data[i]
        data.splice(i, 1);
        data.unshift(obj)
        break;
      }
    }
    setCardData([...data])
  }

  return (
    <div className={styles.govern}>
      <div className={styles.pc}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2>专家治校</h2>
            <p>School Governance Specialist</p>
          </div>
          <div className={styles.cardBox}>
            <div className={styles.left}>
              <Image src={cardData[0].img} alt={cardData[0].name}></Image>
            </div>
            <div className={styles.right}>
              <div className={styles.right_content}>
                <div className={styles.title_zn}>
                  <p>{cardData[0].position}</p>
                  <p>{cardData[0].name}</p>
                </div>
                <div className={styles.title_en}>
                  <p>{cardData[0].position_en}</p>
                  <p>{cardData[0].spell}</p>
                </div>
                <div className={styles.text}>
                  <p>{cardData[0].introduce}</p>
                </div>
              </div>
              <div className={styles.imgBox}>
                {
                  cardData.slice(1).map((item: any) => {
                    return (
                      <div key={item.id} className={styles.img}>
                        <Image src={item.img} alt={item.name} onClick={() => handleActive(item.id)}></Image>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mobile}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2>专家治校</h2>
            <h3>School Governance Specialist</h3>
          </div>
          <Swiper
            slidesPerView={1}
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

export default Govern
