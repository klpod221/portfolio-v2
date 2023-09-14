import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import { RxDesktop, RxRocket, RxArrowTopRight } from "react-icons/rx";

import { RiAdminLine, RiUploadCloud2Line } from "react-icons/ri";

import { TbSettingsAutomation } from "react-icons/tb";

// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: "Web Development",
    description: "Build or upgrade your website with modern technology.",
  },
  {
    icon: <RiAdminLine />,
    title: "System Admin",
    description: "Build and manage your server to keep your system running.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "Optimize your website to get more traffic.",
  },
  {
    icon: <TbSettingsAutomation />,
    title: "DevOps",
    description: "Automate your development process to make it more efficient.",
  },
  {
    icon: <RiUploadCloud2Line />,
    title: "Cloud Computing",
    description: "Deploy your website to the cloud to make it more scalable.",
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
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <Link
              title="Contact me"
              href={"/contact?service=" + item.title}
              aria-label={`Contact me for ${item.title}`}
              className="relative bg-[#412f7b26] h-[180px] sm:h-[240px] md:h-[262px] xl:h-[280px] rounded-lg px-6 py-8 sm:p-3 md:px-6 md:py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[#5941a926] transition-all duration-300"
            >
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>

              {/* title and desc */}
              <div className="">
                <div className="mb-2 text-lg">{item.title}</div>
                <div className="max-2-[350px] leading-normal">
                  {item.description}
                </div>
              </div>

              {/* arrow */}
              <div className="text-3xl sm:absolute bottom-4">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
