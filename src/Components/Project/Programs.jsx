import React from 'react';
import { useInView } from 'react-intersection-observer';
import programas from "../../assets/videos/video.mp4";

const Programs = () => {
  // Configuramos useInView para detectar cuando la sección esté visible
  const { ref, inView } = useInView({
    threshold: 0.2, // Activar la animación cuando el 20% de la sección esté en pantalla
  });

  return (
    <div
      ref={ref}
      className="relative h-screen bg-azul-950 overflow-hidden flex items-center justify-between"
    >
      {/* Texto de introducción. LAS ANIMACIONES ESTÁN EN EL INDEX.CSS */}
      <div className={`z-10 pl-10 ${inView ? 'animate-slide-left' : 'opacity-0'}`}>
        <h2 className={`text-white text-left text-8xl uppercase pt-28 ${inView ? 'tracking-in-contract-bck' : ''}`}>
          Desarrollamos
        </h2>
        <h2 className={`text-white text-left text-8xl uppercase mt-10 ${inView ? 'tracking-in-contract-bck' : ''}`}>
          programas
        </h2>
      </div>

      {/* Video con animación */}
      <video
        className={`absolute right-0 py-10 object-cover w-1/2 h-full ${inView ? 'tilt-in-tr' : 'opacity-0'}`}
        src={programas}
        autoPlay
        loop
        muted
        playsInline
      ></video>
    </div>
  );
};

export default Programs;
