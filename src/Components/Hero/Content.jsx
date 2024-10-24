import React from "react";
import { motion } from "framer-motion";
import icono_fondo_oscuro from "../../assets/photos/icono_fondo_oscuro.png";
import siacom_blanco from "../../assets/photos/siacom_blanco.png";
import descriptor_blanco from "../../assets/photos/descriptor_blanco.png";

const Content = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center z-30">
      {/* Aseguramos que esté centrado y cubra la pantalla */}
      <div className="flex items-center w-full">
        {/* Texto centrado */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1.5 }}
          className="text-white text-center text-2xl font-semibold mb-8 w-3/4"
        >
          Transformamos la gestión de tu negocio con soluciones digitales
          eficientes.
        </motion.p>

        {/* Imágenes centradas */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 2 }}
          className="flex justify-center items-center space-x-4"
        >
          <img src={icono_fondo_oscuro} alt="imagen1" className="w-20 h-20" />
          <img src={siacom_blanco} alt="imagen2" className="w-20 h-20" />
          <img src={descriptor_blanco} alt="imagen3" className="w-20 h-20" />
        </motion.div>
      </div>
    </div>
  );
};

export default Content;
