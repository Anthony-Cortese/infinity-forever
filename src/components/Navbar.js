import React from "react";
import { Link } from "react-router-dom";
import { BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import "./styles.css";

function Navbar() {
  return (
    <section id="navbar">
      <div className="full-navbar">
        <div className="navigation">
          <li className="navigation">
            <Link to="/">
              {" "}
              <ul>ABOUT</ul>{" "}
            </Link>
            <Link to="/Productions">
              <ul>PRODUCTIONS</ul>
            </Link>
            <ul>SLC OSCARS</ul>
          </li>
        </div>
        <div className="navbar-logo">
          <h1 className="infinity-print">∞</h1>
        </div>

        {/* <div className="logos-navbar"> */}
        <BsYoutube className="logos-icon" />
        <a href="https://www.instagram.com/infinityforeverproductions/">
          <AiFillInstagram className="logos-icon" />
        </a>
        {/* </div> */}
      </div>
    </section>
  );
}

export default Navbar;
