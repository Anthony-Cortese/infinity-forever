import React from "react";
import jen from "./pictures/Jen.png";
import eye from "./pictures/Eye.png";
import hooded from "./pictures/Hooded man.png";
import sean1 from "./pictures/Sean at car.png";
import sean2 from "./pictures/Sean Profile.png";
import bottom from "./pictures/movieposterunder.png";
import poster from "./pictures/utbmovieposter.png";
import "./styles.css";
import Eye from "./Eye";

function Bottom() {
  return (
    <>
      <section id="bottom">
        <div className="bottom-main">
          <div className="large-bottom-div">
            <Eye />
            <img
              className="large-bottom-img"
              alt="large-underneath-bottom"
              src={bottom}
            ></img>
            <div className="film-info">
              <h4 className="title">FILM</h4>
              <h4 className="title">UNDERNEATH THE BOTTOM</h4>
              <h4 className="title">2010</h4>
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
            <li className="title1">
              <strong>Directed by:</strong> Anthony Cortese
            </li>
            {/* <li className="title1">Anthony Cortese</li> */}
            <li className="title1">
              <strong>Written by:</strong> Anthony Cortese
            </li>

            {/* <li className="title1">Sean Cortese</li> */}
            <li className="title1">
              <strong>Starring: </strong>Jennifer Muldoon, Sean Cortese, Terry
              Cortese, Jan Cortese
            </li>
            <li className="title1">
              <strong>Edited by:</strong> Anthony Cortese
            </li>
            <li className="title1">
              <strong>Produced by:</strong> Infinity Forever Productions
            </li>
            <li className="title1">
              <strong>Year:</strong> 2010
            </li>
          </div>
          <div className="bottom-description">
            <p className="film-description">
              A short film inspired about the horrors that lay in wait for us in
              every day surroundings. How simply being in the wrong place at the
              wrong time can turn every day monotony into your worst nightmare.
              A newlywed couple is forced to spend a night at a dreary motel
              after their car breaks down while on honeymoon. What waits for the
              couple inside is an unforeseen spiral of decrepit terror that
              waits at the gates of hell. Uncover the fear that lies just
              Underneath The Bottom.
            </p>
          </div>
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
