import { useState, useEffect } from "react";

const AnalogueClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const secondsStyle = {
    transform: `rotate(${time.getSeconds() * 6}deg)`
  };

  const minutesStyle = {
    transform: `rotate(${(time.getMinutes() + time.getSeconds() / 60) * 6}deg)`
  };

  const hoursStyle = {
    transform: `rotate(${(time.getHours() % 12 + time.getMinutes() / 60) * 30}deg)`
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
