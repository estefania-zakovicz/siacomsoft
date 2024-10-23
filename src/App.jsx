import React, { useState, useEffect } from "react";
import Hero_animation from "./Components/Hero/Hero_animation";
import DynamicSection from "./Components/Make/DynamicSection";
import Benefit from "./Components/Benefits/Benefit";


const App = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsSticky(offset > window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <Hero_animation />
      <div className={`dynamic-section ${isSticky ? "sticky top-0" : ""}`}>
        <DynamicSection />
      </div>
      <div className="benefit-section">
       
        <Benefit />
      </div>
    </div>
  );
};

export default App;
