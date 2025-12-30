const testimonials = [
  {
    id: 1,
    name: "Sarah & Mark",
    text: "Venus Vision captured our wedding day perfectly! The photos are stunning and truly reflect our special day.",
    avatar: "./22.jpg",
  },
  {
    id: 2,
    name: "Emily & David",
    text: "We loved our family portrait session. The photographer was professional and made us feel comfortable.",
    avatar: "./22.jpg",
  },
  {
    id: 3,
    name: "The Johnson Family",
    text: "The photos from our anniversary celebration are absolutely beautiful. Highly recommend!",
    avatar: "./22.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-gray-800">
            Client Testimonials
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-8 shadow-sm"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium text-gray-800">
                    {testimonial.name}
                  </h4>
                </div>
              </div>
              <p className="text-gray-600 font-light leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
