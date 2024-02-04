"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import ProductCard from "./ProductCard";

export default function NewMobiles() {
  return (
   <>
    <section className="mt-[50px] w-[93%] ml-10 container_maxWidth_1440">
    <div className="text-[25px] font-600 mb-5 text-[#2f2f2f]">
        <p>New Mobile Phone</p>
    </div>
    <Swiper
      spaceBetween={30}
      slidesPerView={3.5}
      navigation={true}
      modules={[Navigation, Mousewheel, Keyboard]}
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
  );
}
