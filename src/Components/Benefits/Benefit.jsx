import React from "react";
import banner from "../../assets/photos/fondoLuna.png";
import svg1 from "../../assets/svg/control.webm";
import svg2 from "../../assets/svg/security.webm";
import svg3 from "../../assets/svg/speed.webm";
import svg4 from "../../assets/svg/warrantie.webm";
import svg5 from "../../assets/svg/sistema.webm";
import svg6 from "../../assets/svg/contability.webm";

const Benefit = () => {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen w-full bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${banner})`, // Fondo de imagen
      }}
    >
      {/* Grid principal con espacio entre cuadros */}
      <div className="grid grid-cols-4 gap-5 w-full px-10 mt-32 relative">

        <div className="bg-white/10 border-2 border-[#ffffff30] backdrop-blur-md rounded-lg w-full h-[300px] col-span-2 flex items-center p-4">
          {/* Columna izquierda */}
          <div className="w-3/4">
            <h3 className="text-2xl ml-4 ">Organización</h3>
            <p className="ml-4 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              esse et accusantium libero? Vitae delectus, atque est non quaerat,
              sequi, adipisci sapiente natus eveniet voluptate vel voluptates
              temporibus omnis explicabo.
            </p>
            <h3 className="text-2xl ml-4 ">Control</h3>
            <p className="ml-4 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.           
            </p>
          </div>

          {/* Columna derecha (Video) */}
          <div className="w-1/4 flex justify-center">
            <video
              autoPlay
              loop
              muted
              className="rounded-md w-[60%] mt-32 ml-10" // Ajusta el tamaño del video como desees
              src={svg1}
            />
          </div>
        </div>
       
        <div className="bg-white/10 border-2 border-[#ffffff30] backdrop-blur-md rounded-lg w-full h-[200px] flex items-center p-4">
        {/* Columna izquierda */}
        <div className="w-3/4">
            <h3 className="text-2xl ml-4 ">Seguridad</h3>
            <p className="ml-4 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque.
            </p>
          </div>

          {/* Columna derecha (Video) */}
          <div className="w-2/4 flex justify-center">
            <video
              autoPlay
              loop
              muted
              className="rounded-md w-[60%] mb-20 ml-10"
              src={svg2}
            />
          </div>
        </div>

        <div className="bg-white/10 border-2 border-[#ffffff30] backdrop-blur-md rounded-lg w-full h-[200px]">
        <div className="bg-white/10 border-2 border-[#ffffff30] backdrop-blur-md rounded-lg w-full h-[200px] flex items-center p-4">
          {/* Columna derecha (Video) */}
          <div className="w-2/4 flex justify-center">
            <video
              autoPlay
              loop
              muted
              className="rounded-md w-[60%] mr-10"
              src={svg3}
            />
          </div>
        {/* Columna izquierda */}
        <div className="w-3/4">
            <h3 className="text-2xl ">Rapidez</h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque.
            </p>
          </div>

        
        </div>
        </div>
        
        <div className="bg-white/10 border-2 border-[#ffffff30] backdrop-blur-md rounded-lg w-full h-[200px]">
        <div className="bg-white/10 border-2 border-[#ffffff30] backdrop-blur-md rounded-lg w-full h-[200px] flex items-center p-4">
          {/* Columna derecha (Video) */}
          <div className="w-2/4 flex justify-center">
            <video
              autoPlay
              loop
              muted
              className="rounded-md w-[60%] mb-20 mr-10"
              src={svg4}
            />
          </div>
          {/* Columna izquierda */}
        <div className="w-3/4">
            <h3 className="text-2xl ml-4 ">Garantía</h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque.
            </p>
          </div>
        </div>
        </div>
        <div className="bg-white/10 border-2 border-[#ffffff30] backdrop-blur-md rounded-lg w-full h-[200px]">
        <div className="bg-white/10 border-2 border-[#ffffff30] backdrop-blur-md rounded-lg w-full h-[200px] flex items-center p-4">
         {/* Columna derecha (Video) */}
         <div className="w-2/4 flex justify-center">
            <video
              autoPlay
              loop
              muted
              className="rounded-md w-[60%] mb-20 mr-10"
              src={svg5}
            />
          </div>
        {/* Columna izquierda */}
        <div className="w-3/4">
            <h3 className="text-2xl ">Licencia</h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque.
            </p>
          </div>
         
        </div>
        </div>


        <div className="bg-white/10 border-2 border-[#ffffff30] backdrop-blur-md rounded-lg w-full h-[300px] col-span-2 flex items-center p-4 -translate-y-24">
          {/* Columna izquierda */}
          <div className="w-3/4">
            <h3 className="text-2xl ml-4 ">Mejora Contable</h3>
            <p className="ml-4 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              esse et accusantium libero? Vitae delectus, atque est non quaerat,
              sequi, adipisci sapiente natus eveniet voluptate vel voluptates
              temporibus omnis explicabo.
            </p>
          </div>

          {/* Columna derecha (Video) */}
          <div className="w-2/4 flex justify-center">
            <video
              autoPlay
              loop
              muted
              className="rounded-md w-[60%] mt-40 ml-20" // Ajusta el tamaño del video como desees
              src={svg6}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
