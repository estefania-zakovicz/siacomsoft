import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import video1 from "../../assets/aun no/video1.webm";
import video2 from "../../assets/aun no/video2.webm";
import video3 from "../../assets/aun no/video3.webm";
import "../Project/animation.css"

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const quoteRef = useRef(null);
  // We don't need imageRefs for videos, so remove it

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
      duration: 0.9,
      ease: "power2.out",
      stagger: { amount: 0.8 },
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
          duration: 0.1, // Reducido para transición más rápida
          ease: "power1.in", // Easing más lineal
          stagger: { amount: 0.1 },
        });
      },
    });
  }, []);

  return (
    <div className="flex flex-col items-center h-screen w-full overflow-hidden">
      {/* Primer Párrafo */}
      <div className="relative w-full h-screen flex items-center justify-center text-white shadow-lg px-20 pt-30">
        <h1 ref={quoteRef} className="text-7xl leading-loose text-center relative z-10">
          TRANSFORMAMOS LA GESTIÓN DE TU NEGOCIO CON SOLUCIONES DIGITALES EFICIENTES.
        </h1>
        <video
          ref={(el) => (el.muted = true)} // Mute videos on load (optional)
          autoPlay
          loop
          className="absolute top-5 left-20 z-0 object-cover size-52 slide-down"
          src={video2}
          alt="Video 1"
        />
        <video
          ref={(el) => (el.muted = true)} // Mute videos on load (optional)
          autoPlay
          loop
          className="arriba absolute bottom-30 right-32 z-0 object-cover slide-up"
          src={video1}
          alt="Video 2"
        />
        <video
          ref={(el) => (el.muted = true)} // Mute videos on load (optional)
          autoPlay
          loop
          className="absolute bottom-0 left-60 z-0 object-cover size-52 animation slide-infinite"
          src={video3}
          alt="Video 3"
        />
      </div>
    </div>
  );
};

export default Projects;