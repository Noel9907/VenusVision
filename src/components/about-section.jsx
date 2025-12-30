import { Camera, Users, Award, Heart } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: Camera,
      title: "Professional Equipment",
      description:
        "State-of-the-art cameras and lighting equipment for perfect shots",
    },
    {
      icon: Users,
      title: "Experienced Team",
      description:
        "Skilled photographers with years of experience in wedding photography",
    },
    {
      icon: Award,
      title: "Award Winning",
      description:
        "Recognized excellence in photography with multiple industry awards",
    },
    {
      icon: Heart,
      title: "Passionate Service",
      description:
        "We pour our heart into every project, ensuring your memories are perfect",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-serif font-light text-gray-800 mb-6">
                About
                <span className="block font-normal text-amber-600">
                  Venus Vision
                </span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-8 font-light">
                Founded in 2014, Venus Vision has been Kerala's premier wedding
                photography studio, specializing in capturing the authentic
                emotions and timeless beauty of your most precious moments.
                Based in the scenic backwaters of Alappuzha, we bring artistic
                vision and technical excellence to every celebration.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Our approach combines traditional photography techniques with
                modern artistic vision, ensuring that every frame tells your
                unique love story with elegance and authenticity.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-600 font-light leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="./s.png"
                alt="Venus Vision Photography Studio"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-1">
                  25+
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Years of Excellence
                </div>
              </div>
            </div>

            <div className="absolute -top-8 -right-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-1">
                  1000+
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Happy Clients
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
