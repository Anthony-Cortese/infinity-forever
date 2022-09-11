import React from "react";
// import tony from "./pictures/tony.jpeg";
// import sean from "./pictures/sean.jpeg";
// import both from "./pictures/both.png";
import combined from "./pictures/IMG_1908.jpeg";
import "./styles.css";

function AboutImg() {
  return (
    <>
      <section id="aboutImg">
        <div className="about-info">
          <p className="infinity-font4">
            Founded by Anthony Cortese, Infinity Forever Productions is
            comprised of two brothers Sean and Anthony Cortese. Their goal is to
            create thought-provoking projects in film and other digital
            platforms. Our company is committed to achieving groundbreaking
            storytelling, and build visionary worlds and characters to bring to
            your screens. Together, the two brothers plan to write and share
            their short films, recreate iconic scenes from film for festivals,
            and eventually hope to release feature films as the company grows.
            The Cortese brothers are honored, grateful and excited to be able to
            share their passion for cinema as well as storytelling with the
            world.
            {/* Infinity Forever Productions was founded by brothers Anthony and
            Sean Cortese. Together, the two brothers plan to write and share
            short films, as well as scenes for local film festivals & eventually
            plan to release feature length films as the production company
            continues to grow. The Cortese brothers are honored, grateful and
            excited to be able to share their passion for cinema as well as
            storytelling with the world. */}
          </p>
          <p className="infinity-font4">
            {/* Anthony, a software developer as well as a film director, based in
            Utah has always had a deep passion for film. Upon completing his
            schooling in software development, he dreamed of being able to
            combine his two passions into one. Thus, creating Infinity Forever
            Productions. Unifying his skills behind the camera as well as in
            front of the computer screen, he now has been able to cultivate the
            two, bringing his unique touch for cinema, as well as his love for
            people and his creative ingenuity to become the visionary director
            behind Infinity Forever. */}
            Anthony, currently a software developer, who majored in cinema
            productions, is based in Utah and has always kept his deep passion
            for film. His first foray in movie productions was over a decade
            ago, completeing his first film Underneath The Bottom and launching
            Infinity Forever Productions. Upon completing his schooling in
            software development, he dreamed of being able to combine his two
            passions into one. Unifying his skills behind the camera as well as
            in front of the computer screen, he now has been able to cultivate
            the two, bringing his unique touch for cinema, as well as his love
            for people and his creative ingenuity to become the visionary
            director behind Infinity Forever Productions.
          </p>
          <p className="infinity-font4">
            {/* Sean, a local actor & writer teamed up with his brother Tony when he
            saw the creative possibilities that Infinity Forever Productions
            presented. Sean has always had a hunger to perform. Acting is outlet
            for his restless mind, as well as the opportunity to continue to
            study the world’s complex understanding of human behavior. Sean also
            saw the chance to be able to share the stories he has written, or
            the ones he wants to share with the world through Infinity Forever
            Productions. */}
            Sean, a local actor & writer teamed up with his brother Anthony when
            he saw the creative possibilities that Infinity Forever Productions
            presented. Sean has always had a hunger to perform. Acting is outlet
            for his restless mind, as well as the opportunity to continue to
            study the world’s complex understanding of human behavior. Sean also
            saw the chance to be able to share the stories he has written, with
            the world through Infinity Forever Productions. Sean is currently a
            working actor check out his
            <a
              className="imdb"
              href="https://www.imdb.com/name/nm13074535/?ref_=nv_sr_srsg_0"
            >
              {" "}
              IMDb
            </a>{" "}
            page here!
          </p>
        </div>
      </section>

      <section id="about-imgs">
        <div className="big-about-img">
          <img className="main-about-img" src={combined} alt="tony"></img>
        </div>
      </section>

      {/* <section id="solo-imgs">
        <div className="big-solo-div">
          <div className="big-solo-img">
            <img className="main-solo-img" src={tony} alt="tony"></img>
          </div>
          <div className="solo-info">
            <p className="infinity-font4">
              Anthony, a software developer as well as a film director, based in
              Utah has always had a deep passion for film. Upon completing his
              schooling in software development, he dreamed of being able to
              combine his two passions into one. Thus, creating Infinity Forever
              Productions. Unifying his skills behind the camera as well as in
              front of the computer screen, he now has been able to cultivate
              the two, bringing his unique touch for cinema, as well as his love
              for people and his creative ingenuity to become the visionary
              director behind Infinity Forever.
            </p>
          </div>
        </div>

        <div className="big-solo-div1">
          <div className="big-solo-img1">
            <img className="main-solo-img1" src={sean} alt="tony"></img>
          </div>
          <p className="infinity-font4">
            Sean, a local actor & writer teamed up with his brother Tony when he
            saw the creative possibilities that Infinity Forever Productions
            presented. Sean has always had a hunger to perform. Acting is outlet
            for his restless mind, as well as the opportunity to continue to
            study the world’s complex understanding of human behavior. Sean also
            saw the chance to be able to share the stories he has written, or
            the ones he wants to share with the world through Infinity Forever
            Productions.
          </p>
        </div>
      </section> */}
    </>
  );
}

export default AboutImg;
