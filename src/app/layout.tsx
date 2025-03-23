import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Services from "./components/Services";
import TechStack from "./components/TechStack";
import { Poppins } from "next/font/google"; 
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import ResponseChat from "./components/ResponseChat";


const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "600", "700"] });

export const metadata = {
  title: "Gem Nieva- Full Stack Developer",
  description: "Helping businesses build high-performance web applications using Next.js, MongoDB, and Tailwind CSS. Available for freelance projects!",
  keywords: "Full-Stack Developer, Next.js, MongoDB, React, AI, SaaS",
  icons: "/favicon.ico",
  openGraph: {
    title: "Gem Michael | Full-Stack Developer",
    description: "Helping businesses build high-performance web applications using Next.js, MongoDB, and Tailwind CSS. Available for freelance projects!",
    url: "https://Gem.com",
    type: "website",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Gem Michael - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gem Michael | Full-Stack Developer",
    description: "Helping businesses build high-performance web applications using Next.js, MongoDB, and Tailwind CSS. Available for freelance projects!",
    images: ["/profile.jpg"],
  },
};


export default function RootLayout({
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} bg-white text-black dark:bg-darkBg dark:text-lightText transition-colors duration-300`}>
        <ThemeProvider>
          <Navbar />
          <main>
            <section id="hero"><Hero /></section>
            <section id="about"><About /></section>
            <section id="services"><Services /></section>
            <section id="techstack"><TechStack /></section>
            <section id="portfolio"><Portfolio /></section>
            <section id="footer"><Footer /></section>
            <ResponseChat />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
