import React from "react";
import "./styles.css";
import big from "./pictures/big.png";
import both from "./pictures/both.png";
import gonzo from "./pictures/dr gonzo.png";
import final from "./pictures/final.png";
import me from "./pictures/me.png";
// import movie from "./pictures/movie.png";
import paper from "./pictures/paper.png";
import pills from "./pictures/pills.png";
import siggy from "./pictures/siggy.png";
import screw from "./pictures/Screw.png";
import screw1 from "./pictures/screwjackmovieposter.png";

function Screwjack() {
  return (
    <>
      <section id="screwjack">
        <div className="screwjack-main">
          <div className="large-screwjack-div">
            <img
              className="large-screwjack-img"
              alt="large-underneath-bottom"
              src={screw}
            ></img>

            <div className="screw-info">
              <h4 className="title">FILM</h4>
              <h4 className="title">SCREW JACK</h4>
              <h4 className="title">2021</h4>
            </div>
            <div className="dotted-line"></div>
          </div>
        </div>
      </section>

      <section id="bottom-info">
        <div className="movie-poster">
          <img className="poster" alt="eye" src={screw1}></img>
        </div>
        <div className="bottom-film">
          <div className="bottom-info2">
            <li className="title1">
              <strong>Directed by:</strong> Anthony Cortese
            </li>
            <li className="title1">
              <strong>Adapted by:</strong> Sean Cortese
            </li>
            <li className="title1">
              <strong>Based on:</strong> Screw Jack written by Hunter S.
              Thompson
            </li>

            <li className="title1">
              <strong>Starring: </strong>Sean Cortese, Anthony Cortese
            </li>
            <li className="title1">
              <strong>Edited by:</strong> Anthony Cortese
            </li>
            <li className="title1">
              <strong>Produced by:</strong> Infinity Forever Productions
            </li>
            <li className="title1">
              <strong>Year:</strong> 2022
            </li>
          </div>
          <div className="bottom-description">
            <p className="film-description">
              Adapted from Hunter S. Thompson’s short novel, “Screwjack” is the
              story of a rapturous night in 1969 where Hunter was on deadline to
              finish a story, without of his normal cocktail of alchohol &
              psychedelics Thompson is forced to come up with a story on his own
              volition at least that is how he remembers it. Take a look back at
              what would be the beginning of the Gonzo journalist’s bizarre yet
              revolutionizing way of putting himself right in the tornado of the
              articles he would write for Rolling Stone magazine as well as his
              novels. An ode to Dr. Thompson this was a passion project that
              came out of love for Thompson’s writing whose work seems more
              relevant today than ever before. Sit back and watch the savage
              birth of the most prolific and fearless writer of the 20th
              century.
            </p>
          </div>
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
