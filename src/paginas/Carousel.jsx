import React, { useRef, useState, useEffect } from 'react';

export default function Carousel() {
  const dotsRef = useRef([]);
  const [activeSection, setActiveSection] = useState(0);

  // Función para cambiar de sección sin causar scroll interno
  const changeSection = (index, event) => {
    // Prevenir el comportamiento predeterminado solo del evento específico
    if (event) {
      event.preventDefault();
    }
    setActiveSection(index);
    updateDots(index);
  };

  // Actualizar los puntos de navegación
  const updateDots = (index) => {
    dotsRef.current.forEach((dot, i) => {
      dot.className = `w-3 h-3 rounded-full transition-all duration-300 ${
        i === index ? 'bg-white scale-150' : 'bg-white/20 hover:bg-white hover:scale-150'
      }`;
    });
  };

  // Inicializar el primer punto de navegación
  useEffect(() => {
    updateDots(activeSection);
  }, []);

  // Renderizar solo la sección activa
  const renderActiveSection = () => {
    switch (activeSection) {
      case 0:
        return (
          <section className="scroll-section relative h-screen flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group shine-effect">
              <img
                src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba"
                alt="Architectural detail"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/70 to-neutral-950/50 transition-opacity duration-500 group-hover:opacity-0"></div>
            </div>
            <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-8 bg-neutral-950">
              <div className="max-w-lg float-animation">
                <span className="text-neutral-400 tracking-wider text-sm font-mono">01 / VISION</span>
                <h2 className="mt-4 text-5xl md:text-7xl font-bold leading-none bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                  Modern Architecture
                </h2>
                <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
                  Exploring the intersection of form and function in contemporary design.
                </p>
                <button
                  className="mt-8 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium transition-all duration-300 hover:tracking-wider"
                  onClick={(e) => changeSection(1, e)}
                >
                  Explore More →
                </button>
              </div>
            </div>
          </section>
        );
      case 1:
        return (
          <section className="scroll-section relative h-screen flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-8 bg-neutral-900">
              <div className="max-w-lg float-animation">
                <span className="text-neutral-400 tracking-wider text-sm font-mono">02 / DESIGN</span>
                <h2 className="mt-4 text-5xl md:text-7xl font-bold leading-none bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                  Urban Spaces
                </h2>
                <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
                  Creating environments that inspire and transform daily life.
                </p>
                <button
                  className="mt-8 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium transition-all duration-300 hover:tracking-wider"
                  onClick={(e) => changeSection(2, e)}
                >
                  Learn More →
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group shine-effect">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
                alt="Urban landscape"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-neutral-950/70 to-neutral-950/50 transition-opacity duration-500 group-hover:opacity-0"></div>
            </div>
          </section>
        );
      case 2:
        return (
          <section className="scroll-section relative h-screen flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group shine-effect">
              <img
                src="https://images.unsplash.com/photo-1682687220067-dced0a5865c5"
                alt="Minimalist interior"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/70 to-neutral-950/50 transition-opacity duration-500 group-hover:opacity-0"></div>
            </div>
            <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-8 bg-neutral-950">
              <div className="max-w-lg float-animation">
                <span className="text-neutral-400 tracking-wider text-sm font-mono">03 / SPACE</span>
                <h2 className="mt-4 text-5xl md:text-7xl font-bold leading-none bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                  Interior Flow
                </h2>
                <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
                  Harmonizing space and light to create immersive experiences.
                </p>
                <button
                  className="mt-8 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium transition-all duration-300 hover:tracking-wider"
                  onClick={(e) => changeSection(0, e)}
                >
                  Discover More →
                </button>
              </div>
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  // Función para manejar clic en los botones de navegación
  const handleDotClick = (index, e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado
    e.stopPropagation(); // Detener la propagación del evento
    changeSection(index);
    return false; // Asegurar que no haya comportamiento predeterminado
  };

  return (
    <>
      <div className="carousel-container h-screen relative">
        <div className="carousel-inner h-full w-full">
          {renderActiveSection()}
        </div>

        <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
          <button
            onClick={(e) => handleDotClick(0, e)}
            ref={(el) => (dotsRef.current[0] = el)}
            className="w-3 h-3 rounded-full bg-white/20 hover:bg-white transition-colors hover:scale-150"
            title="Go to section 1"
            type="button"
          ></button>
          <button
            onClick={(e) => handleDotClick(1, e)}
            ref={(el) => (dotsRef.current[1] = el)}
            className="w-3 h-3 rounded-full bg-white/20 hover:bg-white transition-colors hover:scale-150"
            title="Go to section 2"
            type="button"
          ></button>
          <button
            onClick={(e) => handleDotClick(2, e)}
            ref={(el) => (dotsRef.current[2] = el)}
            className="w-3 h-3 rounded-full bg-white/20 hover:bg-white transition-colors hover:scale-150"
            title="Go to section 3"
            type="button"
          ></button>
        </div>
      </div>

      {/* Puedes añadir más contenido aquí y será desplazable */}
      {/* <div className="additional-content">
        <h2>Más contenido aquí</h2>
        <p>Este contenido aparecerá debajo del carrusel y se podrá hacer scroll para verlo.</p>
      </div> */}
    </>
  );
}