'use client'
import React, { useState, useEffect } from 'react'
import styles from './nav.module.scss'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { Input, Drawer } from 'antd';
import { MenuOutlined, SearchOutlined, LeftOutlined } from '@ant-design/icons';


function Nav() {
  const [current, setCurrent] = useState('home');
  const path = usePathname()

  const [open, setOpen] = useState(false);
  const [pKey, setPKey] = useState('')


  useEffect(() => {
    if (path === '/') {
      setCurrent('home')
    } else {
      const newPath = path.substring(1)
      setCurrent(newPath)
    }
  }, [path])

  const items = [
    {
      label: (<Link href="/">首页</Link>),
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


  const onClose = () => {
    setOpen(false);
  };

  const openDrawer = () => {
    setOpen(!open);
  }

  return (
    <div className={styles.menu}>
      <div className={styles.pc}>
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
      <div className={styles.mobile}>
        <div className={styles.search}>
          <Input size="small" placeholder="Search..." prefix={<SearchOutlined />} />
        </div>
        <div className={styles.menuLogo} onClick={openDrawer}>
          <MenuOutlined />
        </div>
        <div className={styles.mobileNav} style={{ display: open ? '' : 'none' }}>
          <Drawer
            placement="right"
            open={open}
            closable={false}
            getContainer={false}
            onClose={onClose}
          >
            <div className={styles.drawerNav}>
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
          </Drawer>
        </div>
      </div>
    </div>
  )
}

export default Nav
