import React, { useState } from "react";
import banner from "../../assets/photos/fondoLuna.png";
import negocio from "../../assets/photos/negocio.jpg";
import tecnologias from "../../assets/photos/tecnologias.jpg";
import pagoQr from "../../assets/photos/pagoQr.jpg";
import celu from "../../assets/photos/celu.png";
import negocio1 from "../../assets/photos/negocio.jpg";
import negocio2 from "../../assets/photos/negocio.jpg";
import svg1 from "../../assets/svg/control.webm";

const Carrusel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      video: "svg1",
      label: "Organización",
      description:
        "Centraliza la información y optimiza la gestión de tareas, facilitando el orden y seguimiento en cada proceso de tu negocio.",
    },
    {
      image: tecnologias,
      label: "Second slide label",
      description:
        "Some representative placeholder content for the second slide.",
    },
    {
      image: pagoQr,
      label: "Third slide label",
      description:
        "Some representative placeholder content for the third slide.",
    },
    {
      image: celu,
      label: "Fourth slide label",
      description:
        "Some representative placeholder content for the fourth slide.",
    },
    {
      image: negocio1,
      label: "Fifth slide label",
      description:
        "Some representative placeholder content for the fifth slide.",
    },
    {
      image: negocio2,
      label: "Sixth slide label",
      description:
        "Some representative placeholder content for the sixth slide.",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen w-full bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black">
        <h2
          className="pt-10 md:pt-24 text-3xl sm:mt-10
      lg:pt-20 text-center lg:text-4xl text-white"
        >
          Beneficios al utilizar nuestros servicios
        </h2>
      </div>
      <div className="relative w-full max-w-4xl mx-auto mt-20">
        <div className="overflow-hidden relative h-96 bg-white/10 border-2 border-[#ffffff30] backdrop-blur-md rounded-lg w-full px-2 md:h-48 lg:h-[300px] lg:col-span-2 flex items-center lg:p-4">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                index === activeIndex ? "translate-x-0" : "translate-x-full"
              }`}
              style={{
                transform: `translateX(${(index - activeIndex) * 100}%)`,
              }}
            >
              <video
                src={slide.video}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-5 left-5 text-white p-4 rounded-md">
                <h5 className="text-lg font-bold">{slide.label}</h5>
                <p className="text-sm">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Navigation */}
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
        {/* Indicators */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === activeIndex
                  ? "bg-white"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carrusel;
