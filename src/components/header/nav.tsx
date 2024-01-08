'use client'
import React, { useState } from 'react'
import styles from './nav.module.scss'
import Link from 'next/link'

function Nav() {
  const [current, setCurrent] = useState('home');
  const items = [
    {
      label: (<Link href="/home">首页</Link>),
      key: 'home',
    },
    {
      label: (<Link href="/about">关于我们</Link>),
      key: 'about',
    },
    {
      label: (<Link href="/education">教育教学</Link>),
      key: 'education',
    },
    {
      label: (<Link href="/international">国际合作</Link>),
      key: 'international',
    },
    {
      label: (<Link href="/news">新闻资讯</Link>),
      key: 'news',
    },
    {
      label: (<Link href="/admissionSituation">近年录取情况</Link>),
      key: 'admissionSituation',
    },
  ];

  const handleActive = (key: string) => {
    setCurrent(key)
  }

  return (
    <div className={styles.menu}>
      <ul>
        {
          items.map((item, index) => {
            return (
              <li key={item?.key} >
                <button onClick={() => handleActive(item?.key)}>
                  <span className={`${current === item.key ? styles.active : ''}`}>{item?.label}</span>
                </button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Nav
