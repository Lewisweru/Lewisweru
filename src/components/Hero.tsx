import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { BarChart3 } from "lucide-react"; // Kaggle icon alternative

export default function Hero() {
  const [columns, setColumns] = useState(0);

  useEffect(() => {
    // Dynamically calculate the number of columns based on the screen width
    setColumns(Math.floor(window.innerWidth / 20)); // Adjust based on your preference
  }, []);

  const createRainDrops = () => {
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops.push(
        <span
          key={i}
          style={{
            left: `${i * 20}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 3}s`,
            top: `${Math.random() * window.innerHeight}px`,
            fontSize: `${Math.random() * 2 + 18}px`,
          }}
        >
          0
        </span>
      );
    }
    return drops;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Matrix Rain Effect */}
      <div className="matrix-rain">{createRainDrops()}</div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Profile Image */}
          <div className="md:w-1/2">
            <img
              src="https://i.imgur.com/rC6dgU3.jpeg"
              alt="Developer Profile"
              className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-blue-500 shadow-xl mx-auto md:mx-0"
            />
          </div>

          {/* Hero Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Lewis Weru
              <span className="block text-blue-400 text-2xl md:text-3xl mt-2">
                Data Analyst | Software Developer
              </span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Building intelligent solutions through code and data.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 justify-center md:justify-start mb-8">
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
                <Mail size={20} />
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center md:justify-start">
              <a target="_blank" href="https://github.com/Lewisweru" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/onlylewis/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a target="_blank" href="mailto:lewisweru.riarauniversity.ac.ke" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
              {/* Kaggle Link */}
              <a target="_blank" href="https://www.kaggle.com/lewisweru" className="text-gray-400 hover:text-white transition-colors">
                <BarChart3 size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
