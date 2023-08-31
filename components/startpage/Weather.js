import { useState, useEffect } from 'react';
import Image from 'next/image';

const Weather = () => {
  const [weather, setWeather] = useState({});

  // detect user geo location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;

        const getWeather = async () => {
          const res = await fetch(`/api/weather?lat=${latitude}&lon=${longitude}`);
          const data = await res.json();

          setWeather(data);
        };

        // fetch current weather every 5 minutes
        getWeather();

        const interval = setInterval(() => {
          getWeather();
        }, 300000);

        return () => clearInterval(interval);
      });
    }
  }, []);

  return (
    <div className="flex items-center">
      <div className="flex items-center">
        <Image
          src={weather? weather.image : ""}
          alt={weather.description}
          width={50}
          height={50}
        />
      </div>
      <div className="flex flex-col ml-2">
        <span className="text-white text-sm">{weather.description}</span>
        <span className="text-white text-sm">{weather.temperature}°C</span>
      </div>
    </div>
  );
};

export default Weather;
