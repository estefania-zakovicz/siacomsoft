import React, { useState, useEffect } from "react";
import Hero_animation from "./Components/Hero/Hero_animation";
import DynamicSection from "./Components/Make/DynamicSection";
import Benefit from "./Components/Benefits/Benefit";
/* import Programs from "./Components/Project/Programs"; */


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
    <div className="font-nunito">
      <Hero_animation />
      <div className={`dynamic-section ${isSticky ? "sticky" : ""}`}>
        <DynamicSection />
      </div>
      <div className="benefit-section">
        <Benefit />
      </div>
      {/*   <div className="programs-section">
        
        <Programs />
      </div>*/}
    </div>
  );
};
export default App;
