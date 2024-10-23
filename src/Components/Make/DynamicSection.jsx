import React from "react";
import videoIa from "../../assets/videos/ia.mp4";
import "./DynamicSection.css";

const DynamicSection = () => {
  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden flex justify-center">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoIa}
      />
      <div className="group absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-gradient-to-t from-black/70 via-blue-400 to-black mix-blend-multiply">
        <span className="block text-white text-[160px] uppercase leading-none mt-20 animate-programas text-shadow-blue">
          Programas
        </span>
        <span className="block text-white text-[160px] uppercase leading-none animate-sitios text-shadow-fuxia">
          Sitios Webs
        </span>
        <span className="block text-white text-[160px] uppercase leading-none animate-aplicaciones text-shadow-blue">
          Aplicaciones
        </span>
        <h2 className="block text-center mx-60 text-white font-medium text-6xl text-shadow-white leading-none animate-ultimo relative">
          que simplifican la administración diaria de tu empresa.
        </h2>
      </div>
    </div>
  );
};

export default DynamicSection;
