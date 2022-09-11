import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { BsYoutube } from "react-icons/bs";
// import { AiFillInstagram } from "react-icons/ai";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import "./Sidebar.css";

function Sidebar() {
  const [active, setActive] = useState(false);

  const activateNav = () => {
    setActive(!active);
  };

  return (
    <div className={active ? "header" : "header-mobile"}>
      <div className="menu-icon" onClick={activateNav}>
        {!active ? (
          <IoMdMenu className="menu" />
        ) : (
          <IoMdClose className="menu" />
        )}
      </div>
      <div className="side-nav">
        <nav>
          <ul className={active ? "ul-item" : "ul-item oicon"}>
            <li className="links">
              <Link to="/About">ABOUT</Link>
            </li>

            <li className="links">
              <Link to="/">PRODUCTIONS</Link>
            </li>

            <li className="links">
              <Link to="/SLCOscars">SLC OSCARS</Link>
            </li>

            <li className="links">
              <Link to="/Youtube">YOUTUBE</Link>
            </li>

            <li className="links">
              <Link to="/Instagram">INSTAGRAM</Link>
            </li>
          </ul>
          <div className="side-icon"></div>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
