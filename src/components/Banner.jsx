import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        navigation
        pagination={{ clickable: true }}
        className="w-full h-[250px]" 
      >
        <SwiperSlide>
          <img
            src="https://xboxwire.thesourcemediaassets.com/sites/2/2023/11/CODWZ_S1-X1_-1920x1080-enUS_JPG-7bfcc41943e5c8cfdb37.jpg"
            alt="slide 1"
            className="w-full h-full mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ytimg.com/vi/GKXS_YA9s7E/maxresdefault.jpg"
            alt=""
            className="w-full h-full mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ytimg.com/vi/4HTSv-bXabQ/maxresdefault.jpg"
            alt=""
            className="w-full h-full mx-auto"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
