import React from 'react'
import BannerComponents from '@/components/bannerComponents/banner'
import NewsList from './newsList/newsList'

function News() {
  return (
    <div>
      <BannerComponents name="Latest News"></BannerComponents>
      <NewsList></NewsList>
    </div>
  )
}

export default News
