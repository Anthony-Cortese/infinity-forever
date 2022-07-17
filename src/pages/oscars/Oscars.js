import React from "react";
import "./styles.css";
import oscar from "./pictures/oscars.png";
import oscar1 from "./pictures/1.png";
import oscar2 from "./pictures/2.png";
import oscar3 from "./pictures/3.png";
import oscar4 from "./pictures/4.png";
import oscar5 from "./pictures/5.png";
import { BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import ReactPlayer from "react-player";

function Oscars() {
  return (
    <>
      <section id="oscars-top">
        <div className="oscars-banner">
          <img className="oscars-img" src={oscar} alt="oscar" />
        </div>
        <div className="about-oscars">
          <h3 className="yellow">
            The best Oscar Party in the world happens in Salt Lake City, Utah.
            We live by the motto: "better to be a king for a night than a
            schmuck for a lifetime." Pretending to be famous is kind of our
            thing
          </h3>
          <br />
          <h3 className="yellow">
            *still waiting on our Big Daddy's Pizza sponsorship
          </h3>
        </div>
        <div className="oscar-icons">
          <a href="https://www.youtube.com/user/scottkpaulsen/featured">
            <BsYoutube className="oscars-icon" />
          </a>
          <a href="https://www.instagram.com/oscarpartyslc/">
            <AiFillInstagram className="oscars-icon1" />
          </a>
        </div>
        <div className="trailers-div">
          <div className="coming">
            <div className="new-movie-div">
              <div className="new-movie">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=p2nsSiv3tno"
                  controls
                  // playbackRate = {2}
                  height="221.97px"
                  width="394.63px"
                />
              </div>
              <div className="new-movie">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=RDFPJRw_lS0"
                  controls
                  // playbackRate = {2}
                  height="221.97px"
                  width="394.63px"
                />
              </div>
              {/* <div className="new-movie">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=pE1V9EycaUA"
                  controls
                  // playbackRate = {2}
                  height="221.97px"
                  width="394.63px"
                />
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section id="infinity-oscar">
        <div className="oscar-div">
          <img className="oscar-img1" alt="oscar" src={oscar2}></img>
          <p>This will be information about how we made it into the oscars.</p>
        </div>
      </section>
      <section id="oscar-photos">
        <div className="oscar-pics">
          <img className="oscar-img" alt="oscar" src={oscar1}></img>
          <img className="oscar-img" alt="oscar" src={oscar2}></img>
          <img className="oscar-img" alt="oscar" src={oscar3}></img>
          <img className="oscar-img" alt="oscar" src={oscar4}></img>
          <img className="oscar-img" alt="oscar" src={oscar5}></img>
        </div>
      </section>
    </>
  );
}

export default Oscars;
