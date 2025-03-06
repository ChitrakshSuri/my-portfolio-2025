import React from "react";
import { 
  RiReactjsLine 
} from "react-icons/ri";
import { 
  SiTailwindcss, SiFirebase, SiFramer, SiJenkins, SiCplusplus, 
  SiJavascript, SiSocketdotio, SiLeaflet, SiBootstrap 
} from "react-icons/si";
import { 
  FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaDocker, FaPython 
} from "react-icons/fa";

const Technologies = () => {
  const techStack = [
    { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, name: "React.js" },
    { icon: <SiTailwindcss className="text-7xl text-blue-400" />, name: "Tailwind CSS" },
    { icon: <SiJavascript className="text-7xl text-yellow-500" />, name: "JavaScript" },
    { icon: <SiFirebase className="text-7xl text-yellow-400" />, name: "Firebase" },
    { icon: <SiFramer className="text-7xl text-pink-500" />, name: "Framer Motion" },
    { icon: <FaGithub className="text-7xl text-gray-800" />, name: "GitHub" },
  ];

  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl font-bold">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {techStack.map((tech, index) => (
          <div key={index} className="flex flex-col items-center">
            {tech.icon}
            <span className="mt-2 text-lg">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
