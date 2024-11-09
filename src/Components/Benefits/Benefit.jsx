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
        backgroundImage: `url(${banner})`,
      }}
    
    >
     
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black">
      <h2 className="pt-20 text-center text-4xl">Beneficios al utilizar nuestros servicios</h2>
      </div>
      
      {/* Grid principal con espacio entre cuadros */}
      <div className="grid grid-cols-4 gap-5 w-full px-10 mt-40 relative z-10">

        <div className="bg-white/10 border-2 border-[#ffffff30] backdrop-blur-md rounded-lg w-full h-[300px] col-span-2 flex items-center p-4">
          {/* Columna izquierda */}
          <div className="w-3/4">
          <h2 className="text-2xl ml-4 font-bold">Organización</h2>
            <p className="ml-4 mt-2">
            Centraliza la información y optimiza la gestión de tareas, facilitando el orden y seguimiento en cada proceso de tu negocio.
            </p>
            <h2 className="text-2xl ml-4 mt-10 font-bold">Control</h2>
            <p className="ml-4 mt-2">
            Te brinda un acceso completo a los datos y métricas de tu empresa, ayudándote a tomar decisiones informadas y en tiempo real.       
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
       
        <div className="bg-white/10 border-2 border-[#ffffff30] backdrop-blur-md rounded-lg w-full h-[200px] flex items-center p-4 sombra_5">
        {/* Columna izquierda */}
        <div className="w-3/4">
        <h2 className="text-2xl ml-4 font-bold">Seguridad</h2>
            <p className="ml-4 mt-2">
            Protege tus datos y operaciones con sistemas de encriptación y acceso restringido.
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
        <h2 className="text-2xl ml-4 font-bold">Rapidez</h2>
            <p className="mt-2">
            Automatiza operaciones que normalmente llevarían tiempo, permitiendo un servicio más ágil y eficiente.
            </p>
          </div>
        </div>
        
   
        <div className="bg-white/10 border-2 border-[#ffffff30] backdrop-blur-md rounded-lg w-full h-[200px] flex items-center p-4 sombra_3">
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
        <h2 className="text-2xl ml-4 font-bold">Garantía</h2>
            <p className="mt-2">
            La implementación profesional de un sistema asegura estabilidad y soporte técnico confiable para tu negocio.
            </p>
          </div>
        </div>

        <div className="bg-white/10 border-2 border-[#ffffff30] backdrop-blur-md rounded-lg w-full h-[200px] flex items-center p-4 sombra_4">
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
        <h2 className="text-2xl ml-4 font-bold">Licencia</h2>
            <p className="mt-2">
            Ofrece seguridad y respaldo legal, permitiéndote usar el software con derechos de uso y protección.
            </p>
        </div>
        </div>


        <div className="bg-white/10 border-2 border-[#ffffff30] backdrop-blur-md rounded-lg w-full h-[300px] col-span-2 flex items-center p-4 -translate-y-24 sombra_2">
          {/* Columna izquierda */}
          <div className="w-3/4">
            <h2 className="text-2xl ml-4 font-bold">Mejora Contable</h2>
            <p className="ml-4 mt-2">
            Facilita el registro, análisis y control de las finanzas, contribuyendo a una contabilidad precisa y actualizada para un manejo financiero sólido.
            </p>
           {/*  <h3 className="text-2xl ml-4 pt-4">Control</h3>
            <p className="ml-4 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.           
            </p> */}
          </div>

          {/* Columna derecha (Video) */}
          <div className="w-2/4 flex justify-center">
            <video
              autoPlay
              loop
              muted
              className="rounded-md w-[60%] mt-40 ml-20" // Ajusta el tamaño del video
              src={svg6}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
