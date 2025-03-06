import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiTailwindcss,
  SiFirebase,
  SiFramer,
  SiJenkins,
  SiCplusplus,
  SiJavascript,
  SiSocketdotio,
  SiLeaflet,
  SiBootstrap,
} from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaPython,
} from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const techStack = [
    {
      icon: <RiReactjsLine className="text-7xl text-cyan-400" />,
      name: "React.js",
      duration: 2.5, // Custom duration for each icon
    },
    {
      icon: <SiTailwindcss className="text-7xl text-blue-400" />,
      name: "Tailwind CSS",
      duration: 3,
    },
    {
      icon: <SiJavascript className="text-7xl text-yellow-500" />,
      name: "JavaScript",
      duration: 5,
    },
    {
      icon: <SiFirebase className="text-7xl text-yellow-400" />,
      name: "Firebase",
      duration: 2,
    },
    {
      icon: <SiFramer className="text-7xl text-pink-500" />,
      name: "Framer Motion",
      duration: 6,
    },
    {
      icon: <FaGithub className="text-7xl text-gray-800" />,
      name: "GitHub",
      duration: 4,
    },
  ];

  return (
    <div className="pb-24">
      {/* Title with Animation */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-bold"
      >
        Technologies
      </motion.h2>

      {/* Tech Stack Items */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        {techStack.map((tech, index) => (
          <div key={index} className="flex flex-col items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(tech.duration)}
            >
              {tech.icon}
            </motion.div>
            <span className="mt-2 text-lg">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
