import React from "react";
import AboutImg from "./AboutImg";
import tony from "./pictures/IMG_1775.png";
import sean from "./pictures/SeanCortese7.png";
import "./styles.css";

function About() {
  return (
    <>
      <section id="about">
        <div className="about-div">
          <h3 className="logo-name">
            <span className="flicker-slow">In</span>
            <span className="flicker-slow1">fin</span>
            <span className="flicker-slow">ity</span>
            {/* </h3>
          <h3 className="logo-name1"> */}
            <span className="flicker-slow">F</span>
            <span className="flicker-slow2">∞</span>
            <span className="flicker-slow1">eve</span>
            <span className="flicker-slow">r</span>
          </h3>
          <p className="flicker-slow3">productions</p>
        </div>
      </section>
      <AboutImg />
    </>
  );
}

export default About;
