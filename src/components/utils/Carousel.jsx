import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from './card';
import inkacola from '../../assets/productos/inkacola.jpeg';
import jabondove from '../../assets/productos/jabondove.jpg';
import lentejascosteña from '../../assets/productos/lentejascosteña.jpeg';
const Carousel =() => {
  const destacados = [
  {
    title: "Inka Cola",
    brand: "Coca-Cola",
    volume: "500ml",
    price: "S/ 3.50",
    image: inkacola,
  },
  {
    title: "Jabón Dove",
    brand: "Dove",
    volume: "90g",
    price: "S/ 4.20",
    image: jabondove,
  },
  {
    title: "Lentejas Costeña",
    brand: "Costeña",
    volume: "500g",
    price: "S/ 5.00",
    image: lentejascosteña,
  },
];

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
        {destacados.map((item, idx) => (
          <SwiperSlide key={idx}>
            <Card
              title={item.title}
              brand={item.brand}
              volume={item.volume}
              price={item.price}
              image={item.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;