import { useState, useEffect } from "react";
import wmo from "../../const/wmo_data";
import MyModal from "../MyModal";
import WeatherItem from "./WeatherItem";
import TemperatureForecast from "./TemperatureForecast";

const Weather = () => {
  const { weather } = useWeather();
  const [showModal, setShowModal] = useState(false);

  if (!weather || !weather.length) return null;

  // find now
  const currentWeather = weather.find((w) => {
    const now = new Date();
    const time = new Date(w.time);
    return (
      time.getDate() === now.getDate() && time.getHours() === now.getHours()
    );
  });

  const perDateData = weather.reduce((acc, cur) => {
    const date =
      new Date(cur.time).getDate() +
      "-" +
      new Date(cur.time).getMonth() +
      "-" +
      new Date(cur.time).getFullYear();

    if (!acc[date]) acc[date] = [];
    acc[date].push(cur);
    return acc;
  }, {});

  const weatherData = Object.keys(perDateData).map((date) => {
    return {
      date: date,
      data: perDateData[date].map((d) => {
        return {
          x: new Date(d.time).getHours(),
          y: d.temperature,
        };
      }),
    };
  });

  return (
    <>
      <div
        className="cursor-pointer hover:bg-white/20 p-2 rounded-lg"
        title="Show More"
        onClick={() => setShowModal(true)}
      >
        <WeatherItem weatherData={currentWeather} now={true} />
      </div>

      <MyModal show={showModal} onClose={() => setShowModal(false)}>
        {/* show chart */}
        <div className="mb-4">
          <TemperatureForecast
            weatherData={weatherData}
          />
        </div>
      </MyModal>
    </>
  );
};

// useWeather hook
export const useWeather = () => {
  const [weather, setWeather] = useState({});

  // detect user geo location
  useEffect(() => {
    const getGeoLocation = () => {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    };

    const dayOrNight = (time = new Date()) => {
      const hour = time.getHours();
      return hour > 6 && hour < 18 ? "day" : "night";
    };

    const getWeather = async () => {
      try {
        const position = await getGeoLocation();
        if (!position) return;
        const { latitude, longitude } = position.coords;

        const weatherApi = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode&daily=sunrise,sunset&timezone=Asia/Ho_Chi_Minh&current_weather=true`;

        const res = await fetch(weatherApi);
        const data = await res.json();

        const { temperature_2m, weathercode, time } = data.hourly;

        const weatherForecast =
          time &&
          time.map((t, index) => {
            const isDay = dayOrNight(new Date(t));
            const weather = wmo[weathercode[index]][isDay ? "day" : "night"];

            return {
              time: t,
              temperature: temperature_2m[index],
              ...weather,
            };
          });

        setWeather(weatherForecast);

        // split weatherForecast per day
      } catch (error) {
        console.error(error);
      }
    };

    getWeather();

    // refresh weather every 10 minutes
    const interval = setInterval(() => {
      getWeather();
    }, 600000);

    return () => clearInterval(interval);
  }, []);

  return { weather };
};

export default Weather;
