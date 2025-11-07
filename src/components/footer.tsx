"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-r from-black via-[#030a33] to-black text-white py-10 border-t border-blue-900/40 overflow-hidden">
      <div className="flex flex-col items-center justify-center space-y-6">
        {/* Social Icons */}
        <div className="flex justify-center space-x-6">
          {/* GitHub */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
          >
            <FaGithub size={20} className="text-white" />
          </a>

          {/* Gmail */}
          <a
            href="mailto:yourname@gmail.com"
            className="p-2 bg-white rounded-full hover:bg-gray-400 transition"
          >
            <SiGmail size={20} className="text-red-600" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-blue-600 rounded-full hover:bg-blue-500 transition"
          >
            <FaLinkedin size={20} className="text-white" />
          </a>
        </div>

        {/* Divider */}
        <div className="w-2/3 h-[1px] bg-white/10"></div>

        {/* Copyright */}
        <p className="text-sm text-gray-300 text-center">
          © {new Date().getFullYear()}{" "}
          <span className="text-blue-400 font-semibold">Nipun</span>. All rights reserved.
        </p>
      </div>

     
      <div className="absolute bottom-4 left-6">
        <p className="text-lg font-extrabold text-blue-400 tracking-wider select-none animate-glow">
             &lt;/Nipun&gt;
        </p>

      </div>
    </footer>
  );
}
