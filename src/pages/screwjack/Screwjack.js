import React from "react";
import "./styles.css";
import big from "./pictures/big.png";
import both from "./pictures/both.png";
import gonzo from "./pictures/dr gonzo.png";
import final from "./pictures/final.png";
import me from "./pictures/me.png";
import movie from "./pictures/movie.png";
import paper from "./pictures/paper.png";
import pills from "./pictures/pills.png";
import siggy from "./pictures/siggy.png";
import title from "./pictures/title.png";

function Screwjack() {
  return (
    <>
      <section id="screwjack">
        <div className="screwjack-main">
          <div className="large-screwjack-div">
            <img
              className="large-screwjack-img"
              alt="large-underneath-bottom"
              src={title}
            ></img>
            <div className="film-info">
              <h4 className="title">FILM</h4>
              <h4 className="title">SCREW JACK</h4>
              <h4 className="title">2021</h4>
            </div>
            <div className="dotted-line"></div>
          </div>
        </div>
      </section>

      <section id="screwjack-info">
        <div className="movie-poster">
          <img className="poster" alt="eye" src={movie}></img>
        </div>
        <div className="screwjack-film">
          <div className="bottom-info2">
            <p className="title1">Directed by:</p>
            <p className="title1">Anthony Cortese</p>
            <p className="title1">Adapted by:</p>
            <p className="title1">Sean Cortese</p>
            <p className="title1">Starring:</p>
            <p className="title1">Anthony Cortese</p>
            <p className="title1">Sean Cortese</p>
          </div>
          <div className="bottom-description"></div>
        </div>
      </section>
      <section id="wolf-photos">
        <div className="wolf-pics">
          <img className="bottom-img" alt="eye" src={big}></img>
          <img className="bottom-img" alt="eye" src={both}></img>
          <img className="bottom-img" alt="eye" src={gonzo}></img>
          <img className="bottom-img" alt="eye" src={final}></img>
          <img className="bottom-img" alt="eye" src={me}></img>
          <img className="bottom-img" alt="eye" src={paper}></img>
          <img className="bottom-img" alt="eye" src={pills}></img>
          <img className="bottom-img" alt="eye" src={siggy}></img>
        </div>
      </section>
    </>
  );
}

export default Screwjack;
