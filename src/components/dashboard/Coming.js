import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Coming() {
  return (
    <>
      <section id="coming">
        {/* <div className="title-side">
          <p className="title3">COMING SOON</p>
        </div> */}
        <div className="untitled">
          <div className="card">
            <Link to="/Untitled" style={{ textDecoration: "none" }}>
              <span className="coming-soon">
                <p className="coming-font">THE HOTEL</p>
                <p className="coming-font">2023</p>
              </span>
            </Link>
          </div>
          <div className="card1">
            <Link to="/New" style={{ textDecoration: "none" }}>
              <span className="coming-soon">
                <p className="coming-font1">UNCUT OSCARS</p>
                {/* <p className="coming-font">COLLABORATION</p> */}
                <p className="coming-font1">2023</p>
              </span>
            </Link>
          </div>

          <div className="card2">
            <Link to="/Horror" style={{ textDecoration: "none" }}>
              <span className="coming-soon">
                <p className="coming-font2">SILK</p>
                <p className="coming-font2">2023</p>
              </span>
            </Link>
          </div>
          <div className="card3">
            <Link to="/TV" style={{ textDecoration: "none" }}>
              <span className="coming-soon">
                <p className="coming-font">TV SHOW PILOT</p>
                <p className="coming-font">2024</p>
              </span>
            </Link>
          </div>
        </div>
        {/* <div className="dotted-line-dash"></div> */}
      </section>
    </>
  );
}

export default Coming;
