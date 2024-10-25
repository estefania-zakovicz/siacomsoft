import React from 'react';
import banner from "../../assets/photos/fondoLuna.png";

const Benefit = () => {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), transparent), url(${banner})`
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full px-4">
        {/* Cuadro 1 */}
        <div className="bg-white/15 border-2 border-[#ffffff10] backdrop-blur-md rounded-xl h-[250px] flex items-center justify-center">
          <h3>Organización</h3>
        </div>
        
        {/* Cuadro 2 */}
        <div className="bg-white/15 border-2 border-[#ffffff10] backdrop-blur-md rounded-xl h-[240px] flex items-center justify-center">
          <h3>Seguridad</h3>
        </div>
        
        {/* Cuadro 3 */}
        <div className="bg-white/15 border-2 border-[#ffffff10] backdrop-blur-md rounded-xl h-[350px] flex items-center justify-center">
          <h3 className="uppercase">Garantía</h3>
        </div>
        
        {/* Cuadro 4 */}
        <div className="bg-white/15 border-2 border-[#ffffff10] backdrop-blur-md rounded-xl h-[200px] flex items-center justify-center">
          <h3>Control</h3>
        </div>
        
        {/* Cuadro 5 */}
        <div className="bg-white/15 border-2 border-[#ffffff10] backdrop-blur-md rounded-xl h-[300px] flex items-center justify-center">
          <h3>Rapidez</h3>
        </div>
        
        {/* Cuadro 6 */}
        <div className="bg-white/15 border-2 border-[#ffffff10] backdrop-blur-md rounded-xl h-[200px] flex items-center justify-center">
          <h3>Licencia</h3>
        </div>
        
        {/* Cuadro 7 */}
        <div className="bg-white/15 border-2 border-[#ffffff10] backdrop-blur-md rounded-xl h-[300px] flex items-center justify-center">
          <h3>Mejora Contable</h3>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
