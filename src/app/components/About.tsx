"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <section className="w-full min-h-screen flex items-center bg-[#F5F5F5] dark:bg-[#121212] text-black dark:text-white transition-colors duration-300">
      <div
        className="max-w-screen-xl mx-auto px-8 md:px-16 w-full"
        data-aos="fade-up"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Leading{" "}
              <span className="text-black dark:text-white">
                Web Development
              </span>{" "}
              and Design.
            </h2>
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-gray-700 dark:text-gray-300">
                A skilled Full Stack Developer committed to building
                high-performance, scalable web applications.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Specialize in creating intuitive user interfaces and efficient
                back-end systems that power seamless experiences.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 text-gray-700 dark:text-gray-400 text-sm">
              <div>
                <p className="text-black dark:text-white font-semibold">
                  BASED IN
                </p>
                <p>Philippines</p>
              </div>
              <div>
                <p className="text-black dark:text-white font-semibold">
                  EXPERIENCE
                </p>
                <p>2+ years</p>
              </div>
              <div>
                <p className="text-black dark:text-white font-semibold">
                  SPECIALIZATION
                </p>
                <p>Development</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-12">
          <div className="p-6 border border-gray-400 dark:border-gray-600 text-center rounded-sm">
            <h3 className="text-4xl font-bold">2+</h3>
            <p className="text-gray-700 dark:text-gray-400">
              Years of Experience
            </p>
          </div>
          <div className="p-6 border border-gray-400 dark:border-gray-600 text-center bg-gray-300 dark:bg-gray-800 text-black dark:text-white transition-transform hover:scale-105 hover:border-gray-500 dark:hover:border-gray-300 rounded-sm">
            <h3 className="text-4xl font-bold">10+</h3>
            <p className="font-semibold">Projects Completed</p>
          </div>
          <div className="p-6 border border-gray-400 dark:border-gray-600 text-center rounded-sm">
            <h3 className="text-4xl font-bold">10+</h3>
            <p className="text-gray-700 dark:text-gray-400">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
