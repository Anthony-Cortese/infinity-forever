import React from "react";
import "./styles.css";
import poster from "./poster_no.png";

function Uncut() {
  return (
    <>
      <section id="bottom-info">
        <div className="movie-poster">
          <img className="poster" alt="eye" src={poster}></img>
        </div>
        <div className="bottom-film">
          <div className="bottom-info2">
            <li className="title1">
              <strong>Directed by:</strong> Anthony Cortese & Parker Paulsen
            </li>
            {/* <li className="title1">Anthony Cortese</li> */}
            <li className="title1">
              <strong>Adapted by:</strong> Anthony Cortese
            </li>

            <li className="title1">
              <strong>Based on:</strong> Uncut Gems
            </li>
            {/* <li className="title1">Sean Cortese</li> */}
            <li className="title1">
              <strong>Starring: Sean Cortese & Scott Paulsen </strong>
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
              This is a special adaptation based on the film Uncut Gems by The
              Safdie Brothers. This would mark the first film to include the 4
              cousins together and has a complete Oscars twist to the story. The
              film has not officially been green lit by the committee but the
              plan would be to have this be our second submission into the SLC
              OSCARS in 2023. <br />
              <br />
              Check our{" "}
              <a
                className="updates"
                href="https://www.instagram.com/infinityforeverproductions/"
              >
                Instagram
              </a>{" "}
              or{" "}
              <a
                className="updates"
                href="https://www.youtube.com/channel/UCWaEaluGSg-on1BsWwrsOag"
              >
                YouTube
              </a>{" "}
              page for official confirmation on the status of this project!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Uncut;
