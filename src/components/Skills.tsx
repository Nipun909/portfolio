"use client";

import React from "react";
import { VscVscodeInsiders } from "react-icons/vsc";
import {
  FaReact,
  FaLaravel,
  FaNodeJs,
  FaJava,
  FaFigma,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiFlutter,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiMysql,
  //TbBrandVscode,
} from "react-icons/si";

export default function Skills() {
  const skillIcons = [
    { icon: <FaReact className="text-cyan-400" />, name: "React.js" },
    { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
    { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind CSS" },
    { icon: <FaLaravel className="text-red-500" />, name: "Laravel" },
    { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
    { icon: <SiMysql className="text-blue-400" />, name: "MySQL" },
    { icon: <SiFirebase className="text-yellow-400" />, name: "Firebase" },
    { icon: <SiFlutter className="text-sky-400" />, name: "Flutter" },
    { icon: <FaJava className="text-orange-500" />, name: "Java" },
    { icon: <FaFigma className="text-pink-500" />, name: "Figma" },
    { icon: <SiAdobeillustrator className="text-orange-400" />, name: "Illustrator" },
    { icon: <SiAdobephotoshop className="text-blue-400" />, name: "Photoshop" },
    { icon: <FaGitAlt className="text-orange-600" />, name: "Git" },
    { icon: <FaGithub className="text-gray-300" />, name: "GitHub" },
    { icon: <VscVscodeInsiders  className="text-blue-500" />, name: "VS Code" },
  ];

  return (
    <section
      id="skills"
      className="w-full min-h-screen text-white flex items-center justify-center px-6 sm:px-10 py-20"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        {/* Left Side – Title */}
        <div className="md:col-span-4 text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-6xl sm:text-7xl font-extrabold leading-tight bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            MY
          </h2>
          <h2 className="text-6xl sm:text-7xl font-extrabold leading-tight bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            STACK
          </h2>
        </div>

        {/* Divider Line */}
        <div className="hidden md:block w-[1px] h-80 bg-gray-700 mx-auto"></div>

        {/* Right Side – Skills Icons */}
        <div className="md:col-span-7">
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-8">
            
          </p>

          {/* Skill Icons Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
            {skillIcons.map((skill, index) => (
              <div
                key={index}
                title={skill.name}
                className="flex flex-col items-center justify-center text-center group hover:scale-110 transition-transform duration-300"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-white/10 rounded-xl border border-white/20 shadow-md hover:bg-white/20">
                  <span className="text-4xl sm:text-5xl">{skill.icon}</span>
                </div>
                <p className="text-sm sm:text-base text-gray-400 mt-2 group-hover:text-white transition">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
