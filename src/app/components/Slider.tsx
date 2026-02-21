"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type SliderProps<T> = {
  items: T[];
  renderSlide: (item: T, index: number) => React.ReactNode;
  title?: string;
  description?: string;
  slidesPerView?: number;
  autoPlay?: boolean;
  className?: string;
  imageContainer?:string;
  swipeItem?:string;
};

export default function Slider<T>({
  items,
  renderSlide,
  title,
  description,
  slidesPerView = 2,
  autoPlay = true,
  className = '',
  imageContainer='',
  swipeItem='',
}: SliderProps<T>) {
  return (
    <div className={`${className}`}>
      <div className="md:max-w-[50vw] mx-auto px-4 text-center">
        {title && <h2 className="text-3xl font-bold text-gray-900">{title}</h2>}
        {description && <p className="text-gray-500 mt-2">{description}</p>}

        <div className={`${imageContainer} mt-10`}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            // navigation
            pagination={{ clickable: true }}
            autoplay={autoPlay ? { delay: 3000, disableOnInteraction: false } : false}
            grabCursor={true}
            spaceBetween={15}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView },
            }}
          >
            {items.map((item, index) => (
              <SwiperSlide key={index} className={`${swipeItem}`}>{renderSlide(item, index)}</SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
