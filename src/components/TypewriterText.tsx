"use client";

import { Typewriter } from "react-simple-typewriter";

export default function TypewriterText() {
  return (
    <h3 className="text-3xl font-semibold text-white-400">
      <Typewriter
        words={[
          "Web Application Developement",
          "Mobile Application Development",
          "Creative Designer",
        ]}
        loop={0} // 0 = infinite loop
        cursor
        cursorStyle="|"
        typeSpeed={120}
        deleteSpeed={40}
        delaySpeed={2000}
      />
    </h3>
  );
}
