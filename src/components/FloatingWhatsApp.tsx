
import { Phone } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={() => window.open('https://wa.me/56912345678', '_blank')}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flame-glow"
        aria-label="Contactar por WhatsApp"
      >
        <Phone className="w-6 h-6" />
      </button>
      
      {/* Pulse animation */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
    </div>
  );
};

export default FloatingWhatsApp;
