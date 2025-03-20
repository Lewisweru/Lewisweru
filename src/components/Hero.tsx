import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { BarChart3 } from "lucide-react"; // Kaggle icon alternative

export default function Hero() {
  const rainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rainRef.current) {
      const symbols = "01"; // Matrix-style symbols
      const columns = Math.floor(window.innerWidth / 20);
      const drops = [];

      for (let i = 0; i < columns; i++) {
        const drop = document.createElement("span");
        drop.innerText = symbols[Math.floor(Math.random() * symbols.length)];
        drop.classList.add("matrix-drop");
        drop.style.left = `${i * 20}px`;
        rainRef.current.appendChild(drop);
        drops.push(drop);
      }

      gsap.to(drops, {
        y: window.innerHeight,
        duration: () => Math.random() * 2 + 3, 
        repeat: -1,
        ease: "none",
        stagger: {
          each: 0.1,
          repeat: -1,
        },
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Matrix Rain Effect */}
      <div ref={rainRef} className="absolute top-0 left-0 w-full h-full pointer-events-none"></div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold">
          Lewis Weru
          <span className="block text-blue-400 text-2xl mt-2">
            Data Analyst | Software Developer
          </span>
        </h1>
        <p className="text-gray-300 text-lg mt-4">
          Building intelligent solutions through code and data.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4 justify-center">
          <a
            href="/MYCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all"
          >
            <ExternalLink size={20} />
            View Resume
          </a>
          <button className="border border-blue-500 hover:bg-blue-500/10 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all">
            <Mail size={48} />
            Contact Me
          </button>
        </div>

        {/* Social Links (with Hover Glow) */}
        <div className="mt-6 flex gap-6 justify-center">
          <a target="_blank" href="https://github.com/Lewisweru" className="text-gray-400 hover:text-white transition-colors pulse-hover">
            <Github size={48} />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/onlylewis/" className="text-gray-400 hover:text-white transition-colors pulse-hover">
            <Linkedin size={48} />
          </a>
          <a target="_blank" href="mailto:lewisweru.riarauniversity.ac.ke" className="text-gray-400 hover:text-white transition-colors pulse-hover">
            <Mail size={48} />
          </a>
          <a target="_blank" href="https://www.kaggle.com/lewisweru" className="text-gray-400 hover:text-white transition-colors pulse-hover">
            <BarChart3 size={48} />
          </a>
        </div>
      </div>
    </section>
  );
}
