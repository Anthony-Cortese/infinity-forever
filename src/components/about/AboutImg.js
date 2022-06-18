import React from "react";
import tony from "./pictures/IMG_1775.png";
import sean from "./pictures/SeanCortese7.png";
import "./styles.css";

function AboutImg() {
  return (
    <>
      <div className="about-info">
        <p>Founded by Anthony Cortese, Infinity Forever Productions</p>
      </div>

      <section id="about-imgs">
        <div className="big-about-img"></div>
        <div className="img-container">
          <img className="tony" src={tony} alt="tony"></img>
          <p>Anthony Cortese</p>
          <p>Founder/CEO</p>
          <p>
            This is a bunch of information on Tony Cortese. I will need to
            update all of this, I just wanted to make sure I had something to
            finish the design. This is a bunch of information on Tony Cortese. I
            will need to update all of this, I just wanted to make sure I had
            something to finish the design.
          </p>
          <img className="tony" src={sean} alt="tony"></img>
          <p>Anthony Cortese</p>
          <p>Founder/CEO</p>
          <p>
            This is a bunch of information on Tony Cortese. I will need to
            update all of this, I just wanted to make sure I had something to
            finish the design.
          </p>
        </div>
      </section>
    </>
  );
}

export default AboutImg;
