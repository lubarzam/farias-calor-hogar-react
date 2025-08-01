
import { Button } from '@/components/ui/button';
import { Phone, Settings } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Especialistas en
            <span className="block text-flame-light">Calefacción a Leña y Pellets</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Más de 40 años de experiencia instalando, manteniendo y reparando 
            sistemas de calefacción en La Araucanía y Región Metropolitana
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg"
              className="bg-flame hover:bg-flame-dark text-white px-8 py-4 text-lg flame-glow"
              onClick={() => window.open('https://wa.me/56992312523', '_blank')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Solicita tu Instalación Hoy
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-charcoal px-8 py-4 text-lg backdrop-blur-sm"
              onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Settings className="w-5 h-5 mr-2" />
              Ver Servicios
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-flame-light mb-2">40+</div>
              <div className="text-gray-200">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-flame-light mb-2">500+</div>
              <div className="text-gray-200">Instalaciones Realizadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-flame-light mb-2">100%</div>
              <div className="text-gray-200">Satisfacción Garantizada</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
