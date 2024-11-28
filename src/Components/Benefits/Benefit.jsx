import React, { useState } from "react"; 
import { useMediaQuery } from "react-responsive";
import banner from "../../assets/photos/fondoLuna.png";
import svg1 from "../../assets/svg/control.webm";
import svg2 from "../../assets/svg/security.webm";
import svg3 from "../../assets/svg/speed.webm";
import svg4 from "../../assets/svg/warrantie.webm";
import svg5 from "../../assets/svg/sistema.webm";
import svg6 from "../../assets/svg/contability.webm";

const Benefit = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const slides = [
    { video: svg1, label: "Organización", description: "Centraliza la información y optimiza la gestión de tareas, facilitando el orden y seguimiento en cada proceso de tu negocio." },
    { video: svg2, label: "Seguridad", description: "Protege tus datos y operaciones con sistemas de encriptación y acceso restringido." },
    { video: svg3, label: "Rapidez", description: "Automatiza operaciones que normalmente llevarían tiempo, permitiendo un servicio más ágil y eficiente." },
    { video: svg4, label: "Garantía", description: "La implementación profesional de un sistema asegura estabilidad y soporte técnico confiable para tu negocio." },
    { video: svg5, label: "Control", description: "Te brinda un acceso completo a los datos y métricas de tu empresa, ayudándote a tomar decisiones informadas y en tiempo real." },
    { video: svg6, label: "Contabilidad", description: "Simplifica la gestión financiera con sistemas que ofrecen control y precisión." },
  ];

  const handleNext = () => setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  const handlePrev = () => setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));

  return (
    /*IMAGEN DE FONDO */
    <div
      className="relative flex items-center justify-center min-h-screen w-full bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${banner})` }}
    >
      
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black">
     
        <h2 className="mx-5 pt-32 text-3xl md:pt-20 lg:pt-32 text-center justify-center lg:text-5xl text-white">
          Beneficios al utilizar nuestros servicios
        </h2>
      </div>

      {isMobile ? (
        <div className="relative w-full max-w-4xl mx-10 mt-10">
          <div className="overflow-hidden relative h-96 mt-20 bg-white/10 border-2 border-[#ffffff30] backdrop-blur-md rounded-lg w-full px-2 flex items-center">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                  index === activeIndex ? "translate-x-0" : "translate-x-full"
                }`}
                style={{ transform: `translateX(${(index - activeIndex) * 100}%)` }}
              >
                <video autoPlay loop muted src={slide.video} className="w-20 mx-auto mt-5" />
                <div className="text-center text-white mt-5">
                  <h5 className="text-4xl font-bold">{slide.label}</h5>
                  <p className="text-xl mt-5 mx-5">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-2 rounded-full text-white hover:bg-gray-600"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-2 rounded-full text-white hover:bg-gray-600"
          >
            &#8594;
          </button>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? "bg-white" : "bg-gray-400 hover:bg-gray-500"
                }`}
              ></button>
            ))}
          </div>
        </div>
      ) : (

        /*PARTE PARA LG EN ADELANTE */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:mt-44 lg:px-10 lg:pt-20">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="bg-white/10 border-2 border-[#ffffff30] backdrop-blur-md rounded-lg p-5 flex flex-col items-center lg:h-[120px]:"
          >
            <video autoPlay loop muted src={slide.video} className="md:w-24 md:rounded-lg lg:w-28" />
            <h5 className="md:mt-3 md:text-2xl font-bold text-white lg:text-4xl">{slide.label}</h5>
            <p className="md:mt-5 md:text-lg text-gray-300 text-center lg:text-3xl">{slide.description}</p>
          </div>
        ))}
      </div>
      
      )}
    </div>
  );
};

export default Benefit;
