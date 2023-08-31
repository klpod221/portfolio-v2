import { useState, useEffect } from "react";
import Image from "next/image";
import wmo from "../../const/wmo_data";

const Weather = () => {
  const { weather } = useWeather();

  if (!weather) return null;

  return (
    <div className="flex items-center">
      <div className="flex items-center">
        {weather.image && (
          <Image
            src={weather.image}
            alt={weather.description}
            width={50}
            height={50}
          />
        )}
      </div>
      <div className="flex flex-col ml-2">
        <span className="text-white text-sm">{weather.description}</span>
        <span className="text-white text-sm">
          {weather.temperature && `${weather.temperature}°C`}
        </span>
      </div>
    </div>
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

    const getWeather = async () => {
      try {
        const position = await getGeoLocation();
        if (!position) return;
        const { latitude, longitude } = position.coords;

        const weatherApi = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode&daily=sunrise,sunset&timezone=Asia/Ho_Chi_Minh&current_weather=true`;

        const res = await fetch(weatherApi);
        const data = await res.json();

        const { current_weather } = data;
        const { temperature, weathercode } = current_weather;

        // determine day or night
        const date = new Date();
        const hour = date.getHours();
        const isDay = hour > 6 && hour < 18;

        // get weather description and image
        const weather = wmo[weathercode][isDay ? "day" : "night"];

        setWeather({
          temperature: temperature,
          ...weather,
        });
      } catch (error) {
        console.error(error);
      }
    }

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
