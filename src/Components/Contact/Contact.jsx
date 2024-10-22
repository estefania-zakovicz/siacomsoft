import React, { useState } from 'react';
import image1 from '../../assets/photos/negocio.jpg';
import image2 from '../../assets/photos/pagoQr.jpg';
import image3 from '../../assets/photos/tecnologias.jpg';

const sliderItems = [
  { image: image1, name: 'Mike', title: 'web3 Developer' },
  { image: image2, name: 'Samite', title: 'Wordpress Developer' },
  { image: image3, name: 'Hashi', title: 'Java Developer' },
  { image: image1, name: 'Kaity', title: 'Web Developer' },
  { image: image2, name: 'Lauren', title: 'PHP Developer' },
  { image: image3, name: 'Ryan', title: 'SEO Developer' },
  { image: image1, name: 'Dakes', title: 'SQL Developer' }
];

const Contact = () => {
  const [activeIndex, setActiveIndex] = useState(3); // Empezamos con la 4ta imagen activa (índice 3)

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="relative w-full h-screen my-10 flex items-center justify-center overflow-hidden bg-cover bg-center">
      {/* Fondo borroso con bordes redondeados */}
      <div className="absolute mx-20 inset-0 bg-gradient-to-r from-blue-200 via-blue-400 to-pink-400 rounded-3xl z-0"></div>

      <div className="flex items-center gap-5 z-10"> {/* z-10 para poner encima del blur */}
        {sliderItems.map((item, index) => (
          <div
            key={index}
            className={`relative cursor-pointer transition-all duration-700 ${index === activeIndex ? 'w-[500px] h-[550px]' : 'w-[100px]'} ${
              index === 0 || index === sliderItems.length - 1 ? 'h-[550px]' : index === 1 || index === 5 ? 'h-[230px]' : 'h-[500px]'
            }`}
            onClick={() => handleClick(index)}
          >
            <img
  src={item.image}
  alt={item.name}
  className={`w-full h-full object-cover rounded-lg transition-all duration-700 ${index === activeIndex ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
/>



            <h1 className={`absolute top-1/2 left-[-10%] transform -rotate-90 text-2xl text-blue-400 font-bold uppercase transition-opacity duration-700 ${index === activeIndex ? 'opacity-0' : 'opacity-100'}`}>
              {item.name}
            </h1>
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

export default Contact;
