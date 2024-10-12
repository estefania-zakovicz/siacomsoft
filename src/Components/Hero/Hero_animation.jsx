import React from "react";
import { motion } from "framer-motion";
import icono_fondo_oscuro from "../../assets/photos/icono_fondo_oscuro.png";
import siacom_blanco from "../../assets/photos/siacom_blanco.png";
import descriptor_blanco from "../../assets/photos/descriptor_blanco.png";
import backgroundVideo from "../../assets/videos/video-6.mp4";
import phone from "../../assets/photos/celu.png";   // Imagen de teléfono
import laptop from "../../assets/photos/negocio.jpg"; // Imagen de laptop
import tablet from "../../assets/photos/tecnologias.jpg"; // Imagen de tablet

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
        <div className="flex items-center space-x-4 mt-44">
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

        {/* Animación de dispositivos tecnológicos */}
        <div className="absolute bottom-20 right-10 flex space-x-4">
          {/* Dispositivo 1: Teléfono */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: -50, x: 0 }}
            animate={{ opacity: 1, y: [0, -20, 20, 0], x: [0, 10, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src={phone} alt="Phone" className="w-32 h-64 object-cover rounded-lg shadow-lg" />
          </motion.div>

          {/* Dispositivo 2: Laptop */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: -50, x: 0 }}
            animate={{ opacity: 1, y: [0, -10, 10, 0], x: [0, -20, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <img src={laptop} alt="Laptop" className="w-48 h-32 object-cover rounded-lg shadow-lg" />
          </motion.div>

          {/* Dispositivo 3: Tablet */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 50, x: 0 }}
            animate={{ opacity: 1, y: [0, -15, 15, 0], x: [0, 15, -15, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <img src={tablet} alt="Tablet" className="w-40 h-56 object-cover rounded-lg shadow-lg" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero_animation;
