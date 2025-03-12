"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    id: 1,
    image: "/pictures/web1.png", 
    link: "https://aviate-ph.live/",
  },
  {
    id: 2,
    image: "/pictures/web2.png",
    link: "https://gemmichael.netlify.app/",
  },
  {
    id: 3,
    image: "/pictures/web3.png",
    link: "https://employee-management-dashboard-kappa.vercel.app/",
  },
];

const Portfolio = () => {
    useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: true, 
      });
    }, []);
  return (
    <section className="relative w-full min-h-screen bg-[#F5F5F5] dark:bg-[#121212] transition-colors duration-300  items-center justify-center">
      <div className="relative max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white pt-20" data-aos="flip-left">
          Selected Works
        </h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg" data-aos="flip-left">
          Explore some of my latest projects showcasing my design and development expertise.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6" data-aos="fade-right">
          {projects.map((project) => (
            <Link key={project.id} href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="relative group overflow-hidden border border-gray-400 dark:border-gray-600 bg-gray-100 dark:bg-gray-900 transition-all duration-300 hover:scale-105 hover:border-gray-500 dark:hover:border-gray-300">
                <Image
                  src={project.image}
                  alt="Project Preview"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
