import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Hero_animation from "./Components/Hero/Hero_animation";
import Content from "./Components/Hero/Content";
import Make from "./Components/Make/Make";
import Benefit from "./Components/Benefits/Benefit";
import Carousel from "./Components/Products/Carousel";
import Custom from "./Components/Customers/Custom";
import Cards from "./Components/Products/Cards";

const App = () => {
  const [showContent, setShowContent] = useState(false);
  const handleShowContent = () => {
    setShowContent(true);
  };

  return (
    <div className="relative overflow-hidden">
      <Header />
      <div className="h-screen w-full">
        <Hero_animation onShowContent={handleShowContent} />
        {showContent && <Content />}
      </div>
      <div className="h-screen w-full">
        <Make />
      </div>
      <div className="relative w-full h-screen bg-black">
        <Benefit />
      </div>
      <div className="h-auto w-full bg-black">
        <Custom />
      </div>
      <div className="h-screen w-full bg-black">
        <Cards />
      </div>
      <div className="h-screen w-full">
        <Carousel />
      </div>
    </div>
  );
};

export default App;
