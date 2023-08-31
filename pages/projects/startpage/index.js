import Head from "next/head";

import RandomBackground from "../../../components/RandomBackground";

import AnalogueClock from "../../../components/startpage/AnalogueClock";
import QuickLinks from "../../../components/startpage/QuickLinks";
import Weather from "../../../components/startpage/Weather";

import {
  RiFacebookLine,
  RiYoutubeLine,
  RiGithubLine,
  RiGitlabLine,
} from "react-icons/ri";

const quickLinks = [
  {
    name: "Facebook",
    url: "https://facebook.com/",
    icon: <RiFacebookLine />,
  },
  {
    name: "Youtube",
    url: "https://youtube.com/",
    icon: <RiYoutubeLine />,
  },
  {
    name: "Github",
    url: "https://github.com/klpod221",
    icon: <RiGithubLine />,
  },
  {
    name: "Gitlab",
    url: "https://git.hachinet.com/",
    icon: <RiGitlabLine />,
  },
];

const StartPage = () => {
  return (
    <>
      <Head>
        <title>Start Page | klpod221</title>
      </Head>
      <RandomBackground>
        <div className="container mx-auto relative h-screen">
          <div className="flex flex-col items-center justify-center h-full">
            {/* analogue clock */}
            <AnalogueClock />

            {/* quick link */}
            <QuickLinks />
          </div>

          <div className="absolute bottom-16 left-2">
            {/* weather */}
            <Weather />
          </div>
        </div>
      </RandomBackground>
    </>
  );
};

export default StartPage;
