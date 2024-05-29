import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function MainSlider() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="main-swiper"
      >
        <SwiperSlide className='main-slide'>Slide 1</SwiperSlide>
        <SwiperSlide className='main-slide'>Slide 2</SwiperSlide>
        <SwiperSlide className='main-slide'>Slide 3</SwiperSlide>
        <SwiperSlide className='main-slide'>Slide 4</SwiperSlide>
        <SwiperSlide className='main-slide'>Slide 5</SwiperSlide>
        <SwiperSlide className='main-slide'>Slide 6</SwiperSlide>
        <SwiperSlide className='main-slide'>Slide 7</SwiperSlide>
        <SwiperSlide className='main-slide'>Slide 8</SwiperSlide>
        <SwiperSlide className='main-slide'>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
