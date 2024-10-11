import React from "react";
import { motion } from "framer-motion";
import icono_fondo_oscuro from "../../assets/photos/icono_fondo_oscuro.png";
import siacom_blanco from "../../assets/photos/siacom_blanco.png";
import descriptor_blanco from "../../assets/photos/descriptor_blanco.png";
import backgroundVideo from "../../assets/videos/video-6.mp4";

const Hero_animation = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Video de fondo */}
      <video
        className="absolute left-0 w-full h-full object-cover"
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Contenido superpuesto al video */}
      <motion.div
        className="relative z-10 flex flex-col items-center h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 6 }}
      >
        {/* Contenedor de las imágenes principales (icono + SIACOM SOFT) */}
        <div className="flex items-center space-x-4 mt-20">
          {/* Icono a la izquierda */}
          <motion.img
            src={icono_fondo_oscuro}
            alt="Icono fondo oscuro"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 30, damping: 20 }}
            className="w-20"
          />
          {/* Contenedor de Siacom Soft y el descriptor debajo */}
          <div className="flex flex-col">
            {/* Siacom Soft en la parte superior */}
            <motion.img
              src={siacom_blanco}
              alt="Siacom blanco"
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{
                type: "spring",
                stiffness: 20,
                damping: 20,
                delay: 0.2,
              }}
              className="w-auto h-20"
            />
            {/* Descriptor "Desarrollo de Software" debajo */}
            <motion.img
              src={descriptor_blanco}
              alt="Desarrollo de Software"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 20,
                damping: 20,
                delay: 0.4,
              }}
              className="self-end w-auto h-8 mt-1"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero_animation;
