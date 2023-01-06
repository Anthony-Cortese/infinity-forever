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
              These are a compilation of true stories based on a real person we
              knew. Some of the stories did not actually happen to him, so they
              have been modified to answer the ultimate question "what would he
              do in this scenario if he was with us". These stories are 100%
              real, and yes so is this boy! Currently we have plans for 5
              episodes with 3 stories completely fleshed out. This project is
              still in the beginning stages but if all else fails we would at
              least love to tell one of these stories. <br />
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

export default TV;
