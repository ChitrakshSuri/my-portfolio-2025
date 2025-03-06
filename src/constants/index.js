import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a frontend developer skilled in React.js, Firebase Firestore, and REST APIs, with experience in state management, API integration, and UI/UX optimization. I build scalable, high-performance applications using Tailwind CSS, Framer Motion, and modern frameworks. Having developed real-time apps like chat platforms and device trackers, I excel at user-centric experiences. With 350+ DSA problems solved, I write efficient, optimized code and love to learn and innovate.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
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
