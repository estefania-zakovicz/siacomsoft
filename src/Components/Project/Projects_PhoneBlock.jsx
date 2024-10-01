import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imgSrc from "@/assets/photos/celu.png";
import videoCelu from "@/assets/videos/video-celu.mp4";

gsap.registerPlugin(ScrollTrigger); // Asegurarse de registrar ScrollTrigger

const Projects_PhoneBlock = () => {
  // Ref para el elemento del teléfono
  const phoneRef = useRef(null);

  useEffect(() => {
    // Función para la animación de introducción
    function intro() {
      const tl = gsap.timeline();
      tl.fromTo(phoneRef.current, { y: 200 }, { y: 0, duration: 1 });
      return tl;
    }

    // Función para configurar ScrollTrigger y la animación
    function stopTrigger() {
      const tl = gsap.timeline({
        delay: 1,
        scrollTrigger: {
          trigger: phoneRef.current,
          start: "top top",
          end: "+=1000",
          pin: true,
          scrub: true,
        },
      });
      tl.to(phoneRef.current, { scale: 1.2 }, "+=0.2");
      tl.to(
        ".projects-container",
        {
          backgroundColor: "black",
          duration: 0.25,
        },
        "-=0.5"
      );
      return tl;
    }

    // Crear una línea de tiempo principal que combine las dos animaciones
    const master = gsap.timeline();
    master.add(intro());
    master.add(stopTrigger());
  }, []);

  return (
    <div className="projects-phone-black" ref={phoneRef}>
      <div
        className="projects-phone-template"
        style={{ backgroundImage: `url(${imgSrc})` }}
      >
        <video
          className="collage-element"
          playsInline
          autoPlay
          loop
          muted
          src={videoCelu}
        ></video>
      </div>
    </div>
  );
};

export default Projects_PhoneBlock;
