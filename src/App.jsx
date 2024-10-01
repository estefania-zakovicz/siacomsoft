import React, { useEffect } from 'react';
import Header from './Components/Header';
import Hero_animation from './Components/Hero/Hero_animation';
import Projects_Collage from './Components/Project/Projects_Collage';
import comercio from '@/assets/videos/comercio.mp4';
import recreativo from '@/assets/videos/recreativo.mp4';
import web from '@/assets/videos/web.mp4';
import negocio from './assets/photos/negocio.jpg';
import pagoQr from './assets/photos/pagoQr.jpg';
import tecnologias from './assets/photos/tecnologias.jpg';
import Projects_PhoneBlock from './Components/Project/Projects_PhoneBlock';
import Projects_UsedBy from './Components/Project/Projects_UsedBy';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); // Registra ScrollTrigger una sola vez

// Fotos
const photos = [
  { src: pagoQr, alt: "Pago QR" },
  { src: tecnologias, alt: "Tecnologías" },
  { src: negocio, alt: "Negocio" }
];

// Videos
const videos = [comercio, recreativo, web];

const App = () => {
  useEffect(() => {
    // Si necesitas alguna animación al cargar el componente, colócala aquí.
  }, []);

  return (
    <div className="font-nunito">
      <Header />
      <Hero_animation />
      <div className='hero-media'>
        <Projects_Collage photos={photos} videos={videos} />
        <Projects_PhoneBlock />
        <Projects_UsedBy/>
      </div>
    </div>
  );
};

export default App;
