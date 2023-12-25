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
      description: "A browser start page with a minimalistic design.",
      url: "/projects/startpage",
    },
    {
      title: "Been Together",
      image: "/images/projects/been-together.jpg",
      description:
        "A web app to count how long you've been together with your partner.",
      url: "/projects/been-together",
    },
    {
      title: "Calculator",
      image: "/images/projects/calculator.png",
      description: "A simple calculator app.",
      url: "/code-tournament-calculator/",
    },
    {
      title: "klpod0s",
      image: "/images/projects/klpod0s.png",
      description:
        "Aesthetic, dynamic and minimal dots for Arch Linux + Hyprland",
      url: "/klpod0s",
    },
  ],
  [
    {
      title: "klpod0s",
      image: "/images/projects/klpod0s.png",
      description:
        "Aesthetic, dynamic and minimal dots for Arch Linux + Hyprland",
      url: "/klpod0s",
    },
    {
      title: "2048",
      image: "/images/projects/2048.png",
      description: "Clone of 2048 classic game",
      url: "/2048",
    },
    {
      title: "Get members of Facebook group Chrome Extension",
      image: "/images/projects/get-facebook-members-extension.png",
      description:
        "Chrome Extension to get member of Facebook group and export to xlsx file",
      url: "/chrome-extension-get-member-of-facebook-group",
    },
    {
      title: "Linkedin Connect Bot",
      image: "/images/projects/linkedin-connect-bot.png",
      description: "Simple Python + Selenium script that help auto send Linkedin connect request",
      url: "/linkedin-connect-bot"
    }
  ],
];

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      className="h-[350px] sm:h-[480px] md:max-w-2xl mx-auto"
    >
      {workSlides.map((slide, slideIndex) => {
        return (
          <SwiperSlide key={slideIndex}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.map((image, imageIndex) => {
                return <ProjectItem key={imageIndex} project={image} />;
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
