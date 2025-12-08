import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Palette, Sparkles } from "lucide-react";

export default function ArtHero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (titleRef.current && subtitleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.3, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white overflow-hidden">
      {/* Floating Art Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 text-center">
        <div className="flex justify-center mb-6">
          <Palette className="w-20 h-20 text-pink-400 animate-bounce" />
        </div>
        
        <h1 ref={titleRef} className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          ArtNova
        </h1>
        
        <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Where Creativity Meets Innovation
        </p>

        <div className="flex items-center justify-center gap-2 text-lg text-pink-300">
          <Sparkles className="w-5 h-5" />
          <span>Explore Exceptional Artistry</span>
          <Sparkles className="w-5 h-5" />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
