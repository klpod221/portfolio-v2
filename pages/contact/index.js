import { motion } from "framer-motion";
import { fadeIn } from "../../utils/animations";

import { BsArrowRight } from "react-icons/bs";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <Circles />

      <div className="container mx-auto py-32 text-center flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          {/* title */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center"
          >
            Let&#39;s <span className="text-accent">connect.</span>
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center mb-4"
          >
            Contact me if you want to work together or just want to say hi.
          </motion.p>

          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-6 w-full">
              <input type="text" placeholder="Name" className="input" />
              <input type="email" placeholder="Email" className="input" />
            </div>

            <input type="text" placeholder="Subject" className="input" />

            <textarea placeholder="Message" className="textarea" />

            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&#39;s talk
              </span>

              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>

      <Bulb />
    </div>
  );
};

export default Contact;
