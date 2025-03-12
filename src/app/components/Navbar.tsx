"use client";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/30 dark:bg-black/30 backdrop-blur-lg border-b border-white/10 dark:border-black/10 transition-colors duration-300 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center h-16">
        <div className="text-black dark:text-white text-xl font-extrabold tracking-widest">
          Gem Michael
        </div>
        <div className="hidden md:flex space-x-8">
          {[
            { name: "Home", path: "#hero" },
            { name: "About", path: "#about" },
            { name: "Services", path: "#services" },
            { name: "Portfolio", path: "#portfolio" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-black dark:text-white text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex items-center space-x-6">
          <ThemeToggle />
          <div className="relative">
            <button
              onClick={() => setIsModalOpen(!isModalOpen)}
              className="hidden md:flex px-5 py-2 border border-gray-500 text-black dark:text-white text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition rounded-sm"
            >
              Let’s talk
            </button>
            {isModalOpen && (
              <div className="absolute left-0 mt-2 w-80 bg-white dark:bg-gray-900 shadow-lg rounded-sm p-6 z-50">
                <h2 className="text-lg font-semibold text-black dark:text-white mb-3">
                  Let’s Talk
                </h2>
                <form
                  action="https://formspree.io/f/xgvaenjj"
                  method="POST"
                  className="space-y-3"
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
                  >
                    Send Message
                  </button>
                </form>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="mt-2 w-full text-center text-red-600 font-medium"
                >
                  Close
                </button>
              </div>
            )}
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-black dark:text-white"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white/30 dark:bg-black/30 backdrop-blur-lg border-t border-white/10 dark:border-black/10 transition-colors duration-300 py-4 px-6">
          {[
            { name: "Home", path: "/hero" },
            { name: "About", path: "/about" },
            { name: "Services", path: "/services" },
            { name: "Portfolio", path: "/portfolio" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="block text-black dark:text-white text-sm font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
