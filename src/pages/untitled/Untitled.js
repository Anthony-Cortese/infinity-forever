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
              <strong>Starring:</strong> Sean Cortese and Sunny Mulldoon
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
              Filming begins in early January in preperation for the SLC OSCARS
              2023. The scene is still being kept under wraps in hopes to
              surprise the crowd. Filming should be finished by mid January and
              will enter post production. Check back in for updates around the
              date of the Oscar night! <br />
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

export default Untitled;
