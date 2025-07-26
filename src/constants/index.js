import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I'm an AI-first developer building smart automation systems, voice/chat agents, and powerful LLM workflows. I work across the stack with React.js, FastAPI, LangChain, Python, n8n, Supabase, and Gemini to craft seamless, real-time, human-like experiences. Whether it's RAG pipelines, voice bots, or automation tools — I bring ideas to life with speed and precision.`;

export const ABOUT_TEXT = `Currently working as an AI Agent Intern at Dreamable, I specialize in building AI-powered workflows, real-time automation systems, and scalable frontend interfaces. With 350+ DSA problems solved, I bring strong problem-solving skills into building practical tools using React, n8n, Firebase, Supabase, LangChain, and Gemini AI.`;

export const EXPERIENCES = [
  {
    year: "June 2025 - Present",
    role: "AI Agent Intern",
    company: "Dreamable Inc. (Remote - San Francisco)",
    description: `Designed and deployed intelligent automation workflows using n8n, integrating Gmail, Airtable, Notion, and REST APIs. Built AI tools like LinkedIn poster, WhatsApp summarizer, RAG chatbot, and multiple voice AI agents using Tavus, LiveKit, Retell AI, and Vapi-style tools. Also developed a voice model testing platform with ElevenLabs, Rime, and Whisper for real-time interaction.`,
    technologies: [
      "LangChain",
      "OpenAI",
      "Supabase",
      "n8n",
      "FastAPI",
      "Python",
      "LiveKit",
      "Gemini AI",
    ],
  },
  {
    year: "Sept 2024 - March 2025",
    role: "Frontend Developer Intern",
    company: "Your Exam Saathi (Remote - Gurgaon)",
    description: `Developed 6+ pixel-perfect web pages with cross-browser compatibility and REST API integration. Improved performance by 30% using React Query and enhanced UI/UX using modern frameworks.`,
    technologies: ["React.js", "REST APIs", "CSS", "React Query"],
  },
];

export const PROJECTS = [
  {
    title: "Real-Time Chat Application",
    image: project1,
    description: "A real-time messaging platform with secure authentication.",
    technologies: ["React.js", "Firebase", "Firestore"],
    liveLink: "https://your-chat-app-link.com",
  },
  {
    title: "Realtime Device Tracker",
    image: project2,
    description: "Track devices in real-time with WebSockets and Leaflet.js.",
    technologies: ["Node.js", "Socket.io", "Leaflet.js", "JavaScript"],
    liveLink: "https://your-tracker-link.com",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description: "A clean and modern portfolio website showcasing my work.",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://chitraksh-suri-portfolio.vercel.app/",
  },
  {
    title: "Customer Management System",
    image: project4,
    description: "A system to manage customers with search and CRUD features.",
    technologies: ["React.js", "Local Storage", "State Management"],
    liveLink: "https://your-cms-link.com",
  },
];

import user1 from "../assets/testimonials/user1.webp";
import user2 from "../assets/testimonials/user2.webp";
import user3 from "../assets/testimonials/user3.webp";
import user4 from "../assets/testimonials/user4.webp";

export const TESTIMONIALS = [
  {
    name: "Saurabh Kumar",
    title: "Senior Backend Engineer at American Express",
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
    name: "Sachin Sharma",
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
