import React from "react";
import svg1 from "../../assets/videos/svg.webm";
import "./Benefit.css";

const Benefit = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo azul detrás */}
      <div className="absolute inset-0 bg-azul-950 z-10"></div>
      
      {/* Fondo borroso con bordes redondeados */}
      <div className="absolute mx-20 my-10 inset-0 bg-gradient-to-r from-blue-200 via-blue-400 to-pink-400 rounded-3xl z-10 backdrop-blur-lg">
      <video
        autoPlay
        loop
        muted
        className="bounce-in-bottom"
        src={svg1}
      />
      <h2 className="">afajfjsg</h2>
      </div>
    </div>
  );
};

export default Benefit;
