"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function HeroSlider() {

  const banners = [
    {
      id: "1",
      banner_image:
        "https://appy.trycatchtech.com/uploads/maganlalchikki/c1a016c7edcd233ce85cbfa8a23319b3.jpg",
    },
    {
      id: "2",
      banner_image:
        "https://appy.trycatchtech.com/uploads/maganlalchikki/d10327cce146d2da9a1106a589dc27ed.jpg",
    },
    {
      id: "3",
      banner_image:
        "https://appy.trycatchtech.com/uploads/maganlalchikki/0c9a3ba5d4cfdc351587dd365f639d2f.jpg",
    },
    {
      id: "4",
      banner_image:
        "https://appy.trycatchtech.com/uploads/maganlalchikki/3db94bbb8007768afab757fda9fd9fa8.jpg",
    },
    {
      id: "5",
      banner_image:
        "https://appy.trycatchtech.com/uploads/maganlalchikki/0215ae7602f0812e4dff20ae3a129624.jpg",
    },
  ];

  return (
    <div className="max-w-8xl mx-auto mt-0 px-4 md:px-6 lg:px-0 overflow-hidden bg-gray-200">

      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 2500 }}
        loop
      >
        {banners.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full h-[250] md:h-[300px] lg:h-[400px] overflow-hidden max-w-7xl mx-auto pb-3">

              <img
                src={item.banner_image}
                className="w-full h-full object-cover px-0"
                alt="banner"
              />

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

