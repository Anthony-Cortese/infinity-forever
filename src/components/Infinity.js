import React from "react";
import "./Infinity.css";

function Infinity() {
  return (
    <div className="homepage-div">
      <img
        className="infinity-logo"
        src="https://i.ibb.co/DWLz8Zf/Untitled-1.png"
        alt="Untitled-1"
        border="0"
      />
      <div className="neon_box flicker-slow">
        {/* <h4 className="infinity neon_text">∞</h4> */}
        <h1 className="neon_text">
          <span className="flicker-slow">Infi</span>
          <span className="flicker-slow">nity</span>{" "}
          <span className="flicker-slow">F</span>
          <span className="flicker-fast">∞ev</span>
          <span className="flicker-slow">er</span>
        </h1>
      </div>
    </div>
  );
}

export default Infinity;
