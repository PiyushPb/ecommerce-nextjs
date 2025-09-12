/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Button } from "../ui/button";
import { RxArrowLeft, RxArrowRight } from "react-icons/rx";
import type { Swiper as SwiperType } from "swiper";
import Link from "next/link";

function HeroSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative h-[80vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] mt-1">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        className="w-full h-full"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        loop={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {[1, 2, 3].map((number, index) => (
          <SwiperSlide key={index} className="w-full h-full relative">
            <div className="relative w-full h-full">
              {/* Content Box */}
              <div className="absolute top-[30%] left-[10%] md:left-[15%] max-w-[80%] md:max-w-[500px] z-10">
                <h2 className="calSans text-3xl sm:text-4xl md:text-5xl text-white leading-[1]">
                  Timeless fashion, <br />
                  <span>Conscious Choices.</span>
                </h2>
                <p className="text-white mt-4 text-sm sm:text-base leading-[1.1]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque veritatis repellat quaerat eveniet ipsum eligendi harum
                  sit fugiat dolore consectetur.
                </p>
                <Link href={"/products"}>
                  <Button className="mt-6 bg-white text-black rounded-full hover:bg-gray-200 cursor-pointer">
                    Explore the product
                  </Button>
                </Link>
              </div>

              {/* Background Image */}
              <img
                src={`/assets/image/hero${number}.jpg`}
                alt="Hero Image"
                className="w-full h-full object-cover object-right md:object-top"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="absolute bottom-5 right-5 z-10 flex gap-3">
        <div
          className="p-3 bg-white rounded-full cursor-pointer hover:bg-gray-100 transition"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <RxArrowLeft size={20} />
        </div>
        <div
          className="p-3 bg-white rounded-full cursor-pointer hover:bg-gray-100 transition"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <RxArrowRight size={20} />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
