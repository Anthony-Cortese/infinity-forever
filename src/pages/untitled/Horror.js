import React from "react";
import "./styles.css";
import poster from "./poster_no.png";

function Horror() {
  return (
    <>
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
              <strong>Starring:</strong>
            </li>

            <li className="title1">
              <strong>Produced by:</strong> Infinity Forever Productions
            </li>
            <li className="title1">
              <strong>Year:</strong> Unknown
            </li>
          </div>
          <div className="bottom-description">
            <p className="film-description">
              We are currently working through our ideas, and fleshing out the
              story. We will share updates as we complete the stories!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Horror;
