"use client";
import React from "react";

const AboutMeSection = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen  text-white flex items-center justify-center px-6 sm:px-10 py-20"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        {/* Left Side - Gradient Title */}
        <div className="md:col-span-4 text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-6xl sm:text-7xl font-extrabold leading-tight bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent">
            ABOUT
          </h2>
          <h2 className="text-6xl sm:text-7xl font-extrabold leading-tight bg-gradient-to-r from-blue-500 to- to-blue-900 bg-clip-text text-transparent">
            ME
          </h2>
        </div>

        {/* Divider Line */}
        <div className="hidden md:block w-[1px] h-72 bg-gray-600 mx-auto"></div>

        {/* Right Side - Description */}
        <div className="md:col-span-7">
          <p className="text-gray-400 text-lg sm:text-xl leading-relaxed font-light">
            Hi, I’m <span className="font-medium text-white">Nipun Thilakshana</span>, 
            an undergraduate at the <span className="font-medium text-white">University of Colombo</span> 
             ,pursuing a degree in <span className="font-medium text-white">Information and Communication Technology (Hons)</span>. 
            I’m passionate about blending creativity with technology to design and develop intuitive digital experiences 
            that not only look great but also work seamlessly.
          </p>

          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed font-light mt-6">
            My interests span across <span className="font-medium text-white">UI/UX design</span>, 
            <span className="font-medium text-white"> full-stack development</span>, and 
            <span className="font-medium text-white"> mobile app development</span>. 
            I love exploring new technologies, experimenting with innovative design concepts, 
            and crafting solutions that combine functionality with a clean, modern aesthetic.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
