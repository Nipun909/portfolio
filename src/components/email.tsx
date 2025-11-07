"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_5uk9asf", // ✅ Replace with your EmailJS Service ID
        "template_vwtnl3h", // ✅ Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "ptxL1BussPK16HX2M" // ✅ Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // ✅ Clear inputs
          setTimeout(() => setStatus(""), 4000); // ✅ Hide message after 4s
        },
        () => {
          setStatus("❌ Failed to send message. Try again.");
          setTimeout(() => setStatus(""), 4000); // ✅ Hide message after 4s
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen flex items-center justify-center px-6 sm:px-10 py-20 text-white"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        {/* LEFT SIDE — Title */}
        <div className="md:col-span-4 text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-6xl sm:text-7xl font-extrabold leading-tight bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent">
            CONTACT
          </h2>
          <h2 className="text-6xl sm:text-7xl font-extrabold leading-tight bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent">
            ME
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mt-8 max-w-sm">
            Have an idea? Let’s make it real
          </p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-[1px] h-96 bg-gray-700 mx-auto"></div>

        {/* RIGHT SIDE — Form Card */}
        <div className="md:col-span-7">
          <div className="bg-[#111] border border-gray-800 rounded-xl shadow-2xl p-8 sm:p-10 w-full">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
              {/* Name */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-purple-500 transition"
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-purple-500 transition"
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-purple-500 transition resize-none"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-md bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-500 hover:to-blue-600 transition text-white font-semibold shadow-md"
              >
                Send
              </button>

              {/* Status Message */}
              {status && (
                <p
                  className={`mt-4 text-center text-sm transition-opacity duration-500 ${
                    status.includes("✅")
                      ? "text-green-400 opacity-100"
                      : "text-red-400 opacity-100"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
