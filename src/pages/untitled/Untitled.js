import React from "react";
import "./styles.css";
import poster from "./poster_no.png";

function Untitled() {
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
              <strong>Starring:</strong> Sean Cortese, Anthony Cortese, Others
            </li>

            <li className="title1">
              <strong>Produced by:</strong> Infinity Forever Productions
            </li>
            <li className="title1">
              <strong>Year:</strong> 2023
            </li>
          </div>
          <div className="bottom-description">
            <p className="film-description">
              The script has been completed, but the project is being kept
              heavily under wraps. This will be our official entry into the
              Oscars for 2023! We will update you with more information as it
              becomes available.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Untitled;
