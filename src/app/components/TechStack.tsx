"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const technologies = [
  { name: "JavaScript", src: "/pictures/js.png" },
  { name: "TypeScript", src: "/pictures/typescript.png" },
  { name: "React", src: "/pictures/react.png" },
  { name: "Next.js", src: "/pictures/next.png" },
  { name: "Vue", src: "/pictures/vue.png" },
  { name: "Vite", src: "/pictures/vite.png" },
  { name: "Tailwind", src: "/pictures/tailwind.png" },
  { name: "Mongo", src: "/pictures/mongo.png" },
  { name: "Mysql", src: "/pictures/mysql.png" },
  { name: "Laravel", src: "/pictures/laravel.png" },
  { name: "Aws", src: "/pictures/aws.png" },
  { name: "Express", src: "/pictures/express.png" },
  { name: "Git", src: "/pictures/git.png" },
  { name: "Node.js", src: "/pictures/node.png" },
  { name: "Firebase", src: "/pictures/firebase.png" },
  { name: "Rest", src: "/pictures/rest.png" },
];

const TechStack = () => {
    useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: true, 
      });
    }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#F5F5F5] dark:bg-[#121212] transition-colors duration-300  items-center justify-center">
      <div className="relative max-w-5xl mx-auto px-6 text-center h-full flex flex-col justify-center" data-aos="zoom-in-up">
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white sm:mt-20">
          Technology Stacks
        </h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg">
          Here are some of the tools and technologies I use to turn client expectations into reality.
        </p>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 border border-gray-400 dark:border-gray-600 bg-gray-100 dark:bg-gray-900 transition-transform hover:scale-105 hover:border-gray-500 dark:hover:border-gray-300 rounded-sm"
            >
              <Image 
                src={tech.src} 
                alt={tech.name} 
                width={60} 
                height={60} 
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
