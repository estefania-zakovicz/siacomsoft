import React from "react";
import { motion } from "framer-motion";
import BirdAnimation from "./Bird";


const Content = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center z-30">
      <div className="w-full h-full flex">
        <div className="w-1/2 flex flex-col mt-60 ml-36">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 2 }}
            className="text-white text-7xl font-semibold mb-2 w-3/4"
          >
            Transformamos<br /> la gestión de<br /> tu negocio
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 3 }}
            className="text-xl font-bold text-fuxia text-shadow-white uppercase"
          >
            con soluciones digitales eficientes.
          </motion.p>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 1 }}
            className="flex justify-center items-center"
          >
            
            <BirdAnimation className="mb-32 mr-28 w-40 h-40" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Content;
