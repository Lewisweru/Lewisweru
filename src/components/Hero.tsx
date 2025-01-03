import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <img
              src="https://github.com/Lewisweru/Lewisweru/raw/main/public/IMG_7551.JPG"
              alt="Developer Profile"
              className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-blue-500 shadow-xl mx-auto md:mx-0"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Lewis Weru
              <span className="block text-blue-400 text-2xl md:text-3xl mt-2">
                Full stack developer
              </span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Crafting elegant solutions to complex problems with clean, efficient code.
            </p>
            <div className="flex gap-4 justify-center md:justify-start mb-8">
             <a
               href="/MYYCV.pdf"
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
            <div className="flex gap-6 justify-center md:justify-start">
              <a href="https://github.com/Lewisweru" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/onlylewis/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:lewisweru.riarauniversity.ac.ke" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}