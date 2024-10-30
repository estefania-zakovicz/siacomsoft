import React, { useState, useEffect, useRef } from "react";
import image1 from "../../assets/photos/negocio.jpg";
import image2 from "../../assets/photos/pagoQr.jpg";
import image3 from "../../assets/photos/tecnologias.jpg";

const sliderItems = [
  { image: image1, name: "COMERCIOS", title: "" },
  { image: image2, name: "", title: "Wordpress Developer" },
  { image: image3, name: "GIMNASIOS", title: "Java Developer" },
  { image: image1, name: "ECOMMERCE", title: "Web Developer" },
  { image: image2, name: "APLICACIONES", title: "PHP Developer" },
  { image: image3, name: "Ryan", title: "SEO Developer" },
  { image: image1, name: "Dakes", title: "SQL Developer" },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(3);
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const rect = carouselRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top <= windowHeight / 2) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={carouselRef}
      className={`relative w-full h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-black carousel-slide-up ${isVisible ? "visible" : ""}`}
    >
      <div className="absolute mx-20 my-10 inset-0 bg-gradient-to-r from-blue-400 via-blue-600 to-pink-400 rounded-3xl z-0"></div>
      <div className="flex items-center gap-5 z-10">
        {sliderItems.map((item, index) => (
          <div
            key={index}
            className={`relative cursor-pointer py-10 transition-all duration-700 ${
              index === activeIndex ? "w-[500px] h-[550px]" : "w-[100px]"
            } ${index === 0 || index === sliderItems.length - 1
                ? "h-[550px]"
                : index === 1 || index === 5
                ? "h-[230px]"
                : "h-[500px]"
            }`}
            onClick={() => handleClick(index)}
          >
            <img
              src={item.image}
              alt={item.name}
              className={`w-full h-full object-cover rounded-lg transition-all duration-700 ${
                index === activeIndex ? "opacity-100" : "opacity-50 hover:opacity-100"
              }`}
            />
            <h2
              className={`absolute top-1/2 left-[-10%] transform -rotate-90 text-3xl text-blue-400 font-bold uppercase transition-opacity duration-700 ${
                index === activeIndex ? "opacity-0" : "opacity-100"
              }`}
            >
              {item.name}
            </h2>
            {index === activeIndex && (
              <div className="absolute bottom-4 left-4 text-fuxia">
                <h2 className="text-xl font-bold uppercase">{item.name}</h2>
                <p className="text-lg font-bold uppercase">{item.title}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
