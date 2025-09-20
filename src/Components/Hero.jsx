import React, { useEffect, useState, useMemo } from "react";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = useMemo(
    () => [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=60", 
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=60", 
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=60",
    ],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Preload images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center text-white overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              i === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/50 to-blue-900/80" />

      {/* Floating Shapes */}
      <div className="absolute top-10 left-6 sm:left-12 w-20 sm:w-28 h-20 sm:h-28 bg-blue-400/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-10 right-6 sm:right-12 w-28 sm:w-40 h-28 sm:h-40 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-4 sm:left-10 w-16 sm:w-24 h-16 sm:h-24 bg-blue-300/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 right-1/6 sm:right-1/4 w-12 sm:w-20 h-12 sm:h-20 bg-white/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "0.5s" }} />

      {/* Main Card */}
      <div className="relative z-20 backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl rounded-3xl flex flex-col justify-center text-center w-[92vw] sm:w-[85vw] lg:w-[75vw] max-w-6xl px-4 sm:px-8 md:px-12 py-8 sm:py-12 md:py-16 mt-16 sm:mt-20 animate-fade-in">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-4 sm:mb-6 text-white animate-slide-up">
          ULTRA CORE PROJECTS
        </h1>

        <p className="text-base sm:text-lg md:text-2xl lg:text-3xl mb-6 sm:mb-8 text-blue-100 font-medium animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Professional Engineering Solutions
        </p>

        {/* Services */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-400/30 transition-all duration-300">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-semibold text-white group-hover:text-blue-200 transition-colors duration-300">
              AC REPAIRING
            </span>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-white/30"></div>
          <div className="md:hidden w-12 h-px bg-white/30"></div>

          <div className="flex flex-col items-center group cursor-pointer">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-400/30 transition-all duration-300">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-semibold text-white group-hover:text-blue-200 transition-colors duration-300">
              CORE CUTTING
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            View Services
          </button>
          <button className="bg-white/10 border-2 border-white/30 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full shadow-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            Contact Us
          </button>
        </div>
      </div>

      {/* Global Animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        .animate-slide-up { opacity: 0; animation: slide-up 0.6s ease-out forwards; }
      `}</style>
    </section>
  );
}
