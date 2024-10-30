import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import videoIa from "../../assets/videos/ia.mp4";
import video from "../../assets/videos/videoAnimad.mp4";
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

  return (
    <div id="second-section" className="relative w-full h-screen flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover bg-gradient-to-r from-black"
        src={video}
      />
      <div className="w-1/2 h-full flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          className="relative w-full ml-20 h-96 rounded-md object-cover z-10 grow"
          src={videoIa}
        />
      </div>
      <div className="w-1/2 h-full flex flex-col justify-center text-left z-10">
        <motion.h2
          className="tracking-in-expand-fwd-bottom text-white text-7xl font-semibold mb-2 ml-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{ opacity: 0 }}
        >
          PROGRAMAS
        </motion.h2>
        <motion.h2
          className="tracking-in-expand-fwd-bottom text-white text-7xl font-semibold mb-2 ml-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ delay: 1, duration: 1 }}
          style={{ opacity: 0 }}
        >
          SITIOS WEBS
        </motion.h2>
        <motion.h2
          className="tracking-in-expand-fwd-bottom text-white text-7xl font-semibold mb-2 ml-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          style={{ opacity: 0 }}
        >
          APLICACIONES
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="tracking-in-expand-fwd-bottom text-fuxia text-xl font-bold uppercase text-left ml-20"
          style={{ opacity: 0 }}
        >
          para que puedas concentrarte<br /> en crecer.
        </motion.p>
      </div>
    </div>
  );
};

export default Make;
