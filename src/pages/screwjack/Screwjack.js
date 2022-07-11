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
import screw from "./pictures/Screw.png";

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

      <section id="screwjack-info">
        <div className="movie-poster">
          <img className="poster" alt="eye" src={movie}></img>
        </div>
        <div className="screwjack-film">
          <div className="screw-actors">
            <ul className="title1">
              <strong>Directed by:</strong> Anthony Cortese
            </ul>
            {/* <li className="title1">Anthony Cortese</li> */}
            <ul className="title1">
              <strong>Adapted by:</strong> Sean Cortese
            </ul>
            <ul className="title1">
              <strong>Adapted by:</strong> Sean Cortese
            </ul>
            {/* <li className="title1">Sean Cortese</li> */}
            <ul className="title1">
              <strong>Starring: </strong>Sean Cortese, Anthony Cortese
            </ul>
            <ul className="title1">
              <strong>Edited by:</strong> Anthony Cortese
            </ul>
            <ul className="title1">
              <strong>Produced by:</strong> Infinity Forever Productions
            </ul>
            <ul className="title1">
              <strong>Year:</strong> 2022
            </ul>
            {/* <li className="title1">Sean Cortese</li> */}
          </div>
        </div>
        <div className="bottom-description">
          <p>
            Adapted from Hunter S. Thompson’s short novel, “Screwjack” is the
            story of a rapturous night in 1969 where Hunter was on deadline to
            finish a story, without of his normal cocktail of alchohol &amp;
            psychedelics Thompson is forced to come up with a story on his own
            volition at least that is how he remembers it. Take a look back at
            what would be the beginning of the Gonzo journalist’s bizarre yet
            revolutionizing way of putting himself right in the tornado of the
            articles he would write for Rolling Stone magazine as well as his
            novels. An ode to Dr. Thompson this was a passion project that came
            out of love for Thompson’s writing whose work seems more relevant
            today than ever before. Sit back and watch the savage birth of the
            most prolific and fearless writer of the 20 th century.
          </p>
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
