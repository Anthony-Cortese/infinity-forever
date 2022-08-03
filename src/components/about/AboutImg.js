import React from "react";
// import tony from "./pictures/IMG_1775.png";
// import sean from "./pictures/SeanCortese7.png";
// import both from "./pictures/both.png";
import combined from "./pictures/IMG_1908.jpeg";
import "./styles.css";

function AboutImg() {
  return (
    <>
      <section id="aboutImg">
        <div className="about-info">
          <p className="infinity-font">
            Infinity Forever Productions was founded by brothers Anthony and
            Sean Cortese. Anthony, a software developer as well as a film
            director, based in Utah has always had a deep passion for film. Upon
            completing his schooling in software development, he dreamed of
            being able to combine his two passions into one. Thus, creating
            Infinity Forever Productions. Unifying his skills behind the camera
            as well as in front of the computer screen, he now has been able to
            cultivate the two, bringing his unique touch for cinema, as well as
            his love for people and his creative ingenuity to become the
            visionary director behind Infinity Forever.
          </p>
          <br />
          <p className="infinity-font">
            Sean, a local actor & writer teamed up with his brother Tony when he
            saw the creative possibilities that Infinity Forever Productions
            presented. Sean has always had a hunger to perform. Acting is outlet
            for his restless mind, as well as the opportunity to continue to
            study the world’s complex understanding of human behavior. Sean also
            saw the chance to be able to share the stories he has written, or
            the ones he wants to share with the world through Infinity Forever
            Productions.
          </p>
          <br />
          <p className="infinity-font">
            Together, the two brothers plan to write and share short films, as
            well as scenes for local film festivals & eventually plan to release
            feature length films as the production company continues to grow.
            The Cortese brothers are honored, grateful and excited to be able to
            share their passion for cinema as well as storytelling with the
            world.
          </p>
        </div>
      </section>

      <section id="about-imgs">
        <div className="big-about-img">
          <img className="main-about-img" src={combined} alt="tony"></img>
        </div>
        {/* <div className="img-container">
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
          <p>Sean Cortese</p>
          <p>Founder/CEO</p>
          <p>
            This is a bunch of information on Tony Cortese. I will need to
            update all of this, I just wanted to make sure I had something to
            finish the design.
          </p>
        </div> */}
      </section>
    </>
  );
}

export default AboutImg;
