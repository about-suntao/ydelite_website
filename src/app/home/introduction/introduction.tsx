import React from 'react'
import styles from './introduction.module.scss'
import Image from 'next/image'

import classImg1 from '../../../../public/img/home/class1.png'
import classImg2 from '../../../../public/img/home/class2.png'
import titleBg from '../../../../public/img/home/titleBg.png'



function Introduction() {

  const data = [
    {
      id: 1,
      class: 'Class 1',
      img: classImg1,
      title: '北美精英班',
      introduce: '学生以美国前30，加拿大前3大学为升学目标，注重综合素质的全面提升与培养。',
    },
    {
      id: 2,
      class: 'Class 2',
      img: classImg2,
      title: '国际融合班',
      introduce: '云顶精英国际高中在深圳首推的融合教学体系，结合各大体系的优势。学生以美国前20、英国G5、加拿大前3、香港前3、新加坡前2大学及多国联申为升学目标。',
    }
  ]

  return (
    <div className={styles.introduce}>
      <div className={styles.content}>
        <h2>国际班班级介绍</h2>
        <h3>Class introduction</h3>
        <div className={styles.card}>
          <ul>
            {
              data.map((item) => {
                return (
                  <li key={item.id}>
                    <div className={styles.titleImg}>
                      <Image src={titleBg} alt=''></Image>
                      <p>{item.class}</p>
                    </div>
                    <div className={styles.img}>
                      <Image src={item.img} alt=''></Image>
                    </div>
                    <div className={styles.card_c}>
                      <h2>{item.title}</h2>
                      <p> {item.introduce}</p>
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

export default Introduction
