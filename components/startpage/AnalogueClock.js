import { useState, useEffect } from "react";

const AnalogueClock = () => {
  const [secondsDegrees, setSecondsDegrees] = useState(null);
  const [minutesDegrees, setMinutesDegrees] = useState(null);
  const [hoursDegrees, setHoursDegrees] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date();

      if (secondsDegrees === null || minutesDegrees === null || hoursDegrees === null) {
        setSecondsDegrees(time.getSeconds() * 6);
        setMinutesDegrees((time.getMinutes() + time.getSeconds() / 60) * 6);
        setHoursDegrees((time.getHours() % 12 + time.getMinutes() / 60) * 30);
      } else {
        setSecondsDegrees(secondsDegrees + 6);
        setMinutesDegrees(minutesDegrees + 0.1);
        setHoursDegrees(hoursDegrees + 0.008333333333333333);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsDegrees, minutesDegrees, hoursDegrees]);

  const secondsStyle = {
    transform: `rotate(${secondsDegrees}deg)`,
  };

  const minutesStyle = {
    transform: `rotate(${minutesDegrees}deg)`,
  };

  const hoursStyle = {
    transform: `rotate(${hoursDegrees}deg)`,
  };

  return (
    <svg className="max-w-[15em] w-full h-auto" viewBox="0 0 100 100" filter="drop-shadow(0 0 0.5rem rgba(0,0,0,0.25))">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="transparent"
          stroke="#fff"
          strokeWidth="2"
        />

        {/* clock hand */}
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="30"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          className={`origin-[50px_50px] transition-all duration-1000 ease-in-out`}
          style={hoursStyle}
        />

        <line
          x1="50"
          y1="50"
          x2="50"
          y2="20"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          className={`origin-[50px_50px] transition-all duration-1000 ease-in-out`}
          style={minutesStyle}
        />

        <line
          x1="50"
          y1="50"
          x2="50"
          y2="10"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
          className={`origin-[50px_50px] transition-all duration-1000 ease-in-out`}
          style={secondsStyle}
        />

        <circle
          cx="50"
          cy="50"
          r="2"
          fill="#fff"
          stroke="#fff"
          strokeWidth="1"
        />
      </svg>
  );
};

export default AnalogueClock;
