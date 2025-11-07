"use client";
import React, { useState, useRef } from "react";

// ✅ Define project data type
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  screens?: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "Agriculture Information System With Crop Calendar",
    description:
      "The Agricultural Information Platform with Crop Calendar helps farmers and stakeholders by offering a crop calendar, tips, and insights to improve agricultural productivity.",
    image: "/projects/crop/crop.png",
    tech: ["React.js", "Laravel", "MySQL"],
    screens: ["/projects/crop/login1.png", 
      "/projects/crop/login2.png"],
  },
  {
    id: 2,
    title: "U-News App",
    description:
      "A modern news app built with Flutter and Firebase, delivering real-time updates and personalized user experiences.",
    image: "/projects/unews/unews2.png",
    tech: ["Flutter", "Firebase", "Figma"],
    screens: ["/projects/unews/scrn1.png", "/projects/unews/scrn2.png",
      "/projects/unews/scrn3.png", "/projects/unews/scrn4.png", "/projects/unews/scrn5.png",
    ],
  },
  {
    id: 3,
    title: "Eco-Tourism-QR-Explorer",
    description:
      "A Flutter-based app designed to help users track fitness, manage nutrition, and monitor health goals with real-time data synchronization.",
    image: "/projects/ecoqr/ecoo.png",
    tech: ["Flutter", "Firebase", "Figma"],
    screens: ["/projects/healthmate_1.png", "/projects/healthmate_2.png"],
  },
  {
    id: 4,
    title: "My portfolio website",
    description:
      "This is my portfolio website. its made with Next js",
    image: "/projects/portfolio/portfolio.png",
    tech: ["Next js", "Tailwind"],
    screens: ["/projects/portfolio/port1.png", "/projects/portfolio/port2.png","/projects/portfolio/port3.png"],
  },
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // ✅ Close modal when clicking outside
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setActiveProject(null);
      setPreviewImage(null);
    }
  };

  return (
    <section id="projects" className="w-full py-24 text-white px-6 sm:px-10">
      <h2 className="text-5xl font-extrabold mb-14 text-center bg-gradient-to-r from-blue-300 to-blue-900 bg-clip-text text-transparent">
        MY PROJECTS
      </h2>

      {/* ✅ Project Cards Grid (Compact like before) */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setActiveProject(project)}
            className="cursor-pointer bg-gray-800/60 rounded-2xl shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300 overflow-hidden"
          >
            {/* ✅ Constant Image Size */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 sm:h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Modal Popup */}
      {activeProject && (
        <div
          onClick={handleOutsideClick}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
        >
          <div
            ref={modalRef}
            className="bg-gray-900 p-8 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto relative border border-gray-700"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-3 right-4 text-gray-400 hover:text-white text-3xl"
            >
              &times;
            </button>

            {/* ✅ Full Project Image */}
            <img
              src={activeProject.image}
              alt={activeProject.title}
              className="w-full h-auto object-contain rounded-lg mb-6 bg-black"
            />

            <h3 className="text-3xl font-bold mb-3 text-blue-400">
              {activeProject.title}
            </h3>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              {activeProject.description}
            </p>

            {/* ✅ Technologies */}
            <h4 className="text-blue-400 font-semibold mb-2 text-lg">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2 mb-8">
              {activeProject.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* ✅ Additional Screenshots */}
            {activeProject.screens && activeProject.screens.length > 0 && (
              <>
                <h4 className="text-blue-400 font-semibold mb-4 text-lg">
                  Screens
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {activeProject.screens.map((shot, index) => (
                    <img
                      key={index}
                      src={shot}
                      alt={`Screens ${index + 1}`}
                      onClick={() => setPreviewImage(shot)} // ✅ Open preview
                      className="w-full h-40 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* ✅ Full-Screen Image Preview */}
      {previewImage && (
        <div
          onClick={() => setPreviewImage(null)}
          className="fixed inset-0 bg-black/90 flex justify-center items-center z-50 p-4 cursor-pointer"
        >
          <img
            src={previewImage}
            alt="Preview"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
