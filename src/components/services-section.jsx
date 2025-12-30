import { Camera, Users, Heart } from "lucide-react";

const services = [
  {
    id: 1,
    icon: Camera,
    title: "Wedding Photography",
    description: "Complete wedding day coverage from preparation to reception"
  },
  {
    id: 2,
    icon: Heart,
    title: "Event Photography", 
    description: "Professional event documentation for all occasions"
  },
  {
    id: 3,
    icon: Users,
    title: "Portrait Photography",
    description: "Individual, couple, and family portrait sessions"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-gray-800">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="text-center p-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-serif text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}