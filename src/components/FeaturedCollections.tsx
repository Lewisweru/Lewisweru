import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface Collection {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  artworkCount: number;
  theme: string;
}

const collections: Collection[] = [
  {
    id: 1,
    title: "Contemporary Masters",
    description: "Cutting-edge works from today's most influential artists",
    imageUrl: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&h=600&fit=crop",
    artworkCount: 45,
    theme: "Modern Art"
  },
  {
    id: 2,
    title: "Digital Renaissance",
    description: "Where technology meets traditional artistry",
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop",
    artworkCount: 32,
    theme: "Digital Art"
  },
  {
    id: 3,
    title: "Nature's Canvas",
    description: "Breathtaking landscapes and natural beauty",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    artworkCount: 58,
    theme: "Nature"
  },
  {
    id: 4,
    title: "Abstract Expressions",
    description: "Bold colors and forms that speak to the soul",
    imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
    artworkCount: 41,
    theme: "Abstract"
  }
];

export default function FeaturedCollections() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-purple-600" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Collections
            </h2>
            <Sparkles className="w-6 h-6 text-pink-600" />
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Curated selections that showcase the best of contemporary art
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={collection.imageUrl}
                  alt={collection.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full border border-white/30">
                      {collection.theme}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {collection.title}
                  </h3>
                  <p className="text-gray-200 mb-3 text-sm md:text-base">
                    {collection.description}
                  </p>
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <span>{collection.artworkCount} artworks</span>
                    <span className="text-white/60">•</span>
                    <span className="group-hover:text-pink-300 transition-colors">
                      Explore Collection →
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-pink-600/0 to-blue-600/0 group-hover:from-purple-600/20 group-hover:via-pink-600/20 group-hover:to-blue-600/20 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
            View All Collections
          </button>
        </div>
      </div>
    </section>
  );
}
