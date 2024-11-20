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
      <h2 className="pt-10 md:pt-24 text-3xl sm:mt-10
      lg:pt-20 text-center lg:text-4xl text-white">
        Beneficios al utilizar nuestros servicios
      </h2>
    </div>
      
      {/* Grid principal con espacio entre cuadros */}
      <div className="grid grid-cols-1 mt-32 md:pt-40 gap-5 px-5 sm:pt-5 lg:grid-cols-4 lg:gap-5 w-full lg:px-10 lg:mt-30 relative z-10">

        <div className="bg-white/10 border-2 border-[#ffffff30] backdrop-blur-md rounded-lg w-full h-60 px-2 md:h-48 lg:h-[300px] lg:col-span-2 flex items-center lg:p-4">
          {/* Columna izquierda */}
          <div className="lg:w-3/4">
          <h2 className="lg:text-2xl lg:ml-4 md:text-xl md:ml-5 font-bold">Organización</h2>
            <p className="xl:text-xl lg:ml-4 lg:mt-2 md:text-md md:ml-5">
            Centraliza la información y optimiza la gestión de tareas, facilitando el orden y seguimiento en cada proceso de tu negocio.
            </p>
            <h2 className="mt-4 lg:text-2xl lg:ml-4 lg:mt-10 md:text-xl md:ml-5 md:mt-5 font-bold">Control</h2>
            <p className="xl:text-xl lg:ml-4 lg:mt-2 md:text-md md:ml-5">
            Te brinda un acceso completo a los datos y métricas de tu empresa, ayudándote a tomar decisiones informadas y en tiempo real.       
            </p>
          </div>

          {/* Columna derecha (Video) */}
          <div className="lg:w-1/4 flex justify-center">
            <video
              autoPlay
              loop
              muted
              className="mr-2 rounded-md lg:rounded-md lg:w-[80%] lg:mt-30 md:mr-5 md:w-20 md:rounded-xl" 
              src={svg1}
            />
          </div>
        </div>
       
        <div className="bg-white/10 border-2 border-[#ffffff30] backdrop-blur-md rounded-lg w-full px-2 py-2 lg:h-[200px] md:h-30 flex items-center lg:p-4 md:h-32">
        {/* Columna izquierda */}
        <div className="lg:w-3/4 ">
        <h2 className=" lg:text-2xl lg:ml-1 md:text-xl md:ml-5  font-bold">Seguridad</h2>
            <p className="lg:mt-2 lg:text-sm lg:ml-1 xl:text-lg md:text-md md:ml-5">
            Protege tus datos y operaciones con sistemas de encriptación y acceso restringido.
            </p>
          </div>

          {/* Columna derecha (Video) */}
          <div className="lg:w-2/4 flex justify-center">
            <video
              autoPlay
              loop
              muted
              className="rounded-md w-32 lg:w-[90%] lg:mb-20 lg:ml-10 md:w-24 md:ml-28"
              src={svg2}
            />
          </div>
        </div>

      
        <div className="bg-white/10 border-2 border-[#ffffff30] backdrop-blur-md rounded-lg w-full px-2 py-2 md:h-30 lg:h-[200px] flex items-center lg:p-4 xl:p-1 md:h-32">
          {/* Columna izquierda (Video) */}
          <div className="xl:w-1/4 lg:w-2/4 flex justify-center">
            <video
              autoPlay
              loop
              muted
              className="rounded-md w-32 xl:w-14 lg:w-[70%] lg:ml-0 md:w-24 md:ml-10"
              src={svg3}
            />
          </div>
        {/* Columna derecha */}
        <div className="ml-3 lg:w-3/4">
        <h2 className="lg:text-2xl lg:mr-10 md:text-xl md:ml-5 font-bold">Rapidez</h2>
            <p className="xl:text-lg lg:mt-2 lg:text-sm  md:text-md md:ml-5">
            Automatiza operaciones que normalmente llevarían tiempo, permitiendo un servicio más ágil y eficiente.
            </p>
          </div>
        </div>
        
   
        <div className="bg-white/10 border-2 border-[#ffffff30] backdrop-blur-md rounded-lg w-full px-2 py-2 md:h-30 lg:h-[200px] flex items-center lg:p-4 md:h-32 xl:p-1">
          {/* Columna izquierda (Video) */}
          <div className="xl:w-1/4 lg:w-2/4 flex justify-center">
            <video
              autoPlay
              loop
              muted
              className="rounded-md w-32 lg:w-[100%] md:w-20 md:ml-10 lg:mb-20 lg:ml-0 xl:w-16"
              src={svg4}
            />
          </div>
          {/* Columna derecha */}
        <div className="ml-3 lg:w-3/4">
        <h2 className="xl:mt-2 lg:text-2xl lg:mr-10 md:text-xl md:ml-5 font-bold">Garantía</h2>
            <p className=" lg:text-sm xl:text-lg md:text-md md:ml-5">
            La implementación profesional de un sistema asegura estabilidad y soporte técnico confiable para tu negocio.
            </p>
          </div>
        </div>

        <div className="bg-white/10 border-2 border-[#ffffff30] backdrop-blur-md rounded-lg w-full px-2 py-2 lg:h-[200px] flex items-center lg:p-4 md:h-32">
         {/* Columna izquierda (Video) */}
         <div className="xl:w-1/4 lg:w-2/4 flex justify-center">
            <video
              autoPlay
              loop
              muted
              className="w-32 rounded-md lg:w-[100%] lg:mb-20 lg:ml-0 md:w-24 md:ml-10 xl:w-16"
              src={svg5}
            />
          </div>
        {/* Columna derecha */}
        <div className="ml-3 lg:w-3/4">
        <h2 className="lg:text-2xl lg:mr-10 md:text-xl md:ml-5  font-bold">Licencia</h2>
            <p className=" xl:text-lg lg:mt-2 lg:text-sm  md:text-md md:ml-5">
            Ofrece seguridad y respaldo legal, permitiéndote usar el software con derechos de uso y protección.
            </p>
        </div>
        </div>


        <div className="bg-white/10 border-2 border-[#ffffff30] backdrop-blur-md rounded-lg w-full px-2 py-2 lg:h-[300px] lg:col-span-2 flex items-center lg:p-4 lg:-translate-y-24 md:h-32">
          {/* Columna izquierda */}
          <div className="lg:w-3/4">
            <h2 className="lg:text-2xl lg:ml-4 md:text-xl md:ml-5 font-bold">Mejora Contable</h2>
            <p className="xl:text-xl lg:ml-4 lg:mt-2 md:text-md md:ml-5">
            Facilita el registro, análisis y control de las finanzas, contribuyendo a una contabilidad precisa y actualizada para un manejo financiero sólido.
            </p>
           {/*  <h3 className="text-2xl ml-4 pt-4">Control</h3>
            <p className="ml-4 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.           
            </p> */}
          </div>

          {/* Columna derecha (Video) */}
          <div className="lg:w-2/4 flex justify-center">
            <video
              autoPlay
              loop
              muted
              className="rounded-md w-52 lg:w-[60%] lg:mt-40 lg:ml-20 md:w-28 md:mr-3" 
              src={svg6}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
