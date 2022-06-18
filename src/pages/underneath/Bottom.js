import React from "react";
import jen from "./pictures/Jen.png";
import eye from "./pictures/Eye.png";
import hooded from "./pictures/Hooded man.png";
import sean1 from "./pictures/Sean at car.png";
import sean2 from "./pictures/Sean Profile.png";
import "./styles.css";
import Eye from "./Eye";

function Bottom() {
  return (
    <>
      <section id="bottom">
        <div className="bottom-main">
          <div className="large-bottom-div">
            <Eye />
            {/* <img
              className="large-bottom-img"
              alt="large-underneath-bottom"
              src={jen}
            ></img> */}
            <div className="film-info">
              <h4 className="title">FILM</h4>
              <h4 className="title">UNDERNEATH THE BOTTOM</h4>
              <h4 className="title">2010</h4>
            </div>
          </div>
        </div>
        <div className="dotted-line"></div>
      </section>
      <section id="bottom-info">
        <div className="movie-poster">
          <img className="poster" alt="eye" src={jen}></img>
        </div>
        <div className="bottom-film">
          <div className="bottom-info2">
            <p className="title1">Directed by:</p>
            <p className="title1">Anthony Cortese</p>
            <p className="title1">Written by:</p>
            <p className="title1">Anthony Cortese</p>
            <p className="title1">Starring:</p>
            <p className="title1">Jennifer Muldoon</p>
            <p className="title1">Sean Cortese</p>
          </div>
          <div className="bottom-description"></div>
        </div>
      </section>
      <section id="bottom-photos">
        <div className="bottom-pics">
          <img className="bottom-img" alt="eye" src={eye}></img>
          <img className="bottom-img" alt="eye" src={hooded}></img>
          <img className="bottom-img" alt="eye" src={sean1}></img>
          <img className="bottom-img" alt="eye" src={sean2}></img>
          <img className="bottom-img" alt="eye" src={jen}></img>
        </div>
      </section>
    </>
  );
}

export default Bottom;
