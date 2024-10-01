import React, { useEffect } from 'react';
import "./style.css";
import {gsap} from "gsap";

const ImageElement = ({ src, alt }) => {
  return (
    <div className='projects-element'>
      <img className='collage-element' src={src} alt={alt} />
    </div>
  );
};

const VideoElement = ({ src }) => {
  return (
    <div className='projects-element'>
      <video 
        className='collage-element' 
        playsInline 
        autoPlay 
        loop 
        muted
        src={src}
      ></video>
    </div>
  );
};

const ProjectsCollageContainer = ({ photos = [], videos = [] }) => {
  // Alternamos entre videos y fotos para las columnas
  const leftColumnElements = [];
  const rightColumnElements = [];

  // Mezclar fotos y videos en el orden que quiero
  for (let i = 0; i < videos.length || i < photos.length; i++) {
    if (i % 2 === 0) { // Videos en los índices pares
      if (videos[i]) {
        leftColumnElements.push({ type: 'video', src: videos[i] });
      }
      if (photos[i]) {
        rightColumnElements.push({ type: 'image', src: photos[i].src, alt: photos[i].alt });
      }
    } else { // Fotos en los índices impares
      if (photos[i]) {
        leftColumnElements.push({ type: 'image', src: photos[i].src, alt: photos[i].alt });
      }
      if (videos[i]) {
        rightColumnElements.push({ type: 'video', src: videos[i] });
      }
    }
  }


  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".projects-collage", // El elemento que dispara la animación
        start: "top 80%", // La animación comienza cuando el "top" del trigger alcanza el 80% de la pantalla
        toggleActions: "play none none reverse", // Define cómo se comporta la animación
      },
      delay: 0.5,
    });
  
    tl.fromTo(
      ".projects-element",
      { y: 300, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
      }
    );
  }, []);
  
  
/* useEffect (() => {
  const tl= gsap.timeline({
    delay:0.5
  })

  tl.fromTo(
    ".projects-element", 
    { y: 300}, 
    { y: 0, 
      duration: 1, 
      delay: function(index) {
        return 0.2*index;
  },
}
);
}, []); */


  return (
    <div className='projects-collage'>
      <div className='left-column'>
        {leftColumnElements.map((element, index) => (
          element.type === 'video' ? (
            <VideoElement key={index} src={element.src} />
          ) : (
            <ImageElement key={index} src={element.src} alt={element.alt} />
          )
        ))}
      </div>
      <div className='right-column'>
        {rightColumnElements.map((element, index) => (
          element.type === 'video' ? (
            <VideoElement key={index} src={element.src} />
          ) : (
            <ImageElement key={index} src={element.src} alt={element.alt} />
          )
        ))}
      </div>
    </div>
  );
};

export default ProjectsCollageContainer;
