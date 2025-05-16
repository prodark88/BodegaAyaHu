import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from './card';

const Carousel =() => {
  return (
    <div className="w-full max-w-2xl mx-auto py-6">
      <Swiper
        spaceBetween={6}
        slidesPerView={3}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {/* Puedes duplicar o mapear dinámicamente las tarjetas */}
        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;