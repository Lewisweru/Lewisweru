import React from "react";
import MyParticles from "./components/MyParticles"; // Import MyParticles component
import ArtHero from "./components/ArtHero";
import ArtAbout from "./components/ArtAbout";
import ArtGallery from "./components/ArtGallery";
import FeaturedCollections from "./components/FeaturedCollections";
import ArtContact from "./components/ArtContact";

function App() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Particle background */}
      <MyParticles />

      {/* Main content */}
      <div className="relative z-10">
        <ArtHero />
        <ArtAbout />
        <ArtGallery />
        <FeaturedCollections />
        <ArtContact />
      </div>

      <footer className="relative z-10 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">ArtNova</h3>
            <p className="text-gray-300">Where Creativity Meets Innovation</p>
          </div>
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} ArtNova Gallery. All rights reserved.</p>
            <p className="mt-2">Curating exceptional art from around the world</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

