import React from 'react'
import styles from './class.module.scss'
import Image from 'next/image'

import classImg from '../../../../public/img/home/class.png'

function Class() {
  return (
    <div className={styles.pc}>
      <div className={styles.content}>
        <div className={styles.left}>
          <Image src={classImg} alt=''></Image>
        </div>
        <div className={styles.right}>
          <h2>深圳云顶国际班介绍</h2>
          <h3>Introduction to international classes</h3>
          <p>深圳市云顶学校精英国际课程班，旨在让学生的学习内容、学习方法、价值观和格局具备国际化，
            强调的学习、思维、创新能力的培养，让孩子拥有阳光健康的心态，敢于尝试、创造、交流、研究，
            在真正意义上具有和谐多元化发展。
          </p>
        </div>
      </div>
    </div>
  )
}

export default Class
