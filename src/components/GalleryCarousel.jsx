import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";

const images = [
  "/assets/gallery/1.jpg",
  "/assets/gallery/2.jpg",
  "/assets/gallery/3.jpg",
  "/assets/gallery/4.jpg",
  "/assets/gallery/5.jpg",
  "/assets/gallery/6.jpg",
  "/assets/gallery/7.jpg",
  "/assets/gallery/8.jpg",
  "/assets/gallery/9.jpg",
  "/assets/gallery/10.jpg",
  "/assets/gallery/11.jpg",
  "/assets/gallery/12.jpg",
  "/assets/gallery/13.jpg",
  "/assets/gallery/14.jpg",
  "/assets/gallery/15.jpg",
  "/assets/gallery/16.jpg",
  "/assets/gallery/17.jpg",
  "/assets/gallery/18.jpg",
  "/assets/gallery/19.jpg",
  "/assets/gallery/20.jpg",
  "/assets/gallery/21.jpg",
  "/assets/gallery/22.jpg",
  "/assets/gallery/23.jpg",
  "/assets/gallery/24.jpg",
  "/assets/gallery/25.jpg",
  "/assets/gallery/26.jpg",
  "/assets/gallery/27.jpg",
  "/assets/gallery/28.jpg",
  "/assets/gallery/29.jpg",
  "/assets/gallery/30.jpg",
  "/assets/gallery/31.jpg",
  "/assets/gallery/32.jpg",
];

export default function GalleryCarousel() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-green-700 mb-8 text-center">
          Our Impact Moments
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, Grid]}
          navigation
          //   pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          grid={{ rows: 2 }}
          spaceBetween={20}
          breakpoints={{
            320: {
              slidesPerView: 1,
              grid: { rows: 1 },
            },
            640: {
              slidesPerView: 2,
              grid: { rows: 1 },
            },
            768: {
              slidesPerView: 3,
              grid: { rows: 1 },
            },
            1024: {
              slidesPerView: 4,
              grid: { rows: 1 },
            },
          }}
          className="rounded-lg shadow-lg"
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <img
                src={image}
                alt={`NGO Impact ${index + 1}`}
                className="w-full h-60 object-cover rounded-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
