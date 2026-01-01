import { useState } from "react";

export default function WhatsAppFloat() {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = "9194472 12414"; // no '+'
    const message =
      "Hi! I'm interested in your wedding photography services. I'd love to discuss my upcoming event with you.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleCallClick = () => {
    window.open("tel:+919876543210", "_self");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="group bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 relative"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
        <div className="absolute inset-0 bg-green-400 rounded-full animate-pulse opacity-30"></div>

        <img src="/wh.svg" alt="WhatsApp" className="w-6 h-6 relative z-10" />

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
            Chat with us on WhatsApp
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
          </div>
        </div>
      </button>

      {/* Notification Badge */}
      <div className="absolute -top-2 -left-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-bounce">
        !
      </div>
    </div>
  );
}
