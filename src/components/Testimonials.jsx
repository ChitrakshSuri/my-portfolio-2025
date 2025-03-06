import React from "react";
import { TESTIMONIALS } from "../constants"; // ✅ Ensure the correct import

const Testimonials = () => {
  return (
    <div
      id="testimonial"
      className="container mx-auto mt-20 py-16 tracking-tighter"
    >
      <h2 className="mb-12 text-center text-4xl font-semibold">
        What People Say
      </h2>
      <div className="mx-auto max-w-3xl">
        {TESTIMONIALS.map(
          (
            testimonial,
            index // ✅ Fixed variable name
          ) => (
            <div
              key={index}
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
                <p className="text-gray-400">{testimonial.title}</p>{" "}
                {/* ✅ Fixed Tailwind class */}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Testimonials;
