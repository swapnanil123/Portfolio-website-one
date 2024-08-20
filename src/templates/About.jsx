import React from "react";
import firstImg from "./../assets/images/one-L.svg";
import secondImg from "./../assets/images/one-R.svg";
import thirdImg from "./../assets/images/two-L.svg";
import fourthImg from "./../assets/images/two-R.svg";

import "./About.css";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-left-wrapper">
        <div className="one">
          <img src={firstImg} alt="" />
          <h1>Easy to Use</h1>
          <p>
            Start quickly with built-in navigators that deliver a seamless
            out-of-the-box experience.
          </p>
        </div>
        <div className="two">
          <img src={thirdImg} alt="" />
          <h1>Completely customizable</h1>
          <p>
            If you know how to write apps using JavaScript you can customize any
            part of React Navigation.
          </p>
        </div>
      </div>
      <div className="about-right-wrapper">
        <div className="one">
          <img src={secondImg} alt="" />
          <h1>Components built for iOS and Android</h1>
          <p>
            Platform-specific look-and-feel with smooth animations and gestures.
          </p>
        </div>
        <div className="two">
          <img src={fourthImg} alt="" />
          <h1>Extensible platform</h1>
          <p>
            React Navigation is extensible at every layer— you can write your
            own navigators or even replace the user-facing API.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
