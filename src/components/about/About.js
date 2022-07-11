import React from "react";
import AboutImg from "./AboutImg";
import tony from "./pictures/IMG_1775.png";
import sean from "./pictures/SeanCortese7.png";
import "./styles.css";

function About() {
  return (
    <>
      <section id="about">
        <div className="signs-div">
          <div className="sign"> </div>
          <div className="sign1"> </div>
        </div>

        <div className="about-div">
          <h3 className="logo-name">
            <span className="flicker-slow2">In</span>
            <span className="flicker-slow2">fin</span>
            <span className="flicker-slow2">ity</span>
            {/* </h3>
          <h3 className="logo-name1"> */}
            <span className="flicker-slow2">F</span>
            <span className="flicker-slow2">or</span>
            <span className="flicker-slow2">eve</span>
            <span className="flicker-slow2">r</span>
          </h3>
          <p className="flicker-slow3">productions</p>
        </div>
      </section>
      <AboutImg />
    </>
  );
}

export default About;
