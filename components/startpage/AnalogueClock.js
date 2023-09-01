import { useState, useEffect } from "react";

const AnalogueClock = () => {
  const [secondsDegrees, setSecondsDegrees] = useState(0);
  const [minutesDegrees, setMinutesDegrees] = useState(0);
  const [hoursDegrees, setHoursDegrees] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date();

      setSecondsDegrees(Math.round(time.getSeconds() * 6));
      setMinutesDegrees(Math.round((time.getMinutes() + time.getSeconds() / 60) * 6));
      setHoursDegrees(Math.round((time.getHours() % 12 + time.getMinutes() / 60) * 30));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
          className={`origin-[50px_50px]`}
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
          className={`origin-[50px_50px]`}
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
          className={`origin-[50px_50px]`}
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
