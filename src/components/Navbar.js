import React from "react";
import { Link } from "react-router-dom";
import { BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import "./styles.css";
import logo from "./loko.png";

function Navbar() {
  return (
    <section id="navbar">
      <div className="full-navbar">
        <div className="navigation-div">
          <li className="navigation">
            <Link to="/">
              {" "}
              <ul>ABOUT</ul>{" "}
            </Link>
            <Link to="/Productions">
              <ul>PRODUCTIONS</ul>
            </Link>
            <Link to="/SLCOscars">
              <ul>SLC OSCARS</ul>
            </Link>
          </li>
        </div>

        <div className="navbar-logo">
          <img className="logos" src={logo} alt="logos"></img>
        </div>

        <div className="logos-navbar">
          <a href="https://www.youtube.com/channel/UCWaEaluGSg-on1BsWwrsOag">
            <BsYoutube className="logos-icon" />
          </a>

          <a href="https://www.instagram.com/infinityforeverproductions/">
            <AiFillInstagram className="logos-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
