import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a frontend developer skilled in React.js, Firebase Firestore, and REST APIs, with experience in state management, API integration, and UI/UX optimization. I build scalable, high-performance applications using Tailwind CSS, Framer Motion, and modern frameworks. Having developed real-time apps like chat platforms and device trackers, I excel at user-centric experiences. With 350+ DSA problems solved, I write efficient, optimized code and love to learn and innovate.`;

export const ABOUT_TEXT = `I am a frontend developer skilled in React.js, Firebase Firestore, and REST APIs. With 350+ DSA problems solved, I excel in problem-solving and building scalable web applications. Experienced in Tailwind CSS and Framer Motion, I create seamless UI/UX. Passionate about learning and contributing to open-source, I aim to develop high-performance, user-centric applications.`;

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

import user1 from "../assets/testimonials/user1.webp";
import user2 from "../assets/testimonials/user2.webp";
import user3 from "../assets/testimonials/user3.webp";
import user4 from "../assets/testimonials/user4.webp";

export const TESTIMONIALS = [
  {
    name: "Aman Gupta",
    title: "Senior Frontend Engineer at Google",
    image: user1,
    quote:
      "Chitraksh has an incredible eye for design and functionality. His expertise in React.js and Tailwind CSS is evident in the seamless, high-performance applications he builds.",
  },
  {
    name: "Priya Sharma",
    title: "Software Developer at Microsoft",
    image: user2,
    quote:
      "Working with Chitraksh on a real-time chat application was an absolute pleasure. His problem-solving skills and deep understanding of Firebase made development smooth and efficient.",
  },
  {
    name: "Rahul Verma",
    title: "CTO at Your Exam Saathi",
    image: user3,
    quote:
      "Chitraksh played a crucial role in optimizing our platform's performance. His ability to integrate REST APIs and implement caching solutions greatly improved our system's efficiency.",
  },
  {
    name: "Sneha Kapoor",
    title: "Full Stack Developer at Amazon",
    image: user4,
    quote:
      "Chitraksh’s passion for front-end development is inspiring. His expertise in Framer Motion and state management allows him to create visually appealing, user-friendly interfaces.",
  },
];

export const CONTACT = {
  address: "Noida, India",
  phoneNo: "+91 6230020604",
  email: "chitrakshsuri2005@gmail.com",
};
