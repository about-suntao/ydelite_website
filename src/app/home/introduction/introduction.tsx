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
      title: 'AP北美精英班',
      cultivate: '学生以美国前30，加拿大前3大学为升学目标，注重综合素质的全面提升与培养。<br/> 高一阶段，重点打好语言考试应试基础与理科类AP课程学习； <br/> 高二阶段，做好SAT美国高考应试突破与综合类AP课程学习；<br/>  高三阶段，美国升学方向的同学在升学指导老师的协助下开始完成美国大学申请文书的撰写与申请材料提交，加拿大升学方向的学生可选择高三赴加拿大姐妹校完成加拿大公立体系课程，修完并成绩合格后可直升加拿大排名第一的多伦多大学',
      target: '50%学生升入美国前30大学 <br/> 100%学生升入美国前40及加拿大前3大学',
    },
    {
      id: 2,
      class: 'Class 2',
      img: classImg2,
      title: 'APAL国际融合班',
      cultivate: '学生以美国前20，英国G5，香港前3，新加坡前2大学及多国联申为升学目标。<br/>  在高一时期，以A-Level课程系统的知识点来夯实基础学科； <br/> 高二阶段根据学生的学习情况与升学目标，有的放矢地选择走A-Level为主，或是AP与A-Level双保险的升学路径。更有效地发挥了AP与A-Level各自优势。',
      target: '50%学生升入英国前5，香港前3，新加坡前2大学 <br/> 100%学生升入世界前80大学',
    }
  ]

  return (
    <div className={styles.introduce}>
      <div className={styles.content}>
        <h2>云顶精英班级介绍</h2>
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
                      <h3>阶段化培养：</h3>
                      <p dangerouslySetInnerHTML={{ __html: item.cultivate }}></p>
                      <h3>保障升学目标：</h3>
                      <p dangerouslySetInnerHTML={{ __html: item.target }}></p>
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
