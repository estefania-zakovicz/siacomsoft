import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import videoIa from "../../assets/videos/ia.mp4";
import "../Make/Animationtext.css";

const Make = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("second-section");
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Función para dividir el texto en caracteres envueltos en un span
  const renderAnimatedText = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="char" style={{ "--char-index": index }}>
        {char}
      </span>
    ));
  };

  return (
    <div
      id="second-section"
      className="relative w-full h-screen flex flex-col lg:flex-row items-center justify-center bg-black"
    >
      <div className="w-full lg:w-1/2 h-64 lg:h-full flex items-center justify-center px-4 lg:px-5 mt-10 lg:mt-0">
        <video
          autoPlay
          loop
          muted
          className="w-full max-w-lg rounded-md object-cover z-10"
          src={videoIa}
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-4 mt-4 lg:mt-0">
        <motion.h2
          className="h2 text-white text-3xl mt-5 lg:text-7xl mb-4 md:text-5xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {renderAnimatedText("Programas")}
        </motion.h2>
        <motion.h2
          className="h2 text-white text-3xl lg:text-7xl mb-4 md:text-5xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {renderAnimatedText("Sitios Webs")}
        </motion.h2>
        <motion.h2
          className="h2 text-white text-3xl lg:text-7xl mb-4 md:text-5xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          {renderAnimatedText("Aplicaciones")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="text-fuxia text-lg lg:text-2xl font-bold uppercase text-shadow-white md:text-2xl"
        >
          para que puedas concentrarte
          <br className="lg:hidden" /> en crecer.
        </motion.p>
      </div>
    </div>
  );
};

export default Make;
