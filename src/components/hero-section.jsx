import { ArrowDown, Play, Star, Award } from "lucide-react";
import { useState } from "react";

export default function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-amber-50 to-white">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('./y.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Warm Overlay */}

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-gray-800 leading-tight mb-8">
          Capturing
          <span className="block font-normal">Moments, Creating</span>
          <span className="block font-light">Memories</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          With over 25 years of experience and serving 1000+ clients, Venus
          Vision Photography Studio specializes in creating timeless visual
          stories. Our expertise spans weddings, portraits, and events, ensuring
          every moment is captured with precision and artistry.
        </p>

        {/* CTA Button */}
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-4 px-12 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
          View Portfolio
        </button>
      </div>
    </section>
  );
}
