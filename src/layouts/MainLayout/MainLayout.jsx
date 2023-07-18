import React from 'react'
import BannerTop from '../../components/BannerTop/BannerTop'
import Header from '../../components/Header'
import Categories from '../../components/Categories'

const MainLayout = ({ children }) => {
  return (
    <div>
      <BannerTop />
      <Header />
      <Categories />
      {children}
    </div>
  )
}

export default MainLayout
