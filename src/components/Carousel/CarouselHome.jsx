import React from 'react'
import { Carousel } from 'antd'
import imgCarousel1 from '../../assets/Carousel-img/img-carousel-1.jpg'
import imgCarousel2 from '../../assets/Carousel-img/img-carousel-2.jpg'
import imgCarousel3 from '../../assets/Carousel-img/img-carousel-3.jpg'

const CarouselHome = () => {
  return (
    <Carousel autoplay>
      <div className='h-[427px]'>
        <img src={imgCarousel1} alt='' />
      </div>
      <div className='h-[427px]'>
        <img src={imgCarousel2} alt='' />
      </div>
      <div className='h-[427px]'>
        <img src={imgCarousel3} alt='' />
      </div>
    </Carousel>
  )
}

export default CarouselHome
