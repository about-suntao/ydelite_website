'use client'
import React from 'react'
import styles from './newsList.module.scss'
import Image from 'next/image'

import type { PaginationProps } from 'antd';
import { Pagination, ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';

import newsImg1 from '../../../../public/img/home/11.webp'
import newsImg2 from '../../../../public/img/home/12.webp'
import newsImg3 from '../../../../public/img/home/13.webp'
import newsImg4 from '../../../../public/img/home/14.webp'
import newsImg5 from '../../../../public/img/home/15.webp'
import newsImg6 from '../../../../public/img/home/16.webp'

import arrow from '../../../../public/img/home/arrow.png'

function NewsList() {

  const list = [
    {
      id: 1,
      img: newsImg1,
      title: '家校携手 扬帆奋进 笃志前行',
      text: '策马扬鞭新征程，奋战高考200天。为提振高三学子精神、鼓舞士气，以决胜之心，迎接高考的挑战，同时为了让家长更好地了解孩子复习备考阶段的学习生活重点，为高考学子营造积极向上的学习氛围，形成家校共育的良好局面，促进家校互动交流，努力提升家长满意度。11月26日高三年级全体师生及家长在学校三楼会堂召开高三年级期中考试表彰大会暨家长会，会议由李慧琦主任主持。',
      time: '11-29-2023',
    }, {
      id: 2,
      img: newsImg2,
      title: '借力奋斗鲲鹏翅 乘风扶摇九万里',
      text: '热火朝天的体育节刚刚结束，有的同学还沉浸在运动的快乐和获胜的喜悦中。为了快速的帮助同学们回归学习阵营，找回学习状态，也为了为表彰优秀，鼓励进步，进一步调动学生们学习的主动性和积极性，高一、二年级分别召开了本学期期中考试表彰大会。 高一年级......',
      time: '11-29-2023',
    }, {
      id: 3,
      img: newsImg3,
      title: '百舸争流少年志 “燃”动青春筑梦时',
      text: '看云顶少年， 领跑青春路，追梦赤子心， 以运动之名，逐青春之光。 凌云赛秋风，志高比灿阳。云顶学校初中部2023年秋季运动会如约而至，一场场比赛，一次次呐喊，我们与运动相约，健儿们以饱满的热情，谱写了运动场上的动人乐曲！',
      time: '11-28-2023',
    }, {
      id: 4,
      img: newsImg4,
      title: '用铁纪铸我风采 以军魂耀我青春',
      text: '连日的高温，烈日的暴晒，雨水的拍打，教官的严厉，在拼搏奋斗、顽强不息的青春主旋律中，云顶学校2023级高一新生们经历了为期一周的国防军事训练。8月31日上午，秋澄万景清，高一年级的新生“战士”们齐聚绿茵运动场，以饱满的热情、昂扬的姿态共同迎来“军训结营仪式”。校长助理王加军及高中部领导和全体班主任参加仪式，仪式由许教官主持。',
      time: '09-01-2023',
    }, {
      id: 5,
      img: newsImg5,
      title: '青衿鸿鹄同风志 展翅寰宇万里云',
      text: '此去提衡霄汉上，鹏抟鲲运更论程。又是一年毕业季，为了让学生以积极的心态去迎战中考，6月21日下午，云顶学校初中部在三楼大礼堂隆重举行2023届初三毕业典礼，学校领导及全体初三师生均参加了本次典礼。 青春策马凌云志，梦想启航正当时。毕业典礼在雄壮的国歌声中拉开帷幕，全体初三师生起立注目...',
      time: '06-25-2023',
    }, {
      id: 6,
      img: newsImg6,
      title: '军风巍巍淬青春 英姿飒爽致芳华',
      text: '军训是高中生活的必修课，也是人生成长路上的重要一课，通过军训可以提高政治觉悟、激发爱国热情，培养艰苦奋斗、坚毅勇敢、团结协作的精神品格，也是养好良好的学习和生活习惯的重要契机。 春日正暖阳！新学期伊始，云顶学校高一年级的学生迎来了军训的日子。2月19日下午在班主任和教官的监督下立正整队，有序出发！为保证学生安全、有序的完成国防教育这一必修课，学校副校长...',
      time: '02-26-2023',
    }
  ]

  const onChange: PaginationProps['onChange'] = (pageNumber) => {
    console.log('Page: ', pageNumber);
  };

  return (
    <div className={styles.news}>
      <div className={styles.content}>
        <ul className={styles.cardBox}>
          {
            list.map((item) => {
              return (
                <li key={item.id}>
                  <div className={styles.card_left}>
                    <Image src={item.img} alt=''></Image>
                  </div>
                  <div className={styles.card_right}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <div className={styles.time}>
                      <p>{item.time}</p>
                      <button>
                        <Image src={arrow} alt=''></Image>
                      </button>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
        <div className={styles.pagination}>
          <ConfigProvider locale={zhCN}>
            <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
          </ConfigProvider>
        </div>
      </div>
    </div>
  )
}

export default NewsList
