
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Wrench, ShoppingCart } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Settings,
      title: 'Instalación de Estufas y Cañones',
      description: 'Instalación profesional de estufas a leña, pellets y cañones calefactores multimarcas con garantía de funcionamiento.',
      features: ['Instalación certificada', 'Cañerías y conductos', 'Pruebas de seguridad', 'Garantía incluida']
    },
    {
      icon: Wrench,
      title: 'Mantención y Limpieza',
      description: 'Servicio completo de mantención preventiva y limpieza profunda para optimizar el rendimiento de tu calefactor.',
      features: ['Limpieza de conductos', 'Revisión de componentes', 'Ajustes y calibración', 'Informe técnico']
    },
    {
      icon: Settings,
      title: 'Reparaciones Especializadas',
      description: 'Diagnóstico y reparación de fallas en todo tipo de sistemas de calefacción a leña y pellets.',
      features: ['Diagnóstico preciso', 'Repuestos originales', 'Reparación inmediata', 'Soporte post-servicio']
    },
    {
      icon: ShoppingCart,
      title: 'Venta de Insumos (Próximamente)',
      description: 'Pronto contaremos con venta de insumos, repuestos y kits completos de instalación.',
      features: ['Kits de instalación', 'Repuestos originales', 'Accesorios', 'Asesoría técnica'],
      isComingSoon: true
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
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
              className={`card-hover ${service.isComingSoon ? 'opacity-75' : ''}`}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-flame/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-flame" />
                </div>
                <CardTitle className="text-xl text-charcoal flex items-center justify-center gap-2">
                  {service.title}
                  {service.isComingSoon && (
                    <span className="text-xs bg-flame text-white px-2 py-1 rounded-full">
                      Próximamente
                    </span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-6 text-center">
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
            className="bg-flame hover:bg-flame-dark text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            onClick={() => window.open('https://wa.me/56912345678', '_blank')}
          >
            Solicitar Cotización Gratuita
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
