import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// icons
import { BsArrowRight } from "react-icons/bs";

// data
const workSlides = [
  [
    {
      title: "title",
      path: "/thumb1.jpg",
    },
    {
      title: "title",
      path: "/thumb2.jpg",
    },
    {
      title: "title",
      path: "/thumb3.jpg",
    },
    {
      title: "title",
      path: "/thumb4.jpg",
    },
  ],
  [
    {
      title: "title",
      path: "/thumb4.jpg",
    },
    {
      title: "title",
      path: "/thumb1.jpg",
    },
    {
      title: "title",
      path: "/thumb2.jpg",
    },
    {
      title: "title",
      path: "/thumb3.jpg",
    },
  ],
];

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      className="h-[340px] sm:h-[480px]"
    >
      {workSlides.map((slide, slideIndex) => {
        return (
          <SwiperSlide key={slideIndex}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.map((image, imageIndex) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={imageIndex}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* image */}
                      <Image
                        src={image.path}
                        width={500}
                        height={300}
                        alt={image.title}
                      />

                      {/* overlay */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700" />

                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracing-[0.2em]">
                          {/* title 1 */}
                          <div className="delay-100">LIVE</div>

                          {/* title 2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            PROJECT
                          </div>

                          {/* icon */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
