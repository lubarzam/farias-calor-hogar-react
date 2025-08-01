
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "María González",
      location: "Temuco",
      rating: 5,
      text: "Fabián instaló mi estufa a pellets hace 3 años y sigue funcionando perfectamente. Su trabajo es impecable y siempre está disponible para cualquier consulta.",
      service: "Instalación de Estufa a Pellets"
    },
    {
      name: "Carlos Martínez",
      location: "Villarrica",
      rating: 5,
      text: "Excelente servicio de mantención. Llegó puntual, limpió toda la instalación y me explicó cómo optimizar el consumo de pellets. Muy profesional.",
      service: "Mantención Preventiva"
    },
    {
      name: "Ana Rodríguez",
      location: "Pucón",
      rating: 5,
      text: "Mi cañón calefactor tenía problemas y Fabián lo reparó en el mismo día. Su experiencia se nota en cada detalle. Totalmente recomendado.",
      service: "Reparación de Cañón"
    },
    {
      name: "Pedro Sánchez",
      location: "Angol",
      rating: 5,
      text: "Contraté sus servicios para instalar una estufa a leña. El trabajo fue perfecto, cumplió todos los plazos y el precio fue muy justo. Un profesional de primera.",
      service: "Instalación de Estufa a Leña"
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-charcoal mb-4">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación. 
            Conoce sus experiencias trabajando con nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-flame mr-3 flex-shrink-0" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 text-lg leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-charcoal text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 text-sm">
                        {testimonial.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-flame font-medium text-sm">
                        {testimonial.service}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            ¿Quieres ser parte de nuestros clientes satisfechos?
          </p>
          <button 
            className="bg-flame hover:bg-flame-dark text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            onClick={() => window.open('https://wa.me/56992312523', '_blank')}
          >
            Solicita tu Cotización Ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
