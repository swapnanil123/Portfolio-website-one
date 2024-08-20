import React from "react";
import demoImg1 from "./../assets/images/p1.jpg";
import demoImg2 from "./../assets/images/p2.png";
import demoImg3 from "./../assets/images/p3.jpg";
import demoImg4 from "./../assets/images/p4.png";
import demoImg5 from "./../assets/images/p5.jpg";
import demoImg6 from "./../assets/images/p6.png";
import demoImg7 from "./../assets/images/p7.jpg";
import demoImg8 from "./../assets/images/p8.png";
import demoImg9 from "./../assets/images/p9.jpg";
import demoImg10 from "./../assets/images/p10.png";
import demoImg11 from "./../assets/images/p11.jpg";
import demoImg12 from "./../assets/images/p12.png";
import demoImg13 from "./../assets/images/p13.jpg";
import demoImg14 from "./../assets/images/p14.png";
import demoImg15 from "./../assets/images/p15.jpg";
import demoImg16 from "./../assets/images/p16.png";
import demoImg17 from "./../assets/images/p17.jpg";
import demoImg18 from "./../assets/images/p18.png";

import "./SupportPage.css";

const SupportPage = () => {
  const images = [
    demoImg1,
    demoImg2,
    demoImg3,
    demoImg4,
    demoImg5,
    demoImg6,
    demoImg7,
    demoImg8,
    demoImg9,
    demoImg10,
    demoImg11,
    demoImg12,
    demoImg13,
    demoImg14,
    demoImg15,
    demoImg16,
    demoImg17,
    demoImg18,
  ];
  return (
    <div className="support-wrapper">
      <div className="first-row">
        React Navigation is built by{" "}
        <span className="heighlight">
          <strong>Expo</strong>
        </span>
        ,{" "}
        <span className="heighlight">
          <strong>Software Mansion</strong>
        </span>
        , and{" "}
        <span className="heighlight">
          <strong>Callstack</strong>
        </span>
        , with contributions from the{" "}
        <span className="heighlight">
          <strong>community</strong>
        </span>{" "}
        and{" "}
        <span className="heighlight">
          <strong>sponsors</strong>
        </span>
        :
      </div>
      <div className="second-row">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Demo ${index + 1}`}
            className="sponsor-image"
          />
        ))}
      </div>
      <div className="third-row">
        If React Navigation is helpful to you, consider{" "}
        <span className="heighlight"><strong>supporting the project by sponsoring it</strong></span> 💜
      </div>
    </div>
  );
};

export default SupportPage;
