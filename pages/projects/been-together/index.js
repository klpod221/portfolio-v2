import { useState, useEffect } from "react";
import Head from "next/head";

import FullBackground from "../../../components/FullBackground";

const BeenTogether = () => {
  const [time, setTime] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const start = new Date("2019-09-27T00:00:00");
      const diff = now.getTime() - start.getTime();

      const isLeapYear = (year) => {
        return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
      };

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

      let leapYears = 0;

      for (let i = 0; i < years; i++) {
        if (isLeapYear(start.getFullYear() + i + 1)) {
          leapYears++;
        }
      }

      const months = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * (365 / 12))
      );

      const days = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * (365 / 12))) / (1000 * 60 * 60 * 24) + leapYears
      );

      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTime({
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Start Page | klpod221</title>
      </Head>
      <FullBackground>
        <div className="container mx-auto relative h-full">
          <div className="flex flex-col items-center justify-center h-full">
            {/* analog clock */}
            <div>
              {/* show 3Y 11M 12D */}
              <div className="flex items-center justify-center">
                <div className="text-9xl text-center font-bold text-white">
                  <span>{time && time.years + "Y"}</span>
                  <span>{time && time.months + "M"}</span>
                  <span>{time && time.days + "D"}</span>
                  <br />
                  <span className="text-6xl">{time && time.hours + "H"}</span>
                  <span className="text-6xl">{time && time.minutes + "M"}</span>
                  <span className="text-6xl">{time && time.seconds + "S"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FullBackground>
    </>
  );
};

export default BeenTogether;
