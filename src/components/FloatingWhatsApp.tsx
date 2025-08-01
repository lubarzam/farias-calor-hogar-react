
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '56992312523';
    const message = 'Hola, me gustaría solicitar información sobre sus servicios de calefacción.';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Pulse animation - behind the button */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 z-0"></div>
      
      <button
        onClick={handleWhatsAppClick}
        className="relative z-10 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flame-glow"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default FloatingWhatsApp;
