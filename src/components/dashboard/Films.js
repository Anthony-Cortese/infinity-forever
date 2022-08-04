import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
// import joint from "../../pages/hollywood/pictures/joint.png";
import together from "../../pages/wolf/pictures/Together.png";
import sean from "../../pages/underneath/pictures/Sean at car.png";
import siggy from "../../pages/screwjack/pictures/siggy.png";
import tv from "../../pages/hollywood/pictures/tv.png";
import Coming from "./Coming";

function Films() {
  return (
    <>
      <section id="coming">
        <div className="coming-div">
          <Coming />
        </div>
      </section>
      <section id="second-movie-row">
        <div className="movie-2">
          <div className="holly">
            <Link to="/Screwjack">
              <img className="together" src={siggy} alt="together" />
            </Link>
          </div>
          <div className="dash-info1">
            <h4 className="title">FILM</h4>
            <h4 className="title">SCREW JACK</h4>
            <h4 className="title">2022</h4>
          </div>
          <div className="dotted-line"></div>
        </div>
        <div className="movie-1">
          <div className="holly">
            <Link to="/OnceUponATimeInProvo">
              <img className="together" src={tv} alt="together" />
            </Link>
          </div>
          <div className="dash-info">
            <h4 className="title">FILM</h4>
            <h4 className="title">ONCE UPON A TIME IN... PROVO</h4>
            <h4 className="title">2021</h4>
          </div>
          <div className="dotted-line"></div>
        </div>
      </section>
      <section id="second-movie-row1">
        <div className="movie-2">
          <div className="holly">
            <Link to="/Venice">
              <img className="together" src={together} alt="together" />
            </Link>
          </div>
          <div className="dash-info1">
            <h4 className="title">FILM</h4>
            <h4 className="title">VENICE</h4>
            <h4 className="title">2020</h4>
          </div>
          <div className="dotted-line"></div>
        </div>
        <div className="movie-1">
          <div className="holly">
            <Link to="/UnderneathTheBottom">
              <img className="together" src={sean} alt="together" />
            </Link>
          </div>
          <div className="dash-info">
            <h4 className="title">FILM</h4>
            <h4 className="title">UNDERNEATH THE BOTTOM</h4>
            <h4 className="title">2010</h4>
          </div>
          <div className="dotted-line"></div>
        </div>
      </section>
    </>
  );
}

export default Films;
