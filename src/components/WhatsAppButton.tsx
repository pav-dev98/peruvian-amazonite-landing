import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "51999888777"; // Peru country code + number
  const message = encodeURIComponent(
    "Hello! I'm interested in purchasing wholesale Amazonite. Can you provide more information?"
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      {/* Pulse Animation */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25" />
      
      {/* Button */}
      <div className="relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
        <MessageCircle className="w-7 h-7 text-white" />
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-foreground text-background text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
        Chat on WhatsApp
        <div className="absolute top-full right-4 w-2 h-2 bg-foreground transform rotate-45 -translate-y-1" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
