import React from "react";
import { motion } from "framer-motion";

const Content = () => {
  return (
    <div className="absolute top-0 left-0 w-full flex items-center justify-center">
      <div className="w-full h-full flex flex-col lg:flex-row">
        <div className="flex flex-col mt-64 sm:mt-64 md:mt-64 lg:mt-60 lg:ml-36 px-4 lg:px-0">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 2 }}
            className="text-white text-5xl text-center sm:text-center sm:text-5xl lg:mt-32 lg:text-left lg:text-8xl font-semibold mb-2 w-full lg:w-3/4 md:text-7xl xl:mt-0 xl:text-8xl 2xl:mt-0"
          >
            Transformamos<br />  <span className="whitespace-nowrap font-semibold">la gestión de</span><br /> tu negocio
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 3 }}
            className="text-3xl text-center lg:text-3xl lg:mt-5 lg:text-left xl:text-4xl xl:mt-10 font-bold text-fuxia text-shadow-white uppercase"
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Content;
