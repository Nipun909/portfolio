import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About Me", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact Me", id: "contact" },
  ];

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-5 sm:top-5 left-1/2 -translate-x-1/2 z-20 w-[90%] sm:w-auto">

      {/* Desktop Nav */}
      <ul
        className="hidden sm:flex justify-center gap-6 text-sm sm:text-base text-white font-semibold px-6 py-2 
        bg-gradient-to-r from-black via-[#0a0f2d] backdrop-blur-md border border-white/10 shadow-lg rounded-full"
      >
        {menuItems.map((item) => (
          <li
            key={item.id}
            onClick={() => handleScroll(item.id)}
            className="relative group cursor-pointer transition-all"
          >
            {item.name}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 group-hover:w-full transition-all"></span>
          </li>
        ))}
      </ul>

      {/* Mobile Button */}
      <div className="sm:hidden flex justify-end">
        <button
          onClick={() => setOpen(!open)}
          className="bg-black/70 px-3 py-2 text-white rounded-md border border-white/20"
        >
          ☰
        </button>
      </div>

      {/* 🌟 Modern Mobile Dropdown */}
      {open && (
        <div
          className="sm:hidden absolute right-0 mt-2 w-40 
          bg-[#0e1125]/95 backdrop-blur-md border border-white/10 
          shadow-xl rounded-xl overflow-hidden 
          animate-[fadeIn_0.25s_ease-out]"
        >
          {menuItems.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                handleScroll(item.id);
                setOpen(false);
              }}
              className="px-4 py-3 text-white text-sm cursor-pointer hover:bg-white/10 transition"
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
