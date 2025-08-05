import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, Star, ThermometerSun } from 'lucide-react';

const VilcunSection = () => {
  const vilcunFeatures = [
    {
      icon: MapPin,
      title: 'Base en Vilcún',
      description: 'Ubicados estratégicamente en Vilcún para atender rápidamente toda La Araucanía'
    },
    {
      icon: Clock,
      title: 'Atención Inmediata',
      description: 'Servicio rápido en Vilcún, Freire, Pitrufquén y comunas cercanas'
    },
    {
      icon: ThermometerSun,
      title: 'Clima Austral',
      description: 'Especializados en calefacción para enfrentar los fríos inviernos de La Araucanía'
    },
    {
      icon: Star,
      title: 'Experiencia Local',
      description: 'Conocemos las necesidades específicas de calefacción en nuestra región'
    }
  ];

  const nearbyAreas = [
    'Centro de Vilcún',
    'Vilcún Rural',
    'Freire Centro',
    'Pitrufquén Centro',
    'Ruta S-50',
    'Sector Los Laureles',
    'Camino a Temuco',
    'Hacia Cunco'
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-charcoal to-charcoal-light text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Instalación de Estufas en Vilcún
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Con base en Vilcún, somos los especialistas más cercanos para la instalación de estufas a leña y pellets 
            en tu hogar. Conocemos las necesidades específicas de calefacción de nuestra zona.
          </p>
        </div>

        {/* Why Choose Us for Vilcún */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {vilcunFeatures.map((feature, index) => (
            <Card key={index} className="bg-white/10 border-white/20 text-white card-hover">
              <CardHeader className="text-center pb-2">
                <div className="w-12 h-12 bg-flame rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm text-center">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Areas Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="bg-white/10 border-white/20 text-white">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-flame" />
                Sectores que Atendemos en Vilcún
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {nearbyAreas.map((area, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-flame rounded-full"></div>
                    <span className="text-sm text-gray-300">{area}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Si tu sector no aparece en la lista, contáctanos para confirmar cobertura.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <ThermometerSun className="w-6 h-6 mr-2 text-flame" />
                Calefacción para el Clima de Vilcún
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                En Vilcún experimentamos inviernos fríos y húmedos típicos de La Araucanía. 
                Por eso recomendamos:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-flame rounded-full mt-2"></div>
                  <span className="text-sm text-gray-300">
                    <strong>Estufas a leña:</strong> Ideales para calor constante y ambiente acogedor
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-flame rounded-full mt-2"></div>
                  <span className="text-sm text-gray-300">
                    <strong>Estufas a pellets:</strong> Eficientes y de fácil mantenimiento
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-flame rounded-full mt-2"></div>
                  <span className="text-sm text-gray-300">
                    <strong>Cañones calefactores:</strong> Para espacios amplios y comerciales
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">
            ¿Necesitas Instalación de Estufas en Vilcún?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Te visitamos en tu domicilio en Vilcún y alrededores para evaluar tu proyecto 
            y ofrecerte la mejor solución de calefacción.
          </p>
          <button 
            className="bg-flame hover:bg-flame-dark text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200 flame-glow"
            onClick={() => window.open('https://wa.me/56992312523?text=Hola, necesito instalación de estufas en Vilcún', '_blank')}
          >
            Solicitar Visita Gratuita en Vilcún
          </button>
        </div>
      </div>
    </section>
  );
};

export default VilcunSection;