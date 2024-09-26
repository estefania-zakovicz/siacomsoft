import React from "react";
import { motion } from "framer-motion";
import icono_fondo_oscuro from "../../assets/photos/icono_fondo_oscuro.png";
import siacom_blanco from "../../assets/photos/siacom_blanco.png";
import descriptor_blanco from "../../assets/photos/descriptor_blanco.png";

const Hero_animation = () => {
  return (
    <motion.div
      className="flex flex-col mt-52 items-center h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 6 }} // Controla la duración de la animación de opacidad
    >
      {/* Contenedor de las imágenes principales (icono + SIACOM SOFT) */}
      <div className="flex items-center space-x-4">
        {/* Icono a la izquierda */}
        <motion.img
          src={icono_fondo_oscuro}
          alt="Icono fondo oscuro"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 20, damping: 20 }}
          className="w-32"
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
            className="w-auto h-32"
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
  );
};

export default Hero_animation;
