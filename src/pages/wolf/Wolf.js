import React, { useState } from "react";
import "./styles.css";
import belfort from "./pictures/Belfort.png";
import poster from "./pictures/VenicePoster.png";
import naomi from "./pictures/Naomi.png";
import sabi from "./pictures/Sabi.png";
import sleep from "./pictures/Sleep.png";
import together from "./pictures/Together.png";
import water from "./pictures/Water.png";
import venice from "./pictures/Venice.png";
import ModalVideo from "react-modal-video";

function Wolf() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section id="wolf">
        <div className="wolf-main">
          <div className="large-wolf-div">
            <ModalVideo
              className="modal-video"
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId="jr6vgvhJlH0"
              onClose={() => setOpen(false)}
            />
            <button className="btn-primary2" onClick={() => setOpen(true)}>
              <img
                className="large-bottom-img"
                alt="large-underneath-bottom"
                src={venice}
              ></img>
            </button>
            <div className="film-info">
              <h4 className="title">FILM</h4>
              <h4 className="title">VENICE</h4>
              <h4 className="title">2020</h4>
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
              The first short scene that Infinity Forever Productions ever
              submitted at the Salt Lake City Oscars film festival. Picked from
              the shockingly raunchy & depraved real-life story of Jordan
              Belfort during his time as a shady stock broker on early 90s Wall
              Street. This scene encapsulates the self-gratifying behavior that
              came with wild monetary success fueled by drugs & greed. Wanting
              to make a splash with our first submission, this scene held all
              the elements that would bring the audience to their upright
              positions in their seats. A review from the SLC Oscars called it,
              “hot and wet as freshly butchered meat. Sean’s visceral and
              rapacious performance provoked the SLC Oscars crowd to reconsider
              the boundaries of agreeability.”
            </p>
            <br />
            <div className="bottom-description1">
              <p className="film-description1">
                --Nothing like showing up the newest faces at the SLC Oscars and
                knocking the collective socks off the audience by coming out as
                hot and wet as freshly butchered meat. Venice stood out as the
                only submission at the SLC Oscars capable of matching the
                unruliness and bacchanalia of the party itself. Sean’s visceral
                and rapacious performance provoked the SLC Oscars crowd to
                reconsider the boundaries of agreeability. We look forward to
                what Infinity Forever Productions has in store for us next
                year.--
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="wolf-photos">
        <div className="wolf-pics">
          <img className="bottom-img" alt="eye" src={belfort}></img>
          <img className="bottom-img" alt="eye" src={naomi}></img>
          <img className="bottom-img" alt="eye" src={sabi}></img>
          <img className="bottom-img" alt="eye" src={sleep}></img>
          <img className="bottom-img" alt="eye" src={together}></img>
          <img className="bottom-img" alt="eye" src={water}></img>
        </div>
      </section>
    </>
  );
}

export default Wolf;
