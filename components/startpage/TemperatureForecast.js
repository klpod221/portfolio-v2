import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TemperatureForecast = ({ weatherData }) => {
  if (!weatherData || !weatherData.length) return null;

  const getDay = (date) => {
    const day = new Date(date);

    // show date with weekday name (ex: Mon, 01 Jan 2021) British English
    return day.toLocaleDateString("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <>
      <Swiper
        spaceBetween={10}
        modules={[Navigation]}
        // custom navigation
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        slidesPerView={1}
      >
        {weatherData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <HighchartsReact
                highcharts={Highcharts}
                stockChart={Highcharts.stockChart}
                options={{
                  chart: {
                    type: "line",
                    backgroundColor: "transparent",
                  },
                  accessibility: {
                    enabled: false,
                  },
                  title: {
                    text: getDay(item.date),
                    style: {
                      color: "#fff",
                    },
                  },
                  xAxis: {
                    labels: {
                      enabled: true,
                      formatter: function () {
                        return this.value + ":00";
                      },
                      style: {
                        color: "#fff",
                      },
                    },
                  },
                  yAxis: {
                    title: {
                      text: "",
                    },
                    labels: {
                      enabled: true,
                      formatter: function () {
                        return this.value + "°C";
                      },
                      style: {
                        color: "#fff",
                      },
                    },
                    lineWidth: 1,
                    gridLineWidth: 1,
                    gridLineColor: "#aaa",
                  },
                  legend: {
                    enabled: false,
                  },
                  series: [
                    {
                      name: "Temperature",
                      data: item.data,
                    },
                  ],
                  credits: {
                    enabled: true,
                    text: "open-meteo.com",
                    href: "https://open-meteo.com/",
                  },
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* custom navigation */}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </>
  );
};

export default TemperatureForecast;
