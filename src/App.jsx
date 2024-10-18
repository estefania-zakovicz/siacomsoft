import React, { useEffect, useRef, useState } from 'react';
import Hero_animation from './Components/Hero/Hero_animation';
import Programs from './Components/Project/Programs';
// Asegúrate de que el componente Carousel esté en esta ruta

const App = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting); // Detecta si la sección está visible
      },
      { threshold: 0.5 } // El 50% de la sección debe estar visible para activar la animación
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="font-nunito">
      <Hero_animation />
      <div ref={sectionRef} className="title text-center mt-20">
        <span
          className={`block text-7xl font-bold uppercase ${
            isInView ? 'tracking-in-expand-fwd-top' : ''
          }`}
        >
          Desarrollamos programas,<br />sitios webs y aplicaciones
        </span>
        <span
          className={`block text-3xl font-bold uppercase mt-5 mb-20 relative text-fuxia ${
            isInView ? 'text-focus-in' : ''
          }`}
        >
          que simplifican la administración diaria de tu empresa
        </span>
      </div>
      <Programs />
      
    </div>
  );
};

export default App;
