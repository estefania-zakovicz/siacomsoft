import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Hero_animation from "./Components/Hero/Hero_animation";
import Content from "./Components/Hero/Content";
import Make from "./Components/Make/Make";

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
    </div>
  );
};

export default App;
