import { useState, useEffect } from 'react';
import image2 from "../../../public/reserva.jpg"
import image3 from "../../../public/image3.png"
const banners = [
  { id: 1, image: image2 , alt: "Promo 1" },
  { id: 2, image: image3, alt: "Cyber 365" },
  { id: 3, image: image2, alt: "Lácteos al 2x1" },
];

const BannerCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-52 sm:h-64">
      {banners.map((banner, i) => (
        <img
          key={banner.id}
          src={banner.image}
          alt={banner.alt}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${index === i ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </div>
  );
};

export default BannerCarousel;
