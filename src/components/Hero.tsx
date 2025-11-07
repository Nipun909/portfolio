"use client";

import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import TypewriterText from "@/components/TypewriterText";
import Skills from "@/components/Skills";
import Emails from "@/components/email";
import Spline from "@splinetool/react-spline";
import AboutMeSection from "@/components/Aboutme";
import Projects from "@/components/projects";
import Footer from "@/components/footer";



const Hero = () => {
  // ✅ Smooth scroll function
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ✅ Hero Section */}
      <section id="home" className="relative w-full min-h-screen overflow-hidden">
        {/* Background Effects */}
        <Spotlight className="fixed inset-0 -z-10 mx-auto" fill="#3b82f6" />

        {/* Brand */}
        <div className="fixed top-3 left-5 sm:left-10">
          <p className="text-lg font-extrabold text-blue-400 tracking-wider select-none animate-glow">
            &lt;Nipun&gt;
          </p>
        </div>

        {/* ✅ Navbar */}
        <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-20 w-[90%] sm:w-auto">
          <ul
            className="flex justify-center gap-4 sm:space-x-8 text-sm sm:text-base text-white font-semibold px-4 sm:px-8 py-2 
              bg-gradient-to-r from-black via-[#0a0f2d] backdrop-blur-md border border-white/10 shadow-lg rounded-full overflow-x-auto no-scrollbar whitespace-nowrap"
          >
            {[
              { name: "Home", id: "home" },
              { name: "About Me", id: "about" },
              { name: "Projects", id: "projects" },
              { name: "Contact Me", id: "contact" },
            ].map((item) => (
              <li
                key={item.name}
                onClick={() => handleScroll(item.id)}
                className="relative group cursor-pointer transition-all duration-300"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
          </ul>
        </nav>

        {/* ✅ Hero Content */}
        <div className="flex items-center justify-start min-h-screen px-8 sm:px-16 lg:px-28 pt-24 md:pt-32">
          <div className="max-w-2xl space-y-6">
            {/* Title */}
            <h3 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Hello, I’m <span className="text-blue-400">Nipun</span>
            </h3>

            {/* Typewriter Text */}
            <div className="text-lg sm:text-xl text-gray-300">
              <TypewriterText />
            </div>

            {/* Description */}
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              Crafting sleek, modern, and user-friendly applications with full-stack
              expertise. I love turning creative ideas into interactive, well-structured
              digital experiences.
            </p>

            {/* Social Icons */}
            <div className="flex justify-start space-x-6 mt-10">
              <a
                href="https://github.com/Nipun909"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <FaGithub size={22} className="text-white" />
              </a>

              {/* Gmail Button */}
              <a
                href="mailto:thilakshana956@gmail.com"
                className="p-3 bg-white rounded-full hover:bg-gray-200 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <SiGmail size={22} className="text-red-600" />
              </a>

              {/* LinkedIn Button */}
              <a
                href="https://linkedin.com/in/nipun-thilakshana-65bbb1313"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 rounded-full hover:bg-blue-500 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <FaLinkedin size={22} className="text-white" />
              </a>
            </div>

            
            
          </div>
        </div>

        {/* ✅ 3D Visual (Spline) */}
        <Spline
          className="absolute hidden md:block lg:top-0 top-[-20%] bottom-0 lg:left-[30%] sm:left-[-2%] h-full"
          scene="https://prod.spline.design/3J7WMakfFIpJxL-N/scene.splinecode"
        />
      </section>
      

      {/* ✅ Other Sections */}
      
      <AboutMeSection />
      <Skills />
      <Projects />
      <Emails />
      <Footer />
    </>
  );
};

export default Hero;
