import React from "react";
import { motion } from "framer-motion";

const Content = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center">
      <div className="w-full h-full flex flex-col lg:flex-row">
        <div className="flex flex-col md:mt-52 md:ml-32 lg:mt-60 lg:ml-36 px-4 lg:px-0">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 2 }}
            className="text-white text-4xl lg:text-8xl font-semibold mb-2 w-full lg:w-3/4 md:text-7xl"
          >
            Transformamos<br />  <span className="whitespace-nowrap font-semibold">la gestión de</span><br /> tu negocio
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 3 }}
            className="text-xl lg:text-2xl font-bold text-fuxia text-shadow-white uppercase"
          >
            con soluciones digitales eficientes.
          </motion.p>
        </div>
        <div className="flex justify-center items-center mt-10 lg:mt-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 1 }}
            className="flex justify-center items-center"
          >
            {/* Aquí puedes agregar contenido adicional si es necesario */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Content;
