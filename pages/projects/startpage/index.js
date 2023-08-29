import Link from "next/link";
import Head from "next/head";
import AnalogueClock from "../../../components/startpage/AnalogueClock";
import RandomBackground from "../../../components/RandomBackground";

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
        <div className="flex flex-col items-center justify-center h-screen">
          {/* analogue clock */}
          <AnalogueClock />

          {/* quick link */}
          <div className="flex items-center gap-x-10 text-3xl mt-6">
            {quickLinks.map((link, index) => {
              return (
                <Link
                  href={link.url}
                  key={index}
                  className="text-white hover:text-accent transition-all duration-300 shadow-md rounded-full"
                  title={link.name}
                  target="_blank"
                >
                  {link.icon}
                </Link>
              );
            })}
          </div>
        </div>
      </RandomBackground>
    </>
  );
};

export default StartPage;
