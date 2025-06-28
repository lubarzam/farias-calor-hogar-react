
const ProfileSection = () => {
  return (
    <section id="perfil" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="animate-slide-in-left">
              <div className="relative">
                <div className="w-full max-w-md mx-auto">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Fabián Farías - Técnico especialista"
                    className="w-full rounded-xl shadow-lg"
                  />
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-flame rounded-full flex items-center justify-center shadow-lg">
                    <div className="text-white text-center">
                      <div className="text-2xl font-bold">40+</div>
                      <div className="text-xs">AÑOS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-charcoal mb-6">
                Conoce a Fabián Farías
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Con más de <strong className="text-flame">40 años de experiencia</strong> en el rubro de la calefacción, 
                  Fabián Farías se ha consolidado como uno de los técnicos más confiables y especializados 
                  de La Araucanía.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Su trayectoria comenzó en los años 80, cuando la calefacción a leña era la principal 
                  fuente de calor en los hogares chilenos. Desde entonces, ha evolucionado junto con la 
                  tecnología, especializándose en sistemas modernos de pellets y estufas de alta eficiencia.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Lo que distingue a Fabián es su <strong className="text-flame">enfoque personalizado</strong>. 
                  Cada instalación es única, y él se toma el tiempo necesario para entender las necesidades 
                  específicas de cada hogar y familia.
                </p>
              </div>

              {/* Key Points */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-flame rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Experiencia Comprobada</h4>
                    <p className="text-gray-600 text-sm">Más de 500 instalaciones exitosas en la región</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-flame rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Servicio Personalizado</h4>
                    <p className="text-gray-600 text-sm">Atención directa del especialista en cada proyecto</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-flame rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Multimarcas</h4>
                    <p className="text-gray-600 text-sm">Trabajo con todas las marcas del mercado</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-flame rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Garantía Total</h4>
                    <p className="text-gray-600 text-sm">Respaldo completo en todos los trabajos realizados</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10">
                <button 
                  className="bg-flame hover:bg-flame-dark text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center"
                  onClick={() => window.open('https://wa.me/56912345678', '_blank')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Conversar con Fabián
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
