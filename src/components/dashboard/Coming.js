import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Coming() {
  return (
    <>
      <section id="coming">
        <div className="title-side">
          <p className="title3">COMING SOON</p>
        </div>
        <div className="card">
          <Link to="/Untitled">
            <span className="coming-soon">
              <p>UNTITLED</p>
              <p>SLC OSCARS PROJECT</p>
              <p>2023</p>
            </span>
          </Link>
        </div>
        <div className="card">
          <Link to="/Untitled">
            <span className="coming-soon">
              <p>UNTITLED</p>
              <p>SLC OSCARS PROJECT</p>
              <p>2023</p>
            </span>
          </Link>
        </div>
        <div className="card">
          <Link to="/Untitled">
            <span className="coming-soon">
              <p>UNTITLED</p>
              <p>HORROR SHORT FILM</p>
              <p>2023</p>
            </span>
          </Link>
        </div>
        <div className="card">
          <Link to="/Untitled">
            <span className="coming-soon">
              <p>UNTITLED</p>
              <p>TV SHOW PILOT</p>
              <p>IN DEVELOPMENT</p>
            </span>
          </Link>
        </div>

        {/* <div className="dotted-line-dash"></div> */}
      </section>
    </>
  );
}

export default Coming;
