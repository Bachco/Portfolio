import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";

import Image from "next/image";

// data
const workSlides = {
  slides: [
    {
      title:
        "Frontend work for <a href='https://www.identiq.sk/' target='_blank'>IDENTIQ</a>",
      images: [
        {
          title: "Identiq",
          path: "/identiq/identiq.jpg",
          url: "https://www.identiq.sk/",
          description: "HTML, CSS, JS, some PHP",
        },
        {
          title: "Anima",
          path: "/identiq/anima.jpg",
          url: "https://www.identiq.sk/referencie/detail/anima-vets",
          description: "HTML, CSS, JS, some PHP",
        },
        {
          title: "Janto",
          path: "/identiq/janto.jpg",
          url: "https://www.janto.sk/",
          description: "HTML, CSS, JS, some PHP",
        },
        {
          title: "Roderik",
          path: "/identiq/roderik.jpg",
          url: "https://www.identiq.sk/referencie/detail/roderik",
          description: "HTML, CSS, JS, some PHP",
        },
      ],
    },
    {
      title: "Personal work",
      images: [
        {
          title: "BMWelding",
          path: "/personal/bmwelding.jpg",
          url: "https://www.bmwelding.sk/",
          description: "NextJS, Typescript...",
        },
        {
          title: "Nedorost",
          path: "/personal/nedorost.jpg",
          url: "https://nedorost.sk/",
          description: "Wordpress",
        },
        {
          title: "title",
          path: "/personal/nvdrogeria.jpg",
          url: "https://nvdrogeria.sk/",
          description: "Wordpress",
        },
        {
          title: "Phalare",
          path: "/personal/phalare.jpg",
          url: "https://example.com/thumb4",
          description: "Wordpress",
        },
      ],
    },    
  ],
};


const WorkSlider = () => {
  return (
    <Swiper
      className="work-slider xl:!pb-10 !pb-8"
      spaceBetween={10}
      freeMode={false}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      {workSlides.slides.map((slide, slideIndex) => {
        return (
          <SwiperSlide key={slideIndex}>
            <div className="mb-2 xl:mb-6 text-center">
              <h2
                className="text-xl xl:text-2xl font-medium text-white [&>a:hover]:text-accent"
                dangerouslySetInnerHTML={{ __html: slide.title }}
              ></h2>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer relative">
              {slide.images.map((image, imageIndex) => {
                return (
                  <a
                    href={image.url}
                    key={imageIndex}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group w-full h-full">
                      {/* image */}
                      <Image
                        src={image.path}
                        width={500}
                        height={300}
                        alt={image.title}
                        className="object-cover w-full h-full"
                      />

                      {/* overlay gradient */}
                      <div
                        className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd]
                        opacity-0 group-hover:opacity-80 transition-all duration-700"
                      ></div>

                      {/* title + description */}
                      <div
                        className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20
                        transition-all duration-300 w-full px-4 text-white text-center"
                      >
                        <div className="flex items-center justify-center gap-x-2 text-[13px] tracking-[0.2em] uppercase">
                          <div className="delay-100">LIVE</div>
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            PROJECT
                          </div>
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                        {image.description && (
                          <p className="text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
                            {image.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
