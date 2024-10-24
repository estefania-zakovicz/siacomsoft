import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Hero_animation from "./Components/Hero/Hero_animation";
import Content from "./Components/Hero/Content";

const App = () => {
  const [showContent, setShowContent] = useState(false);

  const handleShowContent = () => {
    setShowContent(true);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Header />
      <div className="relative h-full w-full">
        <Hero_animation onShowContent={handleShowContent} />
        {showContent && <Content />}
      </div>
    </div>
  );
};

export default App;
