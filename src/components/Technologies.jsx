import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { BiChip } from "react-icons/bi"; // for AI/LLM tools (fallback)
import n8nLogo from "../assets/tech/n8n.svg";
import langchainLogo from "../assets/tech/langchain.svg";
import fastapiLogo from "../assets/tech/fastapi.svg";
import supabaseLogo from "../assets/tech/supabase.svg";
import openaiLogo from "../assets/tech/openai.svg";
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
  // const techStack = [
  //   {
  //     icon: <RiReactjsLine className="text-7xl text-cyan-400" />,
  //     name: "React.js",
  //     duration: 2.5, // Custom duration for each icon
  //   },
  //   {
  //     icon: <SiTailwindcss className="text-7xl text-blue-400" />,
  //     name: "Tailwind CSS",
  //     duration: 3,
  //   },
  //   {
  //     icon: <SiJavascript className="text-7xl text-yellow-500" />,
  //     name: "JavaScript",
  //     duration: 5,
  //   },
  //   {
  //     icon: <SiFirebase className="text-7xl text-yellow-400" />,
  //     name: "Firebase",
  //     duration: 2,
  //   },
  //   {
  //     icon: <SiFramer className="text-7xl text-pink-500" />,
  //     name: "Framer Motion",
  //     duration: 6,
  //   },
  //   {
  //     icon: <FaGithub className="text-7xl text-gray-800" />,
  //     name: "GitHub",
  //     duration: 4,
  //   },
  // ];
  const techStack = [
  // Row 1: Frontend core
  {
    icon: <RiReactjsLine className="text-7xl text-cyan-400" />,
    name: "React.js",
    duration: 2.5,
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
    icon: <SiFramer className="text-7xl text-pink-500" />,
    name: "Framer Motion",
    duration: 2.7,
  },
  {
    icon: <FaGithub className="text-7xl text-gray-800" />,
    name: "GitHub",
    duration: 4,
  },
  {
    icon: <FaGitAlt className="text-7xl text-red-500" />,
    name: "Git",
    duration: 3.2,
  },
  {
    icon: <FaDocker className="text-7xl text-blue-500" />,
    name: "Docker",
    duration: 4.2,
  },

  // Row 2: Backend + automation + AI
  {
    icon: <FaPython className="text-7xl text-yellow-300" />,
    name: "Python",
    duration: 3,
  },
  {
    icon: <SiFirebase className="text-7xl text-yellow-400" />,
    name: "Firebase",
    duration: 2,
  },
  {
    icon: <SiSocketdotio className="text-7xl text-gray-500" />,
    name: "Socket.io",
    duration: 4,
  },
  {
    icon: <SiLeaflet className="text-7xl text-green-600" />,
    name: "Leaflet.js",
    duration: 4.5,
  },
  {
    icon: <SiCplusplus className="text-7xl text-blue-700" />,
    name: "C++",
    duration: 2.5,
  },
  {
    icon: <SiJenkins className="text-7xl text-red-600" />,
    name: "Jenkins",
    duration: 5,
  },
  {
    icon: <FaNodeJs className="text-7xl text-green-500" />,
    name: "Node.js",
    duration: 3.3,
  },
  {
    icon: <SiTypescript className="text-7xl text-blue-600" />,
    name: "TypeScript",
    duration: 3.7,
  },
  {
    icon: <img src={n8nLogo} alt="n8n" className="w-16 h-16 invert" />,
    name: "n8n",
    duration: 3.2,
  },
  {
    icon: <img src={langchainLogo} alt="LangChain" className="w-16 h-16 invert" />,
    name: "LangChain",
    duration: 3.4,
  },
  {
    icon: <img src={fastapiLogo} alt="FastAPI" className="w-16 h-16 invert" />,
    name: "FastAPI",
    duration: 3,
  },
  {
    icon: <img src={supabaseLogo} alt="Supabase" className="w-16 h-16 invert" />,
    name: "Supabase",
    duration: 3,
  },
  {
    icon: <img src={openaiLogo} alt="OpenAI" className="w-16 h-16 invert" />,
    name: "OpenAI",
    duration: 3,
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
