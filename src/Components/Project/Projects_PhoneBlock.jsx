import React from "react";
import imgSrc from "@/assets/photos/celu.png";
import videoCelu from "@/assets/videos/video-celu.mp4";

const Projects_PhoneBlock = () => {
  return (
    <div className="projects-phone-black">
      <div
        className="projects-phone-template"
        style={{ backgroundImage: `url(${imgSrc})` }}
      >
        <video
          className="collage-element"
          playsInline
          autoPlay
          loop
          muted
          src={videoCelu}
        ></video>
      </div>
    </div>
  );
};

export default Projects_PhoneBlock;
