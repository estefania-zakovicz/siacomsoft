import React from 'react';
import "./Custom.css";
import blessing from "../../assets/Logos/blessing-top.png";
import mev from "../../assets/Logos/mev-line.png";
import grosoft from "../../assets/Logos/grosoft-line.png";
import optica from "../../assets/Logos/opticasoft.png";
import inecon from "../../assets/Logos/inecon-line.png";
import trading from "../../assets/Logos/trading.png";

const Custom = () => {
  return (
    
      <div className="slider overflow-hidden min-h-screen w-full md:mt-[400px]">
        <div className="mb-20 mt-44 text-3xl text-center md:mt-44 lg:mt-80 lg:text-4xl">
          <h2>Nuestras Aplicaciones</h2>
        </div>
        
        <div className="slide-track justify-center items-center h-12 grayscale">
            <div className="slide ">
            <img src={blessing} alt="Logo" className="" />
            </div>
            <div className="slide">
            <img src={mev} alt="Logo" className="" />
            </div>
            <div className="slide">
            <img src={grosoft} alt="Logo" className="" />
            </div>
            <div className="slide">
            <img src={optica} alt="Logo" className="" />
            </div>
            <div className="slide">
            <img src={inecon} alt="Logo" className="" />
            </div>
            <div className="slide">
            <img src={trading} alt="Logo" className="h-[110px]" />
            </div>
            <div className="slide">
            <img src={blessing} alt="Logo" className="" />
            </div>
            <div className="slide">
            <img src={mev} alt="Logo" className="" />
            </div>
            <div className="slide">
            <img src={grosoft} alt="Logo" className="" />
            </div>
            <div className="slide">
            <img src={optica} alt="Logo" className="" />
            </div>
            <div className="slide">
            <img src={inecon} alt="Logo" className="" />
            </div>
            <div className="slide">
            <img src={trading} alt="Logo" className="h-[110px]" />
            </div>
            <div className="slide">
            <img src={blessing} alt="Logo" className="" />
            </div>
            <div className="slide">
            <img src={mev} alt="Logo" className="" />
            </div>
        </div>
    </div>
 
  )
}

export default Custom
