
"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Mousewheel, Keyboard,Autoplay } from "swiper/modules";
import ProductCard from "./ProductCard";

export default function NewLaptop() {
  return (
    <>
          <section className="mt-[80px] w-[93%] mb-10 ml-10 container_maxWidth_1440">
    <div className="text-[25px] font-600 mb-5 text-[#2f2f2f]">
        <p>New Laptops</p>
    </div>
    <Swiper
      spaceBetween={30}
      slidesPerView={3.5}
      navigation={true}
      modules={[Navigation, Mousewheel, Keyboard,Autoplay]}
    >
      <SwiperSlide><ProductCard/></SwiperSlide>
      <SwiperSlide><ProductCard/></SwiperSlide>
      <SwiperSlide><ProductCard/></SwiperSlide>
      <SwiperSlide><ProductCard/></SwiperSlide>
      <SwiperSlide><ProductCard/></SwiperSlide>
      <SwiperSlide><ProductCard/></SwiperSlide>
      <SwiperSlide><ProductCard/></SwiperSlide>
      <SwiperSlide><ProductCard/></SwiperSlide>
      <SwiperSlide><ProductCard/></SwiperSlide>
    </Swiper>
    </section>
    </>
  )
}
