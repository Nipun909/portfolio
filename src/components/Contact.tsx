"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // handle input change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) setStatus("✅ Message sent successfully!");
      else setStatus("❌ Failed to send message. Try again.");
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send message. Try again.");
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-gradient-to-br from-[#050a1f] via-[#050a1f] to-[#000000] text-white flex items-center justify-center px-6 sm:px-10 py-20"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        {/* LEFT SIDE – TITLE + DETAILS */}
        <div className="md:col-span-4 text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-6xl sm:text-7xl font-extrabold leading-tight bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            CONTACT
          </h2>
          <h2 className="text-6xl sm:text-7xl font-extrabold leading-tight bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-6">
            ME
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-sm">
            Have a project in mind or want to collaborate?  
            I’m always open to new opportunities and creative ideas.
          </p>
          {/* Social Icons */}
              <div className="flex justify-start space-x-6 mt-10">
                <a
                  href="https://github.com/Nipun909" // 🔗 Replace this with your GitHub link
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
                  href="https://linkedin.com/in/nipun-thilakshana-65bbb1313" // 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-600 rounded-full hover:bg-blue-500 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <FaLinkedin size={22} className="text-white" />
                </a>
              </div>


          
        </div>
        {/* DIVIDER LINE */}
        <div className="hidden md:block w-[1px] h-96 bg-gray-700 mx-auto"></div>

        {/* RIGHT SIDE – CONTACT FORM */}
        <div className="md:col-span-7">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-8 sm:p-10 w-full">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="peer w-full p-4 rounded-xl bg-transparent text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent"
                  placeholder="Your Name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-4 text-gray-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-400 bg-[#050a1f] px-2"
                >
                  Your Name
                </label>
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="peer w-full p-4 rounded-xl bg-transparent text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent"
                  placeholder="Your Email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-4 text-gray-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-400 bg-[#050a1f] px-2"
                >
                  Your Email
                </label>
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="peer w-full p-4 rounded-xl bg-transparent text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent resize-none"
                  placeholder="Your Message"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-4 top-4 text-gray-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-400 bg-[#050a1f] px-2"
                >
                  Message
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition text-white font-semibold shadow-lg"
              >
                Send Message
              </button>

              {status && (
                <p className="mt-4 text-center text-gray-300 text-sm">{status}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
