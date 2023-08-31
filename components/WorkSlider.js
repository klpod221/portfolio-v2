import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import ProjectItem from "../components/ProjectItem";

// data
const workSlides = [
  [
    {
      title: "Browser Start Page",
      image: "/images/projects/brower-start-page.png",
      url: "/projects/startpage",
    },
    {
      title: "Demo Project",
      image: "/images/thumb2.jpg",
      url: ""
    },
    {
      title: "Demo Project",
      image: "/images/thumb3.jpg",
      url: ""
    },
    {
      title: "Demo Project",
      image: "/images/thumb4.jpg",
      url: ""
    },
  ],
  [
    {
      title: "Demo Project",
      image: "/images/thumb4.jpg",
      url: ""
    },
    {
      title: "Browser Start Page",
      image: "/images/projects/brower-start-page.png",
      url: "/projects/startpage",
    },
    {
      title: "Demo Project",
      image: "/images/thumb2.jpg",
      url: ""
    },
    {
      title: "Demo Project",
      image: "/images/thumb3.jpg",
      url: ""
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
      className="h-[350px] sm:h-[480px] md:max-w-2xl mx-auto"
    >
      {workSlides.map((slide, slideIndex) => {
        return (
          <SwiperSlide key={slideIndex}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.map((image, imageIndex) => {
                return (
                  <ProjectItem key={imageIndex} project={image} />
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
