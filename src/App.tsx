import React from "react";
import MyParticles from "./components/MyParticles"; // Import MyParticles component
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Particle background */}
      <MyParticles />

      {/* Main content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
      </div>

      <footer className="relative z-10 bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Lewis Weru. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

