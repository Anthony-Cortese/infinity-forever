import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import "./styles.css";

function Menu() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  console.log(showSidebar);

  return (
    <section id="side-menu">
      <div className="navigation-div">
        <nav className={sidebar ? "nav-menu-active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
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
          </ul>
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
