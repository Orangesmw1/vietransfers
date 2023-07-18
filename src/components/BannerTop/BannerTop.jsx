import React from 'react'
import './banner-top.css'
import imgBannerTop from '../../assets/banner-top.png'

const BannerTop = () => {
  return (
    <div className='relative h-[80px] flex items-center justify-center box-banner-top '>
      <img className='img-banner-top ' src={imgBannerTop} alt='' />
    </div>
  )
}

export default BannerTop
