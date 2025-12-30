import { useState } from "react";

const portfolioItems = [
  {
    id: 1,
    title: "Elegant Beach Wedding",
    category: "Weddings",
    image: "./1.png",
    description: "A romantic seaside ceremony captured in golden hour light",
  },
  {
    id: 2,
    title: "Romantic Garden Session",
    category: "Portraits",
    image: "./2.png",
    description: "Intimate couple portraits in a lush botanical setting",
  },
  {
    id: 3,
    title: "Traditional Ceremony",
    category: "Weddings",
    image: "./3.png",
    description: "Cultural wedding traditions beautifully documented",
  },
  {
    id: 4,
    title: "Family Celebration",
    category: "Events",
    image: "./4.png",
    description: "Multi-generational family gathering with joy and laughter",
  },
];

const categories = ["Weddings", "Portraits", "Events"];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("Weddings");

  const filteredItems = portfolioItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-gray-800 mb-8">
            Portfolio
          </h2>

          {/* Category Tabs */}
          <div className="flex justify-center space-x-8 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-lg font-light pb-2 border-b-2 transition-colors duration-300 ${
                  activeCategory === category
                    ? "text-amber-600 border-amber-600"
                    : "text-gray-500 border-transparent hover:text-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-serif text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 font-light">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
