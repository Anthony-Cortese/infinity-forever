import React from "react";
import "./styles.css";
import cliff from "./pictures/cliff.png";
import closed from "./pictures/closed.png";
import ending from "./pictures/ending.png";
import joint from "./pictures/joint.png";
import rick from "./pictures/rick.png";
import terry from "./pictures/terry.png";
import tv from "./pictures/tv.png";
import poster from "./pictures/movie poster.png";
import black from "./pictures/black.png";

function Hollywood() {
  return (
    <>
      <section id="hollywood">
        <div className="hollywood-main">
          <div className="large-hollywood-div">
            <img
              className="large-hollywood-img"
              alt="large-underneath-bottom"
              src={black}
            ></img>
            <div className="film-info">
              <h4 className="title">FILM</h4>
              <h4 className="title">ONCE UPON A TIME IN... PROVO</h4>
              <h4 className="title">2021</h4>
            </div>
            <div className="dotted-line"></div>
          </div>
        </div>
      </section>

      <section id="bottom-info">
        <div className="movie-poster">
          <img className="poster" alt="eye" src={poster}></img>
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
      <section id="wolf-photos">
        <div className="wolf-pics">
          <img className="bottom-img" alt="eye" src={cliff}></img>
          <img className="bottom-img" alt="eye" src={closed}></img>
          <img className="bottom-img" alt="eye" src={ending}></img>
          <img className="bottom-img" alt="eye" src={joint}></img>
          <img className="bottom-img" alt="eye" src={rick}></img>
          <img className="bottom-img" alt="eye" src={terry}></img>
          <img className="bottom-img" alt="eye" src={tv}></img>
        </div>
      </section>
    </>
  );
}

export default Hollywood;
