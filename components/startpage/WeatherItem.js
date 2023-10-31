import Image from "next/image";

const WeatherItem = ({ weatherData, now = false }) => {
  if (!weatherData) return null;

  return (
    <div className="flex flex-col">
      {now ? (
        <span className="text-white text-lg">Now</span>
      ) : (
        <span className="text-white text-lg">
          {new Date(weatherData.time).getHours()}:00
        </span>
      )}

      <div className="flex items-center">
        {weatherData.icon && (
          <Image
            src={weatherData.icon}
            alt={weatherData.description}
            width={50}
            height={50}
          />
        )}
        <div className="flex flex-col ml-2">
          <span className="text-white text-lg capitalize">{weatherData.description}</span>
          <span className="text-white text-lg">
            {weatherData.temperature && `${weatherData.temperature}°C`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherItem;
