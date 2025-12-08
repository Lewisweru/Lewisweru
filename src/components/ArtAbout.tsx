import React from 'react';
import { Users, Award, Heart, Zap } from 'lucide-react';

export default function ArtAbout() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            About ArtNova
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            A digital sanctuary for art lovers and creators
          </p>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 text-center mb-6">
              ArtNova is more than just a gallery—it's a vibrant community where artists and art enthusiasts 
              come together to celebrate creativity in all its forms. We curate exceptional works from emerging 
              and established artists, bringing their visions to life in the digital realm.
            </p>
            <p className="text-gray-700 text-center">
              Our mission is to make art accessible, discoverable, and inspiring. Whether you're looking to 
              discover your next favorite artist, find the perfect piece for your collection, or showcase your 
              own creative work, ArtNova is your canvas.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
              <div className="text-sm text-gray-600">Artists</div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full mb-4">
                <Award className="w-8 h-8 text-pink-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">2,000+</div>
              <div className="text-sm text-gray-600">Artworks</div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">10K+</div>
              <div className="text-sm text-gray-600">Art Lovers</div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full mb-4">
                <Zap className="w-8 h-8 text-indigo-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
              <div className="text-sm text-gray-600">Countries</div>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-blue-50">
              <h3 className="font-bold text-xl mb-3 text-purple-900">Authenticity</h3>
              <p className="text-gray-600 text-sm">
                Every piece is carefully curated to ensure genuine artistic expression and quality.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-pink-50 to-purple-50">
              <h3 className="font-bold text-xl mb-3 text-pink-900">Innovation</h3>
              <p className="text-gray-600 text-sm">
                We embrace new mediums and technologies to push the boundaries of art.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50">
              <h3 className="font-bold text-xl mb-3 text-blue-900">Community</h3>
              <p className="text-gray-600 text-sm">
                Building connections between artists and collectors around the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
