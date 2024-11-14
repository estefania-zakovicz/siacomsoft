import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Hero_animation from "./Components/Hero/Hero_animation";
import Content from "./Components/Hero/Content";
import Make from "./Components/Make/Make";
import Benefit from "./Components/Benefits/Benefit";
import Custom from "./Components/Customers/Custom";
import Cards from "./Components/Products/Cards";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";


const App = () => {
  const [showContent, setShowContent] = useState(false);
  const handleShowContent = () => {
    setShowContent(true);
  };

  return (
    <div className="relative overflow-hidden">
      <Header />
      <div id="inicio" className="h-screen w-full">
        <Hero_animation onShowContent={handleShowContent} />
        {showContent && <Content />}
      </div>
      <div id="qué-hacemos" className="h-screen w-full">
        <Make />
      </div>
      <div id="beneficios" className="relative w-full h-screen bg-black">
        <Benefit />
      </div>
      <div className="h-auto w-full bg-black">
        <Custom />
      </div>
      <div id="servicios" className="h-screen w-full">
        <Cards />
      </div>
      <div id="contact" className="h-screen w-full bg-black">
        <Contact />
      </div>
      <div className="w-full bg-black">
        <Footer />
      </div>
      
    </div>
  );
};

export default App;
