import React, { useState } from "react";
import "./styles.css";
import cliff from "./pictures/cliff.png";
import closed from "./pictures/closed.png";
import ending from "./pictures/ending.png";
import joint from "./pictures/joint.png";
import rick from "./pictures/rick.png";
import terry from "./pictures/terry.png";
import tv from "./pictures/tv.png";
import poster from "./pictures/movieposter.png";
import hollywood from "./pictures/oncemovieposter.png";
import ModalVideo from "react-modal-video";

function Hollywood() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section id="hollywood">
        <div className="hollywood-main">
          <div className="large-hollywood-div">
            <ModalVideo
              className="modal-video"
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId="b8ExvmTXhjE"
              onClose={() => setOpen(false)}
            />
            <button className="btn-primary1" onClick={() => setOpen(true)}>
              <img
                className="hollywood-img"
                alt="large-underneath-bottom"
                src={hollywood}
              ></img>
            </button>
          </div>
          <div className="film-info">
            <h4 className="title">FILM</h4>
            <h4 className="title">ONCE UPON A TIME IN... PROVO</h4>
            <h4 className="title">2021</h4>
          </div>
          <div className="dotted-line"></div>
        </div>
      </section>

      <section id="bottom-info">
        <div className="movie-poster">
          <img className="poster" alt="eye" src={poster}></img>
        </div>

        <div className="bottom-film">
          <div className="bottom-info2">
            <ul className="title1">
              <strong>Directed by:</strong> Anthony Cortese
            </ul>
            <ul className="title1">
              <strong>Adapted by:</strong> Anthony Cortese & Sean Cortese
            </ul>
            <ul className="title1">
              <strong>Based on:</strong> Once Upon A Time in... Hollywood by
              Quentin Tarantino
            </ul>
            <ul className="title1">
              <strong>Edited:</strong> Anthony Cortese
            </ul>
            <ul className="title1">
              <strong>Starring:</strong> Sean Cortese, Anthony Cortese
            </ul>
            <ul className="title1">
              <strong>With:</strong> Terry Cortese
            </ul>
            <ul className="title1">
              <strong>Produced by:</strong> Infinity Forever Productions
            </ul>
            <ul className="title1">
              <strong>Year:</strong> 2021
            </ul>
          </div>
          <div className="bottom-description">
            <p className="film-description">
              Our first stab at an original take on the splendid Quentin
              Tarrantino film “Once Upon A Time In Hollywood” finds Rick Dalton
              in Provo, Utah having a documentary crew following his every move
              trying to survive in the restrictive environment that is Happy
              Valley. Rick, a has been actor on the brink of losing his
              Hollywood career spends a weekend in Provo. As a chain smoker and
              alcoholic this may not be the place for Rick to revive his career.
              See what a day in the life of Rick Dalton outside his element
              looks like in this tale of absurd self-awareness.
            </p>
            <br />
            <p className="film-description1">
              --Critics described their first film ‘as hot and wet as freshly
              butchered meat’ but their sophomore effort took a less
              ostentatious approach. Once Upon a Time in Provo, a twist on
              Tarantino’s latest flick, was a farcical exhibit of the absurdity
              that is Utah County. And rumor has it there’s a 9 minute long
              directors cut. Although they are yet to take home any hardware,
              they’ve won over the hearts of the #slcoscars crowd and
              established themselves as essentials.--
            </p>
          </div>
        </div>
      </section>
      <section id="wolf-photos">
        <div className="wolf-pics">
          <img className="bottom-img" alt="eye" src={cliff}></img>
          <img className="bottom-img" alt="eye" src={closed}></img>
          <img className="bottom-img" alt="eye" src={ending}></img>
          <img className="bottom-img" alt="eye" src={joint}></img>
          <img className="bottom-img" alt="eye" src={rick}></img>
          <img className="bottom-img" alt="eye" src={terry}></img>
          <img className="bottom-img" alt="eye" src={tv}></img>
        </div>
      </section>
    </>
  );
}

export default Hollywood;
