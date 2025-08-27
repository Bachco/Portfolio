import { Swiper, SwiperSlide } from "swiper/react";

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { FreeMode, Pagination } from "swiper";

// data
export const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description: "From logos to web styles.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: " Outstanding web and mobile applications.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "Compelling words that engage and persuade.",
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description: "Compelling words that engage and persuade.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "Search Engine Optimization.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      className="h-[240px] sm:h-[340px]"
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
    >      
     {
      serviceData.map((item, index) => {
        return <SwiperSlide key={index}>
          <div className="bg-[rgba(65,47,123,1.15)] h-max rounded-lg px-6 py-8 flex
          sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/** icon */}
            <div className="text-4xl text-accent mb-4">{item.icon}</div>
            {/** title & desc */}
            <div className="mb-8">
              <h3 className="mb-2 text-lg">{item.title}</h3>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>
            {/** arrow */}
            <div className="text-3xl">
              <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
            </div>
          </div>
        </SwiperSlide>
      })
     }       
    </Swiper>
  );
};

export default ServiceSlider;
