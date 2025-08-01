import profilePic from "../assets/ChitrakshSuriProfile.webp";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilePic}
              alt="Chitraksh Suri"
              className="border border-stone-900 rounded-3xl"
              width={650}
              height={650}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl tracking-tighter lg:text-8xl"
            >
              Chitraksh Suri
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Web Dev × LLM Automation
            </motion.span>
            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tight text-justify"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
  variants={childVariants}
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  download
  className="relative group flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white bg-[#333] rounded-full shadow-lg hover:bg-[#444] transition duration-300"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <svg
    className="w-5 h-5 group-hover:animate-bounce"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4v12m0 0l4-4m-4 4l-4-4M8 16h8"
    ></path>
  </svg>
  Download Resume
</motion.a>


          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
