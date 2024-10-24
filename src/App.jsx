import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Hero_animation from "./Components/Hero/Hero_animation";
import Content from "./Components/Hero/Content";

const App = () => {
  const [showContent, setShowContent] = useState(false); // Controlar cuándo mostrar el contenido

  // Esta función se llamará al finalizar la animación de Hero_animation
  const handleAnimationEnd = () => {
    setShowContent(true); // Mostrar Content cuando Hero_animation termina
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Header />
      <div className="relative h-full w-full">
        <Hero_animation onAnimationEnd={handleAnimationEnd} />
        {showContent && (
          <div className="absolute inset-0 z-30">
            <Content />
          </div>
        )} {/* Mostrar Content superpuesto cuando showContent sea true */}
      </div>
    </div>
  );
};

export default App;
