import React, { useEffect, useRef } from "react";
import videoIa from "../../assets/videos/ia.mp4";
import "./DynamicSection.css";


const DynamicSection = () => {
  const programRef = useRef(null);
  const websiteRef = useRef(null);
  const appRef = useRef(null);
  const startAnimation = (element, direction) => {
    const distance = element.scrollWidth;
    const duration = 10;
    const offset = direction === 1 ? -distance : distance;
    element.style.transition = `transform ${duration}s linear`;
    element.style.transform = `translateX(${offset}px)`;
    element.addEventListener(
      "transitionend",
      () => {
        element.style.transition = "none";
        element.style.transform = `translateX(${
          direction === 1 ? distance : -distance
        }px)`;
        element.offsetHeight;
        element.style.transition = `transform ${duration}s linear`;
        startAnimation(element, direction);
      },
      { once: true }
    );
  };
  useEffect(() => {
    startAnimation(programRef.current, 1);
    startAnimation(websiteRef.current, -1);
    startAnimation(appRef.current, 1);
  }, []);

  
  return (
    <div className="relative h-screen text-center dynamic-section">
      <video
        autoPlay
        loop
        muted
        className="video-background opacity-75"
        src={videoIa}
      />
      <div className="content">
        <div
          ref={programRef}
          className="text-1 text-slide block text-[120px] ml-20 font-bold uppercase text-stroke"
        >
          Programas
        </div>
        <div
          ref={websiteRef}
          className="text-2 text-slide block text-[120px] ml-96 font-bold uppercase text-stroke"
        >
          sitios webs
        </div>
        <div
          ref={appRef}
          className="text-3 text-slide block text-[120px] font-bold uppercase text-stroke"
        >
          aplicaciones
        </div>
        <div className="final block text-4xl font-bold text-white uppercase mt-5 mb-20 text-stroke">
          que simplifican la administración diaria de tu empresa
        </div>
      </div>
    </div>
  );
};
export default DynamicSection;
