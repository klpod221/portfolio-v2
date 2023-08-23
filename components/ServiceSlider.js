import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const swiperBreakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 15,
  },
  640: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
};

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={swiperBreakpoints}
      modules={[FreeMode, Pagination, Autoplay]}
      freeMode={true}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[#412f7b26] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[#5941a926] transition-all duration-300">
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>

              {/* title and desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <div className="max-2-[350px] leading-normal">
                  {item.description}
                </div>
              </div>

              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"/>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
