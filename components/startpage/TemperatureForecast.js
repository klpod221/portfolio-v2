import Highcharts, { Time } from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TemperatureForecast = ({ forecastWeather }) => {
  if (!forecastWeather || !forecastWeather.length)
    return <div className="text-white">Loading...</div>;

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

  const getTime = (time) => {
    const date = new Date(time);

    return (
      Number(
        date.toLocaleTimeString("en-GB", {
          hour: "numeric",
          hour12: false,
        })
      ) + 7
    ); // GMT+7
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
        {forecastWeather.map((item, index) => {
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
                    text: getDay(item.date) + " (GMT+7)",
                    style: {
                      color: "#fff",
                    },
                  },
                  xAxis: {
                    labels: {
                      enabled: true,
                      formatter: function () {
                        const time =
                          this.value > 24 ? this.value - 24 : this.value;
                        return time + ":00";
                      },
                      style: {
                        color: "#fff",
                      },
                      startOnTick: true,
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
                      data: item.weather.map((w) => {
                        return {
                          x: getTime(new Date(w.time).getTime()),
                          y: w.temperature,
                          description: w.description,
                          icon: w.icon,
                        };
                      }),
                    },
                  ],
                  tooltip: {
                    useHtml: true,
                    formatter: function () {
                      return (
                        (this.x + ":00") +
                        "<br/><p class='capitalize'>" +
                        this.point.description +
                        "</p><br/>" +
                        this.y +
                        "°C"
                      );
                    },
                  },
                  credits: {
                    enabled: true,
                    text: "openweathermap.org",
                    href: "https://openweathermap.org/",
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
