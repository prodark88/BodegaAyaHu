import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import image from "../assets/image.png"
import image2 from "../assets/image2.webp"
import image3 from "../assets/image3.png"
import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  image3 ,
  image3 ,
  image3 ,
];

const marcas = [
  'Faustino',
  'Marqués de Cáceres',
  'City of London',
  'Ron Carúpano',
  'Whitley Neill',
  'Vittoria',
  'Tarapacá',
  'Doña Paula',
  'Tabernero',
  'Los Haroldos',
];

const HeroSection =()=> {
  return (
    <section className="flex  lg:flex-col w-full h-auto">
      {/* Carrusel */}
      <div className="w-full lg:w-full h-auto lg:h-auto">
        <Swiper
          pagination={{
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className} w-3 h-3 border border-white rounded-full mx-1 bg-transparent transition-all duration-300"></span>`,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="h-full"
        >
          {slides.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src}
                alt={`Promo ${idx + 1}`}
                className="w-full h-full  object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Marcas */}
      <div className="w-full lg:w-full bg-neutral-900 text-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 p-4">
        {marcas.map((marca, idx) => (
          <a
            key={idx}
            href={`/productos?marca=${encodeURIComponent(marca)}`}
            className="text-sm border border-gray-700 p-4 text-center hover:bg-white hover:text-black transition rounded"
          >
            {marca}
          </a>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;