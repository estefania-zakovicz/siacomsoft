import React, { useEffect, useRef } from 'react';
import videoIa from '../../assets/videos/ia.mp4';
import './DynamicSection.css';

const DynamicSection = () => {
  const programRef = useRef(null);
  const websiteRef = useRef(null);
  const appRef = useRef(null);
  const descriptionRef = useRef(null);

  const startAnimation = (element, direction) => {
    const distance = element.scrollWidth; // Ancho total del texto
    const duration = 5; // Duración de la transición (ajustable)
    const offset = direction === 1 ? -distance : distance; // Mover fuera de la vista según la dirección

    element.style.transition = `transform ${duration}s linear`;
    element.style.transform = `translateX(${offset}px)`; // Mover fuera de la vista

    // Reposicionar el texto inmediatamente después de que termine la transición
    element.addEventListener('transitionend', () => {
      element.style.transition = 'none'; // Desactivar la transición para reposicionar
      element.style.transform = `translateX(${direction === 1 ? distance : -distance}px)`; // Mover desde el otro lado
      element.offsetHeight; // Activar reflujo
      element.style.transition = `transform ${duration}s linear`; // Rehabilitar la transición
      startAnimation(element, direction); // Reiniciar la animación
    }, { once: true }); // Asegura que el evento solo se ejecute una vez por animación
  };

  useEffect(() => {
    startAnimation(programRef.current, 1); // "Programas" a la derecha
    startAnimation(websiteRef.current, -1); // "Sitios webs" a la izquierda
    startAnimation(appRef.current, 1); // "Aplicaciones" a la derecha
  }, []);

  return (
    <div className="relative text-center dynamic-section">
      <video autoPlay loop muted className="video-background" src={videoIa} />
      <div className="content">
        <div ref={programRef} className="text-slide block text-[120px] ml-24 font-bold uppercase text-stroke">
          Programas
        </div>
        <div ref={websiteRef} className="text-slide block text-[120px] ml-7 font-bold uppercase text-stroke">
          sitios webs
        </div>
        <div ref={appRef} className="text-slide block text-[120px] font-bold uppercase text-stroke">
          aplicaciones
        </div>
        <div ref={descriptionRef} className="final block text-4xl font-bold text-white uppercase mt-5 mb-20 text-stroke">
          que simplifican la administración diaria de tu empresa
        </div>
      </div>
    </div>
  );
};

export default DynamicSection;
