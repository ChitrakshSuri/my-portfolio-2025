import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const formVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const inputVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(formData.email))
      errors.email = "Invalid email format";
    if (!formData.message.trim()) errors.message = "Message is required";
    else if (formData.message.length < 10)
      errors.message = "Message should be at least 10 characters long";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSending(true);

    emailjs
      .sendForm("service_fk21efm", "template_6elkfo8", formRef.current, "7R3Qp7A_FYUBr0JST")
      .then((response) => {
        console.log("SUCCESS", response.status, response.text);
        toast.success("Message sent Successfully ✅");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error.text || error.message || error);
        toast.error("Failed to send message. Please try again ❌");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <motion.div 
      className="mx-auto max-w-3xl p-4" 
      id="contact"
      initial="hidden"
      animate="visible"
      variants={formVariants}
    >
      <Toaster />
      <motion.h2 
        className="my-8 text-center text-4xl font-semibold tracking-tighter"
        variants={inputVariants}
      >
        Let's Connect
      </motion.h2>
      <motion.form ref={formRef} onSubmit={handleSubmit} variants={formVariants}>
        <motion.div className="mb-4" variants={inputVariants}>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleChange}
            className="mb-8 w-full rounded-lg border border-green-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
          />
          {errors.name && <p className="text-sm text-pink-700">{errors.name}</p>}
        </motion.div>
        <motion.div className="mb-4" variants={inputVariants}>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
            className="mb-8 w-full rounded-lg border border-green-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
          />
          {errors.email && <p className="text-sm text-pink-700">{errors.email}</p>}
        </motion.div>
        <motion.div className="mb-4" variants={inputVariants}>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder="Message"
            onChange={handleChange}
            className="mb-8 w-full rounded-lg border border-green-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
            rows="4"
          />
          {errors.message && <p className="text-sm text-pink-700">{errors.message}</p>}
        </motion.div>
        <motion.button
          type="submit"
          className={`mb-8 w-full rounded bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600 transition ${
            isSending ? "cursor-not-allowed opacity-60" : ""
          }`}
          disabled={isSending}
          whileHover={{ scale: 1.05 }} // ✅ Hover effect
          whileTap={{ scale: 0.95 }} // ✅ Tap effect
          variants={inputVariants} // ✅ Apply fade-in animation
        >
          {isSending ? "Sending..." : "Send"}
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default ContactForm;
