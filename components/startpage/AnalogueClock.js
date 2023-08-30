import { useState, useEffect } from "react";

const AnalogueClock = () => {
  const [hoursStyle, setHoursStyle] = useState({});
  const [minutesStyle, setMinutesStyle] = useState({});
  const [secondsStyle, setSecondsStyle] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date();
      const hours = time.getHours();
      const minutes = time.getMinutes();
      const seconds = time.getSeconds();

      const hoursDegreesCalc = hours * 30 + minutes * 0.5;
      const minutesDegreesCalc = minutes * 6 + seconds * 0.1;
      const secondsDegreesCalc = seconds * 6;

      setHoursStyle({ transform: `rotate(${hoursDegreesCalc}deg)` });
      setMinutesStyle({ transform: `rotate(${minutesDegreesCalc}deg)` });
      setSecondsStyle({ transform: `rotate(${secondsDegreesCalc}deg)` });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
