'use client'
import React, { useState } from 'react'
import styles from './features.module.scss'
import Image from 'next/image'

import f1 from '../../../../public/img/edu/f1.png'
import f2 from '../../../../public/img/edu/f2.png'
import f3 from '../../../../public/img/edu/f3.png'
import f4 from '../../../../public/img/edu/f4.png'
import f5 from '../../../../public/img/edu/f5.png'

import fb1 from '../../../../public/img/edu/fb1.png'
import fb2 from '../../../../public/img/edu/fb2.png'
import fb3 from '../../../../public/img/edu/fb3.png'
import fb4 from '../../../../public/img/edu/fb4.png'
import fb5 from '../../../../public/img/edu/fb5.png'

function Features() {

  const [hoveredIndex, setHoveredIndex] = useState(0);

  const data = [
    {
      id: 1,
      title: '阳光教育',
      text: '学校实施“阳光教育”战略，一直致力于阳光管理、阳光德育、阳光课程、阳光课堂、阳光校园建设，打造阳光教师，培养阳光学子。',
      logo_front: f1,
      logo_back: fb1,
    }, {
      id: 2,
      title: '多元成才',
      text: '将中国基础教育和国际课程有机结合，与多所世界知名院校建立合作关系，使学生出路又多了一条选择。',
      logo_front: f2,
      logo_back: fb2,
    }, {
      id: 3,
      title: '人文管理',
      text: '学校实施“人文化”管理，坚持一切以人为本，把关心人、尊重人、培养人、发展人作为管理的目的，处处体现对学生、对老师的人文关爱。',
      logo_front: f3,
      logo_back: fb3,
    }, {
      id: 4,
      title: '和谐发展',
      text: '生生、师师、师生互勉共进，和谐发展；中高考升学与多元成才并举，普通升学与特长培养相互融合；职能部门贯穿到底的督导管理与学生的自我管理相结合，学校“条块融合管理”互相促进、和谐发展。',
      logo_front: f4,
      logo_back: fb4,
    }, {
      id: 5,
      title: '精致服务',
      text: '云顶学校科学规划、高标准建校。教学、生活、运动区相对独立，所有教室（功能室）配有空调与多媒体平台，设施水平高。宿舍拥有独立卫生间，生活设备齐全。24小时贴心服务的生活老师，以及免费晚修管理的教师。',
      logo_front: f5,
      logo_back: fb5,
    },
  ]
  const handleMouseEnter = (index: any) => {
    setHoveredIndex(index);
  };
  const handleMouseLeave = () => {
    setHoveredIndex(0);
  };

  return (
    <div className={styles.feature}>
      <div className={styles.content}>
        <h2>五大教学特色</h2>
        <h3>Five teaching features</h3>
        <ul>
          {
            data.map((item, index) => {
              return (
                <li key={item.id}
                  onMouseEnter={() => handleMouseEnter(index)}
                  className={hoveredIndex === index ? styles.active : ''}
                >
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                  <div className={styles.logo}>
                    <div className={styles.front}>
                      <Image src={item.logo_front} alt=''></Image>
                    </div>
                    <div className={styles.back}>
                      <Image src={item.logo_back} alt=''></Image>
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

export default Features
