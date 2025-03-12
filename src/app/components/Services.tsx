"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <section className="w-full min-h-screen py-16 bg-[#F5F5F5] dark:bg-[#121212] text-black dark:text-white transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto px-8 md:px-16 flex flex-col md:flex-row items-start gap-12">
        <div className="md:w-1/2" data-aos="fade-right">
          <h3 className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">
            What I Offer
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mt-2">
            Crafting Engaging, Scable, <br /> and Seamless Experiences.
          </h2>
        </div>
        <div className="md:w-1/2 flex flex-col gap-6" data-aos="fade-up-left">
          <div className="p-6 border border-gray-400 dark:border-gray-600 transition-transform hover:scale-105 hover:border-gray-500 dark:hover:border-gray-300">
            <h3 className="text-gray-600 dark:text-gray-400 text-sm uppercase">
              01
            </h3>
            <h4 className="text-xl font-semibold mt-2">Web Design</h4>
            <p className="text-gray-700 dark:text-gray-400 mt-2">
              Crafting visually stunning, user-friendly websites tailored to
              your unique brand identity, ensuring lasting impact and
              engagement.
            </p>
          </div>
          <div className="p-6 border border-gray-400 dark:border-gray-600 transition-transform hover:scale-105 hover:border-gray-500 dark:hover:border-gray-300">
            <h3 className="text-gray-600 dark:text-gray-400 text-sm uppercase">
              02
            </h3>
            <h4 className="text-xl font-semibold mt-2">Web Development</h4>
            <p className="text-gray-700 dark:text-gray-400 mt-2">
              Building scalable, high-performance websites using modern
              frameworks, designed for efficiency, security, and ease of
              management, no coding experience needed.
            </p>
          </div>
          <div className="p-6 border border-gray-400 dark:border-gray-600 transition-transform hover:scale-105 hover:border-gray-500 dark:hover:border-gray-300">
            <h3 className="text-gray-600 dark:text-gray-400 text-sm uppercase">
              03
            </h3>
            <h4 className="text-xl font-semibold mt-2">Content</h4>
            <p className="text-gray-700 dark:text-gray-400 mt-2">
              Delivering strategic, high-quality content to enhance your brand
              presence, boost conversions, and drive SEO success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
