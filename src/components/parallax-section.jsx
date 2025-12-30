import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Camera, Heart, Star, Award } from "lucide-react";
export default function ParallaxHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]); // smooth parallax

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('./22.jpg')",
          y, // actual parallax!
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />

      {/* Floating Blurs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-amber-400/20 rounded-full blur-3xl animate-pulse z-10" />
      <div className="absolute bottom-32 right-16 w-48 h-48 bg-amber-600/10 rounded-full blur-3xl animate-pulse delay-1000 z-10" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse delay-500 z-10" />

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-light leading-tight mb-8">
            Where Love Stories
            <span className="block font-normal text-amber-300">
              Come to Life
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Experience the magic of professional photography that captures not
            just moments, but the emotions, the essence, and the timeless beauty
            of your most precious celebrations.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { icon: <Heart />, label: "Happy Couples", value: "1000+" },
              { icon: <Camera />, label: "Years Experience", value: "25+" },
              // { icon: <Star />, label: "Awards Won", value: "50+" },
              { icon: <Award />, label: "Satisfaction", value: "100%" },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-amber-300 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
