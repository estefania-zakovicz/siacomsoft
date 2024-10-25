import React, { useState } from "react";
import { motion } from "framer-motion";
import icono_fondo_oscuro from "../../assets/photos/icono_fondo_oscuro.png";
import siacom_blanco from "../../assets/photos/siacom_blanco.png";
import descriptor_blanco from "../../assets/photos/descriptor_blanco.png";
import videoSVG1 from "../../assets/svg/video2.webm";
import videoSVG2 from "../../assets/svg/video1.webm";
import videoSVG3 from "../../assets/svg/video3.webm";

const FlipCard = ({ word, videoSrc, className }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => setIsFlipped(true);
  const handleMouseLeave = () => setIsFlipped(false);

  return (
    <div className={`relative w-20 h-20 ${className}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <motion.div
      className={`absolute w-20 h-20 bg-white bg-opacity-10 backdrop-blur-md flex items-center justify-center neon-effect ${isFlipped ? 'hidden' : ''}`}
      style={{ backfaceVisibility: 'hidden' }}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.5 }}
    >
        {!isFlipped && <span className="text-xl text-white">{word}</span>}
      </motion.div>
      {isFlipped && (
        <motion.div
          className="absolute w-full h-full"
          animate={{ rotateY: isFlipped ? 0 : 180 }}
          transition={{ duration: 0.5 }}
        >
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source src={videoSrc} type="video/mp4" />
          </video>
        </motion.div>
      )}
    </div>
  );
};

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
            className="text-xl font-bold text-fuxia text-shadow-blue uppercase"
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
            <FlipCard word="P" videoSrc={videoSVG3} className="mt-[540px] mr-44 w-40 h-40" />
            <FlipCard word="S" videoSrc={videoSVG2} className="mt-52 mr-28 w-32 h-40" />
            <FlipCard word="A" videoSrc={videoSVG1} className="mb-32 mr-28 w-40 h-40" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Content;
