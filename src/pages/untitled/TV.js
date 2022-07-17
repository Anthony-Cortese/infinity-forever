import React from "react";
import "./styles.css";
import poster from "./poster_no.png";

function TV() {
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
              <strong>Starring: </strong>
            </li>

            <li className="title1">
              <strong>Produced by:</strong> Infinity Forever Productions
            </li>
            <li className="title1">
              <strong>Year:</strong> 2024
            </li>
          </div>
          <div className="bottom-description">
            <p className="film-description">
              The story has been in discussions for close to 10 years. There is
              a basic outline for the story, but the scripts needs to be
              written. The initial thought would be 5 episodes total-- currently
              we have a plan for 3 total.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default TV;
