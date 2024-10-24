import React, { useState } from "react";
import Hero_animation from "./Hero_animation";
import Content from "./Content";

const MainComponent = () => {
  const [showContent, setShowContent] = useState(false);

  const handleShowContent = () => {
    setShowContent(true); // Mostrar contenido al iniciar la animación
  };

  return (
    <div className="relative h-screen w-full">
      <Hero_animation onShowContent={handleShowContent} />
      {showContent && <Content />} {/* Mostrar el contenido basado en showContent */}
    </div>
  );
};

export default MainComponent;
