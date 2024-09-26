import React from 'react';
import Header from './Components/Header';
import Hero_animation from './Components/Hero/Hero_animation';
import Projects_Collage from './Components/Project/Projects_Collage';
import comercio from '@/assets/videos/comercio.mp4';
import recreativo from '@/assets/videos/recreativo.mp4';
import web from '@/assets/videos/web.mp4';
import negocio from './assets/photos/negocio.jpg';
import pagoQr from './assets/photos/pagoQr.jpg';
import tecnologias from './assets/photos/tecnologias.jpg';
import imgSrc from './assets/photos/celu.png';
import videoCelu from '@/assets/videos/video-celu.mp4';
import Projects_PhoneBlock from './Components/Project/Projects_PhoneBlock';

// Fotos
const photos = [
  { src: pagoQr, alt: "Pago QR" },
  { src: tecnologias, alt: "Tecnologías" },
  { src: negocio, alt: "Negocio" }
];

// Videos
const videos = [comercio, recreativo, web];

const App = () => {
  return (
    <div className="font-nunito">
      <Header />
      <Hero_animation />
      <div className='hero-media'>
        <Projects_Collage photos={photos} videos={videos} />
        <Projects_PhoneBlock />
      </div>
    </div>
  );
};

export default App;
