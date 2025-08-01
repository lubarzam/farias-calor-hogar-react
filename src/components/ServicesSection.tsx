import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Wrench, ShoppingCart } from 'lucide-react';
import estufasCombinadasImg from '@/assets/estufas-instaladas-combinadas.jpg';

const ServicesSection = () => {
  const services = [
    {
      icon: Settings,
      title: 'Instalación de Estufas y Cañones',
      description: 'Instalación profesional de estufas a leña, pellets y cañones calefactores multimarcas con garantía de funcionamiento.',
      features: ['Instalación certificada', 'Pruebas de seguridad', 'Inducción de uso',  'Garantía incluida'],
      image: estufasCombinadasImg
    },
    {
      icon: Wrench,
      title: 'Mantención y Limpieza',
      description: 'Servicio completo de mantención preventiva y limpieza profunda para optimizar el rendimiento de tu calefactor.',
      features: ['Limpieza de conductos', 'Revisión de componentes', 'Ajustes y calibración'],
      image: '/lovable-uploads/934cd1b0-38af-4c69-a4d0-3581b6272b1e.png'
    },
    {
      icon: Settings,
      title: 'Reparaciones Especializadas',
      description: 'Diagnóstico y reparación de fallas en todo tipo de sistemas de calefacción a leña y pellets.',
      features: ['Diagnóstico preciso', 'Repuestos originales', 'Reparación inmediata', 'Soporte post-servicio'],
      image: '/lovable-uploads/8183af67-1c30-4b6a-922a-964972560008.png'
    },
    {
      icon: ShoppingCart,
      title: 'Venta de Insumos (Próximamente)',
      description: 'Pronto contaremos con venta de insumos, repuestos y kits completos de instalación.',
      features: ['Kits de instalación', 'Repuestos originales', 'Accesorios', 'Asesoría técnica'],
      image: '/lovable-uploads/bce2750b-fa06-4874-bf72-09e3209cd132.png',
      isComingSoon: true
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-warm-light to-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-charcoal mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones completas en calefacción, desde la instalación hasta el mantenimiento 
            y reparación de tu sistema
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`card-hover overflow-hidden bg-white shadow-lg ${service.isComingSoon ? 'opacity-90' : ''}`}
            >
              {/* Service Image */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Icon overlay */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-flame/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                {/* Coming Soon Badge */}
                {service.isComingSoon && (
                  <div className="absolute top-4 left-4 bg-flame text-white px-3 py-1 rounded-full text-sm font-medium">
                    Próximamente
                  </div>
                )}
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-charcoal">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-gray-600 mb-6">
                  {service.description}
                </CardDescription>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-flame rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            ¿Necesitas una cotización personalizada?
          </p>
          <button 
            className="bg-flame hover:bg-flame-dark text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flame-glow"
            onClick={() => window.open('https://wa.me/56992312523', '_blank')}
          >
            Solicitar Cotización Gratuita
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
