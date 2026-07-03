"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const info = [
  {
    label: "BASED IN",
    value: "Philippines",
  },
  {
    label: "EXPERIENCE",
    value: "4+ Years",
  },
  {
    label: "SPECIALIZATION",
    value: "Software Engineering",
  },
];

const stats = [
  {
    value: "4+",
    label: "Years of Experience",
    highlight: false,
  },
  {
    value: "20+",
    label: "Projects Completed",
    highlight: true,
  },
  {
    value: "20+",
    label: "Happy Clients",
    highlight: false,
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  return (
    <section className="w-full min-h-screen flex items-center bg-[#F5F5F5] dark:bg-[#121212] text-black dark:text-white transition-colors duration-300">
      <div
        className="max-w-screen-xl mx-auto px-8 md:px-16 w-full"
        data-aos="fade-up"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Building Modern{" "}
              <span className="text-black dark:text-white">
                Software
              </span>{" "}
              Solutions.
            </h2>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <div>
              <p className="text-gray-700 dark:text-gray-300">
                I'm a Software Engineer passionate about building scalable, high-performance web and mobile applications that solve real-world business challenges.
              </p>

              <p className="text-gray-600 dark:text-gray-400 mt-2">
                From intuitive user interfaces to scalable backend architectures and AI-powered solutions, I develop software that is secure, efficient, and built to support long-term business growth.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 text-gray-700 dark:text-gray-400 text-sm">
              {info.map((item) => (
                <div key={item.label}>
                  <p className="text-black dark:text-white font-semibold">
                    {item.label}
                  </p>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`p-6 border border-gray-400 dark:border-gray-600 text-center rounded-sm transition-transform hover:scale-105 hover:border-gray-500 dark:hover:border-gray-300 ${
                stat.highlight
                  ? "bg-gray-300 dark:bg-gray-800"
                  : ""
              }`}
            >
              <h3 className="text-4xl font-bold">{stat.value}</h3>

              <p
                className={
                  stat.highlight
                    ? "font-semibold"
                    : "text-gray-700 dark:text-gray-400"
                }
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;