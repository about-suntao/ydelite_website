import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/assets/styles/globals.css'
import { AntdRegistry } from '@ant-design/nextjs-registry';
// swiper 插件
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import img1 from '../../favicon.ico'

import Header from '@/components/header/page'
import Footer from '@/components/footer/page';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '深圳市云顶学校精英国际高中、初中、小学',
  description: '深圳市云顶学校精英国际高中、初中、小学',
  icons: {
    icon: 'https://icon-apply.oss-cn-hangzhou.aliyuncs.com/2024/01/19/475_favicon.ico',
    shortcut: 'https://icon-apply.oss-cn-hangzhou.aliyuncs.com/2024/01/19/475_favicon.ico',
    apple: 'https://icon-apply.oss-cn-hangzhou.aliyuncs.com/2024/01/19/475_favicon.ico',
    other: {
      rel: 'https://icon-apply.oss-cn-hangzhou.aliyuncs.com/2024/01/19/475_favicon.ico',
      url: 'https://icon-apply.oss-cn-hangzhou.aliyuncs.com/2024/01/19/475_favicon.ico',
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <Header></Header>
          {children}
          <Footer></Footer>
        </AntdRegistry>
      </body>
    </html>
  )
}
