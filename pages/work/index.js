import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/animations";
import projects from "../../const/projects_data";

import WorkSlider from "../../components/WorkSlider";
import ProjectItem from "../../components/ProjectItem";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import MyModal from "../../components/MyModal";

import { BsArrowRight } from "react-icons/bs";

const Work = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col xl:text-left mb-4 xl:mb-0 justify-center items-center xl:justify-start xl:items-start">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              My Work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 sm:max-w-[400px] mx-auto lg:mx-0"
            >
              Here are some of my recent public projects. I&#39;m always looking
              for new challenges and opportunities to learn something new.
            </motion.p>

            {/* See more */}
            <motion.button
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              onClick={() => setShowModal(true)}
              className="btn hidden rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 sm:flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                See more
              </span>

              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </motion.button>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>

      <Bulb />

      {/* modal */}
      <MyModal show={showModal} onClose={() => setShowModal(false)}>
        {/* List Project */}
        <div className="flex flex-col gap-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              return <ProjectItem key={index} project={project} />;
            })}
          </div>
        </div>
      </MyModal>
    </div>
  );
};

export default Work;
