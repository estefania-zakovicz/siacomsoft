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

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(3); // Empezamos con la 4ta imagen activa (índice 3)

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="w-full h-full mb-10 bg-cover bg-center flex items-center justify-center overflow-hidden" style={{ backgroundImage: `url('/Images/bg-img.png')` }}>
      <div className="flex items-center gap-5">
        {sliderItems.map((item, index) => (
          <div
            key={index}
            className={`relative cursor-pointer transition-all duration-700 ${index === activeIndex ? 'w-[300px] h-[250px]' : 'w-[80px]'} ${
              index === 0 || index === sliderItems.length - 1 ? 'h-[250px]' : index === 1 || index === 5 ? 'h-[230px]' : 'h-[300px]'
            }`}
            onClick={() => handleClick(index)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover rounded-lg"
            />
            <h1 className={`absolute top-1/2 left-[-10%] transform -rotate-90 text-2xl text-white font-bold uppercase transition-opacity duration-700 ${index === activeIndex ? 'opacity-0' : 'opacity-100'}`}>
              {item.name}
            </h1>
            {index === activeIndex && (
              <div className="absolute bottom-4 left-4 text-white">
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
