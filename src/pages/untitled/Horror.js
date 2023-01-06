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
              <strong>Starring: Sean Cortese and Sunny Muldoon</strong>
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
              This project is currently is pre-production but is being fast
              tracked tp begin initial photography upon completion of their
              Oscars entry. This is an original story from the mind of Anthony
              Cortese. This will be a special release diretly from Infinity
              Forever Productions with the intent of more promotional materials
              than an Oscar submission. <br />
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
              page for up to the minute updates and behind the scenes images
              into the production!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Horror;
