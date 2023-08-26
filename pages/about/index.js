import React, { useState } from "react";
import CountUp from "react-countup";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/animations";

// icons
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaWordpress,
  FaLaravel,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiPhp,
  SiVuedotjs,
  SiAngularjs,
  SiMysql,
  SiMariadb,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiFirebase,
  SiLinux,
  SiNginx,
  SiApache,
  SiAmazonaws,
  SiDocker,
  SiJenkins,
  SiCircleci,
  SiCloudflare,
} from "react-icons/si";

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          {
            component: <FaHtml5 />,
            title: "HTML",
          },
          {
            component: <FaCss3 />,
            title: "CSS",
          },
          {
            component: <FaNodeJs />,
            title: "NodeJS",
          },
          {
            component: <SiPhp />,
            title: "PHP",
          },
          {
            component: <FaReact />,
            title: "ReactJS",
          },
          {
            component: <SiVuedotjs />,
            title: "NuxtJS/VueJS",
          },
          {
            component: <SiAngularjs />,
            title: "AngularJS",
          },
          {
            component: <FaWordpress />,
            title: "Wordpress",
          },
          {
            component: <FaLaravel />,
            title: "Laravel",
          },
        ],
      },
      {
        title: "Database Management",
        icons: [
          {
            component: <SiMysql />,
            title: "MySQL",
          },
          {
            component: <SiMariadb />,
            title: "MariaDB",
          },
          {
            component: <SiPostgresql />,
            title: "PostgreSQL",
          },
          {
            component: <SiMongodb />,
            title: "MongoDB",
          },
          {
            component: <SiRedis />,
            title: "Redis",
          },
          {
            component: <SiFirebase />,
            title: "Firebase",
          },
        ],
      },
      {
        title: "System Administration & DevOps",
        icons: [
          {
            component: <SiLinux />,
            title: "Linux",
          },
          {
            component: <SiNginx />,
            title: "Nginx",
          },
          {
            component: <SiApache />,
            title: "Apache",
          },
          {
            component: <SiAmazonaws />,
            title: "AWS",
          },
          {
            component: <SiDocker />,
            title: "Docker",
          },
          {
            component: <SiJenkins />,
            title: "Jenkins",
          },
          {
            component: <SiCircleci />,
            title: "CircleCI",
          },
          {
            component: <SiCloudflare />,
            title: "Cloudflare",
          },
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Web Developer & Linux System Administrator - Hachinet Software",
        stage: "2022 - now",
      },
      {
        title: "Web Developer - FPT Telecom",
        stage: "2021 - 2022",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Software Engineering - BKACAD Academy",
        stage: "2019 - 2022",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col h-fit md:h-[480px]">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mb-0"
          >
            I&#39;m a klpod221 <span className="text-accent">.</span>
          </motion.h2>

          <motion.h3
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="font-semibold text-xl md:text-3xl xl:text-4xl mb-5"
          >
            <Typewriter
              options={{
                strings: [
                  "Full-Stack Developer",
                  "Linux System Administrator",
                  "DevOps Engineer",
                ],
                autoStart: true,
                loop: true,
                wrapperClassName: "text-accent bg-white/50 rounded px-1",
              }}
            />
          </motion.h3>

          <motion.p
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-10"
          >
            I can help you build your product from scratch or develop your
            existing product further, build and manage Linux web servers, and
            automate your development process.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.8)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  years of experience
                </div>
              </div>

              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={50} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  happy clients
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={90} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  projects completed
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-full after:bg-accent"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 hover:text-accent hover:after:w-full hover:after:bg-accent hover:after:transition-all hover:after:duration-300`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col max-w-max gap-x-2 text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2">{item.title}</div>

                  {/* stage */}
                  <div>{item.stage}</div>

                  {/* icons */}
                  <div className="flex gap-4 flex-wrap justify-center sm:justify-start mb-4">
                    {item.icons &&
                      item.icons.map((icon, iconIndex) => {
                        return (
                          <div
                            className="text-2xl text-white"
                            title={icon.title}
                            key={iconIndex}
                          >
                            {icon.component}
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
