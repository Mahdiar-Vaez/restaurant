import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./swiper.css";
import slider1 from "../../assets/slider3.png";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider1.png";
// import required modules
import { Navigation ,Autoplay} from "swiper/modules";

export default function SwiperSec() {
    const [img,setImg]=useState()
//     useEffect(()=>{ fetch('http://localhost:3000/Swiper')
//     .then(res=>res.json())
//     .then(data=>setImg(data))

// },[])
useEffect(()=>{
  (async()=>{
    try {
      const res=await fetch("http://localhost:3001/Swiper")
      const data=await res.json()
      setImg(data)
    } catch (error) {
alert('can not fetch')  
  }
  })()
},[])
   
  return (
    <>
    
      <Swiper autoplay={{
        delay:3000,
        disableOnInteraction:false
      }}  navigation={true} modules={[Navigation,Autoplay]} className="mySwiper">
     {img?.map((e)=> <SwiperSlide style={{
      
    }} className="section">
          <img src={e?.imgUrl} alt="جوجه سخاری" />
          <div className="slide-content">
            {" "}
            <h3>{e?.name}</h3>
            <p>با بهترین مواد اولیه </p>
            <button className="slider-btn">سفارش دهید</button>
          </div>
        </SwiperSlide>)}
      </Swiper>
    </>
  );
}
