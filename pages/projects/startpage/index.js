import Head from "next/head";

import RandomBackground from "../../../components/RandomBackground";

import AnalogueClock from "../../../components/startpage/AnalogueClock";
import QuickLinks from "../../../components/startpage/QuickLinks";
import Weather from "../../../components/startpage/Weather";

const StartPage = () => {
  return (
    <>
      <Head>
        <title>Start Page | klpod221</title>
      </Head>
      <RandomBackground>
        <div className="container mx-auto relative h-full">
          <div className="flex flex-col items-center justify-center h-full">
            {/* analogue clock */}
            <AnalogueClock />

            {/* quick link */}
            <QuickLinks />
          </div>

          <div className="absolute left-2 bottom-16 xl:bottom-2">
            {/* weather */}
            <Weather />
          </div>
        </div>
      </RandomBackground>
    </>
  );
};

export default StartPage;
