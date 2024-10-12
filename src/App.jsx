import React, { useEffect } from 'react';
import Header from './Components/Header';
import Hero_animation from './Components/Hero/Hero_animation';

import Projects from './Components/Project/Projects';



const App = () => {
  return (
    <div className="font-nunito">
      <Header />
      <Hero_animation />
      <Projects/>
    
    </div>
  );
};

export default App;
