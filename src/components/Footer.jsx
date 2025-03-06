import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="mt-20 bg-gray-900 py-6 text-center text-gray-400">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4">
        {/* Social Media Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/chitrakshsuri"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl hover:text-white transition" />
          </a>
          <a
            href="https://linkedin.com/in/chitrakshsuri"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl hover:text-white transition" />
          </a>
          <a
            href="https://twitter.com/chitrakshsuri"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-2xl hover:text-white transition" />
          </a>
        </div>

        {/* Navigation Links */}
        {/* <div className="space-x-6 text-sm">
          <a href="#home" className="hover:text-white transition">
            Home
          </a>
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div> */}

        {/* Contact Information */}
        <p className="text-sm">
          Email:{" "}
          <a
            href="mailto:chitrakshsuri2005@gmail.com"
            className="text-blue-400 hover:underline"
          >
            chitrakshsuri2005@gmail.com
          </a>
        </p>

        {/* Footer Text */}
        <p className="text-xs">
          Built with React.js, Tailwind CSS & Framer Motion
        </p>

        {/* Copyright */}
        <p className="text-xs">
          © {new Date().getFullYear()} Chitraksh Suri. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
