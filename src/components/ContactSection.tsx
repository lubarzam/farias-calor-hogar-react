
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `Hola Fabián, soy ${formData.name}. 
    
${formData.message}

${formData.email ? `Mi email: ${formData.email}` : ''}
${formData.phone ? `Mi teléfono: ${formData.phone}` : ''}`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/56992312523?text=${encodedMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const coverageAreas = [
    'Vilcún', 'Lautaro', 'Victoria', 'Traiguén', 'Freire', 'Pitrufquén', 'Gorbea',
    'Toltén', 'Teodoro Schmidt', 'Imperial', 'Carahue'
  ];

  return (
    <section id="contacto" className="py-20 bg-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-charcoal mb-4">
            Conversemos tu Proyecto
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cuéntanos qué necesitas y te daremos la mejor solución para tu hogar
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-2xl text-charcoal">Solicita tu Cotización</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-flame focus:border-transparent transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-flame focus:border-transparent transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-flame focus:border-transparent transition-colors"
                      placeholder="+56 9 92312523"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                    Cuéntanos tu proyecto *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-flame focus:border-transparent transition-colors resize-none"
                    placeholder="Describe qué tipo de calefactor necesitas, el espacio donde lo instalarías, y cualquier detalle que consideres importante..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-flame hover:bg-flame-dark text-white py-3 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Enviar por WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Coverage */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-xl text-charcoal">Contacto Directo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-flame" />
                  <div>
                    <p className="font-medium text-charcoal">WhatsApp</p>
                    <p className="text-gray-600">+56 9 92312523</p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button 
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                    onClick={() => window.open('https://wa.me/56992312523', '_blank')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Escribir por WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Coverage Area */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-xl text-charcoal">Área de Cobertura</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Atendemos desde Vilcún a toda la Región de La Araucanía, incluyendo las siguientes comunas:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {coverageAreas.map((area, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-flame rounded-full"></div>
                      <span className="text-sm text-charcoal">{area}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  ¿Tu comuna no está en la lista? Consúltanos igual, podemos evaluar tu caso.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
