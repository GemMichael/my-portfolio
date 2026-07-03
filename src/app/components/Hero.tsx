"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleDownloadCV = () => {
    const cvUrl = "/Gem.pdf";
    window.open(cvUrl, "_blank");
  };
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-[#F5F5F5] dark:bg-[#121212] transition-colors duration-300">
      <div className="relative w-full max-w-screen-xl mx-auto px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6 mt-4 sm:mt-10 md:mt-0">
        <div
          className="w-full md:w-1/2 text-black dark:text-white z-10"
          data-aos="fade-down-right"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Software{" "}
            <span className="relative">
              <span className="inline-block relative">
                Engineer
                <span className="absolute left-0 bottom-0 h-[3px] w-full bg-green-500 opacity-90 blur-sm"></span>
              </span>
            </span>
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Building Scalable Web, Mobile & AI Solutions
          </h2>

          <div className="flex gap-4 mt-5 text-gray-600 dark:text-gray-400 uppercase text-sm font-semibold tracking-wide">
            <span>Web</span> <span>•</span> <span>Mobile</span>{" "}
            <span>•</span> <span>AI</span>
          </div>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Hi, I'm{" "}
            <span className="font-bold text-black dark:text-white">
              Gem Michael
            </span>
            , a{" "}
            <span className="font-bold text-black dark:text-white">
              Software Engineer
            </span>{" "}
            specializing in{" "}
            <span className="font-bold text-black dark:text-white">
              full-stack web and mobile development
            </span>
            . I build modern, scalable applications using{" "}
            <span className="font-bold text-black dark:text-white">
              React, Next.js, React Native, TypeScript, Node.js, and cloud technologies
            </span>
            . I'm continuously expanding my expertise in{" "}
            <span className="font-bold text-black dark:text-white">
              AI, automation, and SaaS
            </span>{" "}
            to create software solutions that help businesses innovate and grow.
          </p>
          <button
            onClick={handleDownloadCV}
            className="mt-6 bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-sm text-lg font-semibold shadow-md hover:bg-gray-800 dark:hover:bg-gray-200 transition"
          >
            Learn More
          </button>
        </div>
        <div
          className="hidden lg:block w-full lg:w-[397px] relative"
          data-aos="zoom-in-up"
        >
          <img
            className="ml-auto w-full lg:h-[483px] object-cover relative rounded-sm"
            src="/pictures/profile.jpg"
            alt="Profile"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
