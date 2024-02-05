"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Mousewheel, Keyboard,Autoplay } from "swiper/modules";

export default function LatestSlider() {
  return (
   <>
    <section className='w-[100%] mt-3 container_maxWidth_1440 flex justify-center'>
      <div className="w-[90%] h-[300px] flex justify-center items-center border-2 rounded-lg'">
      <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation={false}
      pagination={{clickable:true}}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      modules={[Navigation, Mousewheel,Pagination, Keyboard,Autoplay]}
    >
      <SwiperSlide>
        <div className="w-[100%] h-[299px] flex justify-center items-center">
          <p>New Big Deal Coming Soon 😊</p>
        </div>
       </SwiperSlide>
       <SwiperSlide>
        <div className="w-[100%] h-[299px] flex justify-center items-center">
          <p>New Big Deal Coming Soon 😊</p>
        </div>
       </SwiperSlide>
       <SwiperSlide>
        <div className="w-[100%] h-[299px] flex justify-center items-center">
          <p>New Big Deal Coming Soon 😊</p>
        </div>
       </SwiperSlide>
       
    </Swiper>

      </div>
      
      {/* <main className='flex justify-center mt-5'>
      <div className='w-[90%] h-[300px] flex justify-center items-center border-2 rounded-lg'>
        <p>New Big Deal Coming Soon 😊</p>
       </div>
      </main> */}
    </section>
   </>
  )
}
