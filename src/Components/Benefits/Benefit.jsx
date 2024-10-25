import React from "react";
import banner from "../../assets/photos/fondoLuna.png";

const Benefit = () => {
  return (
    <div
      className="relative flex items-center justify-center h-screen w-full bg-cover overflow-hidden"
      style={{
        backgroundImage: `url(${banner})`, // Fondo de imagen
      }}
    >
      {/* Grid principal con espacio entre cuadros */}
      <div className="grid grid-cols-4 gap-5 w-full px-28 mt-96 relative">
        {/* Cuadro 1 */}
        <div className="bg-white/10 border-2 border-[#ffffff30] backdrop-blur-md rounded-lg w-[400px] h-[300px] -translate-y-8"></div>

        {/* Cuadro 2 */}
        <div className="bg-white/10 border-2 border-[#ffffff30] backdrop-blur-md rounded-lg w-full h-[300px] translate-x-28 -translate-y-4 "></div>

        {/* Cuadro 3 */}
        <div className="bg-white/10 border-2 border-[#ffffff30] backdrop-blur-md rounded-lg w-full h-[200px] translate-x-11 "></div>

        {/* Cuadro 4 */}
        <div className="bg-white/10 border-2 border-[#ffffff30] backdrop-blur-md rounded-lg w-full h-[300px] translate-x-16 -translate-y-4 -rotate-6"></div>

        {/* Cuadro 5 */}
        <div className="bg-white/10 border-2 border-[#ffffff30] backdrop-blur-md rounded-lg w-[350px] h-[250px] -translate-x-16 -translate-y-8 col-span-2 rotate-6"></div>

        {/* Cuadro 6 */}
        <div className="bg-white/10 border-2 border-[#ffffff30] backdrop-blur-md rounded-lg w-full h-[320px] row-span-2 translate-x-16 -translate-y-24"></div>

        {/* Cuadro 7 */}
        <div className="bg-white/10 border-2 border-[#ffffff30] backdrop-blur-md rounded-lg w-[400px] h-[250px] -translate-x-[680px] -translate-y-6"></div>

        {/* Cuadro 8 */}
        <div className="bg-white/10 border-2 border-[#ffffff30] backdrop-blur-md rounded-lg h-[250px] -translate-y-72 translate-x-[1020px] "></div>
      </div>
    </div>
  );
};

export default Benefit;
