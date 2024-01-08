import React, { useState } from 'react'
import styles from './page.module.scss'

import Image from 'next/image'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Nav from './nav';

import icon1 from '../../../public/img/header/call.png'
import icon2 from '../../../public/img/header/addr.png'
import logoImg from '../../../public/img/header/logo.png'

function Header() {

  const data = [
    {
      id: 1,
      img: icon1,
      title: '联系方式',
      detail: '13923745800',
    },
    {
      id: 2,
      img: icon2,
      title: '联系地址',
      detail: '深圳市云顶学校精英教育招⽣办D101',
    },
  ]

  return (
    <div className={styles.header}>
      <div className={styles.logoBox}>
        <ul>
          {
            data.map((item) => {
              return (
                <li key={item.id}>
                  <Image src={item.img} alt=''></Image>
                  <div className={styles.cardRight}>
                    <p>{item.title}</p>
                    <p>{item.detail}</p>
                  </div>
                </li>
              )
            })
          }
        </ul>
        <div className={styles.logo}>
          <Image src={logoImg} alt=''></Image>
        </div>
        <div className={styles.search}>
          <Input size="large" placeholder="Search..." prefix={<SearchOutlined />} />
        </div>
      </div>
      <div className={styles.nav}>
        <Nav></Nav>
      </div>
    </div>
  )
}

export default Header
