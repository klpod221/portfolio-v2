import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState({});
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  // get location
  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        });
      } else {
        console.error("Can't get location");
      }
    };

    getLocation();
  }, []);

  // get weather
  useEffect(() => {
    const getWeather = async () => {
      try {
        const { data } = await axios.get(
          `/api/weather?lat=${latitude}&lon=${longitude}`
        );
        setWeather(data);
      } catch (error) {
        console.error(error);
      }
    };

    getWeather();
  }, [latitude, longitude]);

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
        <span className="text-white text-sm">{weather.temperature}°C</span>
      </div>
    </div>
  );
};

export default Weather;
