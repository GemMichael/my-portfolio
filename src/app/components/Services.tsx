"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    id: "01",
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies, optimized for performance, security, and scalability.",
  },
  {
    id: "02",
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications for Android and iOS with seamless user experiences and reliable backend integration.",
  },
  {
    id: "03",
    title: "Business Automation",
    description:
      "Automating business processes through custom software solutions, dashboards, appointment systems, inventory management, and workflow optimization.",
  },
  {
    id: "04",
    title: "AI Solutions",
    description:
      "Integrating AI-powered features such as chatbots, intelligent search, document processing, and workflow automation to improve productivity and customer experience.",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  return (
    <section className="w-full min-h-screen py-16 bg-[#F5F5F5] dark:bg-[#121212] text-black dark:text-white transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto px-8 md:px-16 flex flex-col md:flex-row items-start gap-12">
        <div className="md:w-1/2" data-aos="fade-right">
          <h3 className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">
            What I Offer
          </h3>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight mt-2">
            Crafting Innovative, Scalable,
            <br />
            and Seamless Digital Solutions.
          </h2>
        </div>

        <div className="md:w-1/2 flex flex-col gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="p-6 border border-gray-400 dark:border-gray-600 transition-transform duration-300 hover:scale-105 hover:border-gray-500 dark:hover:border-gray-300"
            >
              <h3 className="text-gray-600 dark:text-gray-400 text-sm uppercase">
                {service.id}
              </h3>

              <h4 className="text-xl font-semibold mt-2">
                {service.title}
              </h4>

              <p className="text-gray-700 dark:text-gray-400 mt-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;