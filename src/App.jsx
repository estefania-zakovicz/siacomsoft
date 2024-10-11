import React, { useEffect } from 'react';
import Header from './Components/Header';
import Hero_animation from './Components/Hero/Hero_animation';
/* import Hero_background from './Components/Hero/Hero_background'; */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Projects from './Components/Project/Projects';

gsap.registerPlugin(ScrollTrigger); // Registra ScrollTrigger una sola vez

const App = () => {
  return (
    <div className="font-nunito">
      <Header />
      <Hero_animation />
      {/* <Hero_background/> */}
      <Projects/>
    </div>
  );
};

export default App;
