import { useState, useEffect } from "react";

const AnalogueClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hoursDegrees = 30 * hours + minutes / 2;
  const minutesDegrees = 6 * minutes;
  const secondsDegrees = 6 * seconds;

  const hoursStyle = {
    transform: `rotate(${hoursDegrees}deg)`,
  };

  const minutesStyle = {
    transform: `rotate(${minutesDegrees}deg)`,
  };

  const secondsStyle = {
    transform: `rotate(${secondsDegrees}deg)`,
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
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="30"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          className="origin-[50px_50px] transition-transform duration-150 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]"
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
          className="origin-[50px_50px] transition-transform duration-150 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]"
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
          className="origin-[50px_50px] transition-transform duration-150 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]"
          style={secondsStyle}
        />
      </svg>
  );
};

export default AnalogueClock;
