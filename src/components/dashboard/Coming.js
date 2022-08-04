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
                <p>SLC OSCARS PROJECT</p>
                <p>2023</p>
              </span>
            </Link>
          </div>
          <div className="card">
            <Link to="/Untitled" style={{ textDecoration: "none" }}>
              <span className="coming-soon">
                <p>SLC OSCARS PROJECT</p>
                <p>2023</p>
              </span>
            </Link>
          </div>

          <div className="card">
            <Link to="/Untitled" style={{ textDecoration: "none" }}>
              <span className="coming-soon">
                <p>HORROR SHORT FILM</p>
                <p>2023</p>
              </span>
            </Link>
          </div>
          <div className="card">
            <Link to="/TV" style={{ textDecoration: "none" }}>
              <span className="coming-soon">
                <p>TV SHOW PILOT</p>
                <p>2024</p>
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
