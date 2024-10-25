import React from "react";
import { motion } from "framer-motion";
import videoIa from "../../assets/videos/ia.mp4";
import video from "../../assets/videos/videoAnimad.mp4";
import "../Make/Animationtext.css";

const Make = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={video}
      />
      <div className="w-1/2  h-full flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          className="relative w-full ml-20 h-96 rounded-md object-cover z-10 grow"
          src={videoIa}
        />
      </div>
      <div className="w-1/2 h-full flex flex-col justify-center text-left  z-10">
        <h2 className="focus-in-expand text-white text-7xl font-semibold mb-2 ml-20"
        >
          PROGRAMAS
          <br /> SITIOS WEBS
          <br /> APLICACIONES
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 2 }}
          className="text-fuxia text-xl font-bold uppercase text-left ml-20"
        >
          para que puedas concentrarte<br /> en crecer.
        </motion.p>
      </div>
    </div>
  );
};

export default Make;
