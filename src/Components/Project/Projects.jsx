import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import imagen1 from "../../assets/photos/celu.png"

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const quoteRef = useRef(null);
  // Declaramos imageRefs como una referencia
  const imageRefs = useRef([]);

  useEffect(() => {
    // Divide el texto en palabras y caracteres
    const split = new SplitType(quoteRef.current, { types: "words, chars", tagName: "span" });
    const chars = split.chars;

    // Animación cuando las palabras aparecen (scroll hacia abajo)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: quoteRef.current,
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animación de entrada: desplazar hacia arriba y aparecer
    tl.from(chars, {
      opacity: 0,
      yPercent: 100,
      duration: 0.4,
      ease: "power2.out",
      stagger: { amount: 0.3 },
    });

    // Animación de salida: desplazar hacia abajo y desaparecer
    ScrollTrigger.create({
      trigger: quoteRef.current,  // Activador del scroll
      start: "top 75%", // Ajustado para animar antes
      end: "top 25%",
      onLeaveBack: () => {
        gsap.to(chars, {
          opacity: 0,
          yPercent: 100,
          duration: 0.2, // Reducido para transición más rápida
          ease: "power1.in", // Easing más lineal
          stagger: { amount: 0.1 },
        });
      },
    });

    // Efecto de paralaje al mover el mouse (opcional)
    imageRefs.current.forEach((image) => {
      if (image) { // Evitamos errores si no hay imágenes cargadas
        image.addEventListener("mousemove", (e) => {
          gsap.to(image, {
            x: e.clientX - window.innerWidth / 2,
            y: e.clientY - window.innerHeight / 2,
          });
        });
      }
    });
  }, []);

  return (
    <div className="flex flex-col items-center h-screen w-full overflow-hidden">
      {/* Primer Párrafo */}
      <div className="relative w-full h-screen flex items-center justify-center text-white shadow-lg px-20 pt-30">
        <h1 ref={quoteRef} className="text-7xl leading-loose text-center relative z-10">
          TRANSFORMAMOS LA GESTIÓN DE TU NEGOCIO CON SOLUCIONES DIGITALES EFICIENTES.
        </h1>
        <img
          ref={(el) => (imageRefs.current[0] = el)}
          src={imagen1}
          alt="Imagen 1"
          className="absolute top-0 left-0 z-0"
        />
        <img
          ref={(el) => (imageRefs.current[1] = el)}
          src="ruta/a/tu/imagen2.jpg"
          alt="Imagen 2"
          className="absolute bottom-0 right-0 z-0"
        />
        <img
          ref={(el) => (imageRefs.current[2] = el)}
          src="ruta/a/tu/imagen3.jpg"
          alt="Imagen 3"
          className="absolute top-50 left-50 z-0"
        />
      </div>
    </div>
  );
};

export default Projects;