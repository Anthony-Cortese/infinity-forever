import React from "react";
import { Link } from "react-router-dom";
import { BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import "./styles.css";

function Menu() {
  return (
    <section id="side-menu">
      <div className="navigation-div">
        <nav className="navigation">
          <Link to="/" style={{ textDecoration: "none" }}>
            {" "}
            <ul>ABOUT</ul>{" "}
          </Link>
          <Link to="/Productions" style={{ textDecoration: "none" }}>
            <ul>PRODUCTIONS</ul>
          </Link>
          <Link to="/SLCOscars" style={{ textDecoration: "none" }}>
            <ul>SLC OSCARS</ul>
          </Link>
        </nav>

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

export default Menu;
