import React, { useCallback, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import MyParticles from "./components/MyParticles"; // Import MyParticles component
import Hero from "./components/Hero";
import Media from "./components/Media";
import MediaLoader from "./components/MediaLoader";
import About from "./components/About";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function HomePage() {
  const navigate = useNavigate();
  const openMediaPage = useCallback(() => {
    navigate("/media");
  }, [navigate]);

  return (
    <div className="relative min-h-screen bg-white">
      <MyParticles />

      <div className="relative z-10">
        <Hero onExploreMedia={openMediaPage} />
        <About />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
      </div>

      <footer className="relative z-10 bg-gray-900 py-8 text-white">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Lewis Weru. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function MediaPage() {
  const navigate = useNavigate();
  const [mediaLoading, setMediaLoading] = useState(true);

  const closeMediaPage = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="min-h-screen bg-black text-white">
      {mediaLoading ? (
        <MediaLoader onComplete={() => setMediaLoading(false)} />
      ) : (
        <Media onClose={closeMediaPage} />
      )}
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/media" element={<MediaPage />} />
    </Routes>
  );
}

export default App;

