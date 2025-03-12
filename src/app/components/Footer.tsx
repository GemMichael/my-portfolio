"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full  bg-[#F5F5F5] dark:bg-[#121212] text-black dark:text-white py-8 transition-colors duration-300 ">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold">Gem Michael M. Nieva</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Full Stack Developer
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              {[
            { name: "Home", path: "#hero" },
            { name: "About", path: "#about" },
            { name: "Services", path: "#services" },
            { name: "Portfolio", path: "#portfolio" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Connect With Me</h3>
            <div className="mt-2 flex space-x-4">
              <Link
                href="https://github.com/GemMichael"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-6 h-6 text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/gem-michael-nieva/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-6 h-6 text-gray-700 dark:text-gray-400 hover:text-blue-500 transition" />
              </Link>
              <Link
                href="https://www.facebook.com/gemmichael.nieva"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="w-6 h-6 text-gray-700 dark:text-gray-400 hover:text-blue-400 transition" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-300 dark:border-gray-700 pt-4 text-center text-gray-600 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Gem Michael. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
