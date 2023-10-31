import { useState, useEffect } from "react";
import MyModal from "../MyModal";
import WeatherItem from "./WeatherItem";
import TemperatureForecast from "./TemperatureForecast";

const Weather = () => {
  const { curWeather, forecastWeather } = useWeather();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer hover:bg-white/20 p-2 rounded-lg"
        title="Show More"
        onClick={() => setShowModal(true)}
      >
        <WeatherItem weatherData={curWeather} now={true} />
      </div>

      <MyModal show={showModal} onClose={() => setShowModal(false)}>
        {/* show chart */}
        <div className="mb-4">
          <TemperatureForecast forecastWeather={forecastWeather} />
        </div>
      </MyModal>
    </>
  );
};

// useWeather hook
export const useWeather = () => {
  const [curWeather, setCurWeather] = useState({});
  const [forecastWeather, setForecastWeather] = useState({});

  // detect user geo location
  useEffect(() => {
    const getGeoLocation = () => {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    };

    const getWeatherIcon = (icon) => {
      return `https://openweathermap.org/img/wn/${icon}.png`;
    };

    const appid = "1c387069e2733e7fdab6f17bde301841";

    const getWeather = async () => {
      try {
        const position = await getGeoLocation();
        if (!position) return;
        const { latitude, longitude } = position.coords;

        const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${appid}&units=metric`;

        const res = await fetch(weatherApi);
        const data = await res.json();

        const weatherData = {
          temperature: data.main.temp,
          description: data.weather[0].description,
          icon: getWeatherIcon(data.weather[0].icon),
          time: new Date(),
        };

        setCurWeather(weatherData);
      } catch (error) {
        console.error(error);
      }
    };

    const getForecastWeather = async () => {
      try {
        const position = await getGeoLocation();
        if (!position) return;
        const { latitude, longitude } = position.coords;

        const weatherApi = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${appid}&units=metric`;

        const res = await fetch(weatherApi);
        const { list: data } = await res.json();

        const forecastWeatherData = data.map((d) => {
          return {
            temperature: d.main.temp,
            description: d.weather[0].description,
            icon: getWeatherIcon(d.weather[0].icon),
            time: d.dt_txt,
          };
        });

        const forecastWeather = forecastWeatherData.reduce((acc, cur) => {
          const date = cur.time.split(" ")[0];
          const index = acc.findIndex((a) => a.date === date);
          if (index === -1) {
            acc.push({
              date,
              weather: [cur],
            });
          } else {
            acc[index].weather.push(cur);
          }
          return acc;
        }, []);

        setForecastWeather(forecastWeather);
      } catch (error) {
        console.error(error);
      }
    };

    getWeather();
    getForecastWeather();

    // refresh weather every 10 minutes
    const interval = setInterval(() => {
      getWeather();
      getForecastWeather();
    }, 600000);

    return () => clearInterval(interval);
  }, []);

  return { curWeather, forecastWeather };
};

export default Weather;
