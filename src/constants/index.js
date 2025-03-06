import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a frontend developer skilled in React.js, Firebase Firestore, and REST APIs, with experience in state management, API integration, and UI/UX optimization. I build scalable, high-performance applications using Tailwind CSS, Framer Motion, and modern frameworks. Having developed real-time apps like chat platforms and device trackers, I excel at user-centric experiences. With 350+ DSA problems solved, I write efficient, optimized code and love to learn and innovate.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Sept 2024 - Present",
    role: "Frontend Developer Intern",
    company: "Your Exam Saathi (Remote)",
    description: `Developed 6+ pixel-perfect web pages with a 100% design match and cross-browser compatibility. Integrated RESTful APIs for efficient data retrieval, improving load speed by 30%. Optimized API performance with React Query, reducing redundant calls via caching and state management. Enhanced UI/UX and page load speed by leveraging modern frameworks, reducing load times by 25%.`,
    technologies: ["React.js", "REST APIs", "CSS", "React Query"],
  },
];

export const PROJECTS = [
  {
    title: "Real-Time Chat Application",
    image: project1,
    description:
      "A real-time messaging platform built with React.js and Firebase, enabling instant communication with features like secure authentication and media sharing.",
    technologies: ["React.js", "Firebase", "Firestore"],
  },
  {
    title: "Realtime Device Tracker",
    image: project2,
    description:
      "A real-time tracking application using WebSockets to dynamically update device locations on an interactive map, ensuring high accuracy and performance.",
    technologies: ["Node.js", "Socket.io", "Leaflet.js", "JavaScript"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and achievements, designed with a clean UI and smooth animations for a modern look.",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Customer Management System",
    image: project4,
    description:
      "A customer management system developed in React.js, allowing CRUD operations, search functionality, and navigation for efficient data management.",
    technologies: ["React.js", "Local Storage", "State Management"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
