import React, { useEffect } from "react";
import { motion } from "framer-motion";
import icono_fondo_oscuro from "../../assets/photos/icono_fondo_oscuro.png";
import siacom_blanco from "../../assets/photos/siacom_blanco.png";
import descriptor_blanco from "../../assets/photos/descriptor_blanco.png";
import videoFondo from "../../assets/videos/fondo-banner.mp4";


const Hero_animation = ({ onShowContent }) => {
  useEffect(() => {
    const timer = setTimeout(onShowContent, 2000); // Ajusta el tiempo según la duración de la animación
    return () => clearTimeout(timer); // Limpieza del temporizador
  }, [onShowContent]);

  return (
    <div className="relative h-screen w-full">
  {/* Video de fondo */}
  <video
    src={videoFondo}
    autoPlay
    loop
    muted
    className="absolute left-0 top-0 w-full h-full object-cover"
  />

  {/* Degradado superpuesto */}
  <div
    className="absolute left-0 w-full h-full"
    style={{
      backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9))",
    }}
  />

  {/* Contenedor animación */}
  <div className="hidden lg:block">
    <div className="relative flex items-center justify-center h-full">
      <motion.div
        className="flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Contenedor principal ajustado */}
        <motion.div
          className="flex items-center"
          initial={{ x: 50, y: 500 }} // Inicia en el centro
          animate={{ x: "-30vh", y: "-10vh", scale: 0.5 }} // Movimiento suave hacia arriba
          transition={{
            delay: 2,
            duration: 3,
            ease: "easeInOut",
            type: "spring",
            stiffness: 10,
            damping: 10,
          }}
        >
          <motion.img
            src={icono_fondo_oscuro}
            alt="Icono fondo oscuro"
            initial={{ x: 0, scale: 1.5 }}
            animate={{ x: 50, scale: 0.4 }}
            transition={{ type: "spring", stiffness: 20, damping: 30 }}
            className="w-40"
          />
          <div className="flex flex-col items-center">
            <motion.img
              src={siacom_blanco}
              alt="Siacom blanco"
              initial={{ x: "20vw", scale: 1.5 }}
              animate={{ x: 0, scale: 0.5 }}
              transition={{
                type: "spring",
                stiffness: 10,
                damping: 10,
                delay: 0.4,
              }}
              className="w-30 h-24"
            />
            <motion.img
              src={descriptor_blanco}
              alt="Desarrollo de Software"
              initial={{ opacity: 0, y: 30, scale: 1.5 }}
              animate={{ x: 10, opacity: 1, y: -10, scale: 0.4 }}
              transition={{
                type: "spring",
                stiffness: 30,
                damping: 30,
                delay: 1.5,
              }}
              className="w-auto h-8"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  </div>
</div>

  );
};

export default Hero_animation;
