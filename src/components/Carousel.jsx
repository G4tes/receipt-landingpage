import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import ati from "./assets/img/carousel/resep-ati-ampela-kecap.jpg";
import tahu from "./assets/img/carousel/resep-kupat-tahu-magelang.jpg";
import bandeng from "./assets/img/carousel/resep-pindang-bandeng-kuah-asam-manis.jpg";
import Menu from "../components/Carousel/Menu";
const Carousel = () => {
  const makanan = [
    {
      id: 1,
      src: ati,
      title: "Resep Ati Ampela Kecap Daun Jeruk, Makanan Rumahan Wajib Ada",
    },
    {
      id: 2,
      src: tahu,
      title: "Resep Kupat Tahu Magelang, Menu Sarapan Enak dan Komplet",
    },
    {
      id: 3,
      src: bandeng,
      title: "Resep Pindang Bandeng Kuah Asam Manis, Sajian Sehat dan Istimewa",
    },
  ];
  return (
    <div className="mx-auto pt-[7.5rem] md:mt-[7.5rem] max-w-6xl md:pt-12">
      <div className=" w-full">
        <Swiper
          breakpoints={{
            300: {
              spaceBetween: 10,
            },
            640: {
              spaceBetween: 20,
            },
            768: {
              spaceBetween: 40,
            },
            1024: {
              spaceBetween: 50,
            },
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            type: "bullets",
            clickableClass: "swiper-pagination",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          direction="horizontal"
          modules={[Pagination, Autoplay]}
          slideClass="swiper-slide"
          slideActiveClass="swiper-slide-active"
        >
          {makanan.map(({ id, src, title }) => (
            <div key={id}>
              <SwiperSlide>
                <Menu img={src} text={title} />
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
