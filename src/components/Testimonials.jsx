import React from "react";
import { TESTIMONIALS } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4, // ✅ Slower appearance for smooth effect
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 }, // ✅ Increased `y` for better effect
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }, // ✅ Slower and smoother
  },
};

const Testimonials = () => {
  return (
    <div
      id="testimonial"
      className="container mx-auto mt-20 py-16 tracking-tighter"
    >
      <h2 className="mb-12 text-center text-4xl font-semibold">
        What People Say
      </h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: false, amount: 0.3 }} // ✅ Ensures smooth scrolling appearance
        className="mx-auto max-w-3xl"
      >
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.div
            variants={itemVariants}
            key={index}
            whileHover={{ scale: 1.05 }} // ✅ Smooth hover effect
            whileTap={{ scale: 0.95 }}
            className="mx-4 mb-8 flex flex-col items-center rounded-lg border border-dotted border-gray-600 p-6 md:flex-row"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="mb-4 mr-6 h-16 w-16 rounded-full md:mb-0"
            />
            <div>
              <p className="mb-4 italic">"{testimonial.quote}"</p>
              <p className="font-bold">{testimonial.name}</p>
              <p className="text-gray-400">{testimonial.title}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;
