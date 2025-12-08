import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Artwork {
  id: number;
  title: string;
  artist: string;
  category: string;
  imageUrl: string;
  description: string;
}

const artworks: Artwork[] = [
  {
    id: 1,
    title: "Digital Dreams",
    artist: "Sarah Chen",
    category: "Digital Art",
    imageUrl: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&h=600&fit=crop",
    description: "An exploration of virtual consciousness through vibrant digital mediums."
  },
  {
    id: 2,
    title: "Urban Symphony",
    artist: "Marcus Rodriguez",
    category: "Photography",
    imageUrl: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&h=600&fit=crop",
    description: "Capturing the rhythm and energy of metropolitan life."
  },
  {
    id: 3,
    title: "Abstract Emotions",
    artist: "Elena Popov",
    category: "Abstract",
    imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
    description: "Colors and forms expressing the depth of human emotion."
  },
  {
    id: 4,
    title: "Nature's Whisper",
    artist: "John Anderson",
    category: "Landscape",
    imageUrl: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=800&h=600&fit=crop",
    description: "Serene landscapes that speak to the soul."
  },
  {
    id: 5,
    title: "Geometric Harmony",
    artist: "Aisha Kumar",
    category: "Geometric",
    imageUrl: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&h=600&fit=crop",
    description: "Perfect balance through mathematical beauty."
  },
  {
    id: 6,
    title: "Cosmic Journey",
    artist: "David Lee",
    category: "Space Art",
    imageUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&h=600&fit=crop",
    description: "A voyage through the mysteries of the universe."
  },
  {
    id: 7,
    title: "Floral Fantasy",
    artist: "Maria Garcia",
    category: "Nature",
    imageUrl: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&h=600&fit=crop",
    description: "Botanical beauty reimagined in vibrant detail."
  },
  {
    id: 8,
    title: "Minimalist Zen",
    artist: "Hiroshi Tanaka",
    category: "Minimalism",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=600&fit=crop",
    description: "Finding peace in simplicity and negative space."
  },
  {
    id: 9,
    title: "Cultural Fusion",
    artist: "Amara Okafor",
    category: "Mixed Media",
    imageUrl: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800&h=600&fit=crop",
    description: "Blending traditions to create something new."
  }
];

export default function ArtGallery() {
  const [selectedArt, setSelectedArt] = useState<Artwork | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(artworks.map(art => art.category)))];

  const filteredArtworks = filter === "All" 
    ? artworks 
    : artworks.filter(art => art.category === filter);

  const handleNext = () => {
    if (!selectedArt) return;
    const currentIndex = filteredArtworks.findIndex(art => art.id === selectedArt.id);
    const nextIndex = (currentIndex + 1) % filteredArtworks.length;
    setSelectedArt(filteredArtworks[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedArt) return;
    const currentIndex = filteredArtworks.findIndex(art => art.id === selectedArt.id);
    const prevIndex = (currentIndex - 1 + filteredArtworks.length) % filteredArtworks.length;
    setSelectedArt(filteredArtworks[prevIndex]);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Featured Gallery
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover extraordinary works from talented artists around the world
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === category
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedArt(artwork)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{artwork.title}</h3>
                    <p className="text-sm text-gray-200">{artwork.artist}</p>
                  </div>
                </div>
                <div className="p-4">
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                    {artwork.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal/Lightbox */}
        <AnimatePresence>
          {selectedArt && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedArt(null)}
            >
              <button
                onClick={() => setSelectedArt(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              >
                <X size={32} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
              >
                <ChevronLeft size={32} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
              >
                <ChevronRight size={32} />
              </button>

              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedArt.imageUrl}
                  alt={selectedArt.title}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-lg mb-4"
                />
                <div className="text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">{selectedArt.title}</h3>
                  <p className="text-lg text-gray-300 mb-2">by {selectedArt.artist}</p>
                  <p className="text-gray-400">{selectedArt.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
