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
import ChatGemini from "./components/ChatGemini";


const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "600", "700"] });

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
            <ChatGemini />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
