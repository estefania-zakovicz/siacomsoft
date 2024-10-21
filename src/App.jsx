import React, { useEffect, useRef, useState } from 'react';
import Hero_animation from './Components/Hero/Hero_animation';
import DynamicSection from './Components/Make/DynamicSection';
import Programs from './Components/Project/Programs';


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
      <DynamicSection />
      <Programs />
    </div>
  );
};

export default App;
