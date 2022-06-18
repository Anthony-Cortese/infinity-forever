import React from "react";
import "./styles.css";
import belfort from "./pictures/Belfort.png";
import naomi from "./pictures/Naomi.png";
import sabi from "./pictures/Sabi.png";
import sleep from "./pictures/Sleep.png";
import together from "./pictures/Together.png";
import water from "./pictures/Water.png";
import black from "./pictures/black.png";

function Wolf() {
  return (
    <>
      <section id="wolf">
        <div className="wolf-main">
          <div className="large-wolf-div">
            <img
              className="large-bottom-img"
              alt="large-underneath-bottom"
              src={black}
            ></img>
            <div className="film-info">
              <h4 className="title">FILM</h4>
              <h4 className="title">VENICE</h4>
              <h4 className="title">2020</h4>
            </div>
            <div className="dotted-line"></div>
          </div>
        </div>
      </section>

      <section id="bottom-info">
        <div className="movie-poster">
          <img className="poster" alt="eye" src={belfort}></img>
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
          <img className="bottom-img" alt="eye" src={belfort}></img>
          <img className="bottom-img" alt="eye" src={naomi}></img>
          <img className="bottom-img" alt="eye" src={sabi}></img>
          <img className="bottom-img" alt="eye" src={sleep}></img>
          <img className="bottom-img" alt="eye" src={together}></img>
          <img className="bottom-img" alt="eye" src={water}></img>
        </div>
      </section>
    </>
  );
}

export default Wolf;
