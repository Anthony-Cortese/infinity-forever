import React from "react";
import "./Eye.css";

function Eye() {
  return (
    <div className="eye-div">
      <svg className="eye" width={744} height={500} version="1.1">
        <defs>
          <path
            d="m-2.0101 793.76s83.843-17.173 120.21-41.416c36.365-24.244 101.02-90.914 143.44-106.07 42.426-15.152 111.12-35.355 176.78-16.162s159.6 95.964 175.77 106.07c16.162 10.102 72.731 50.508 86.873 54.548 14.142 4.0406 40.406 6.0609 40.406 6.0609s-112.13 26.264-172.74 83.843c-60.609 57.579-120.21 83.843-184.86 85.863-64.65 2.0203-137.38-24.244-174.76-47.477-37.37-23.23-114.15-84.85-129.3-92.93s-60.607-30.31-81.82-32.33z"
            fill="#FFFFFF"
            transform="translate(0 -552.36)"
            id="eye"
          />
          <mask id="mask">
            <rect width="20px" height="20px" fill="black" />
            <use xlinkHref="#eye" id="test" fill="pink" />
          </mask>
          <radialGradient id="grad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop
              offset="20%"
              style={{ stopColor: "#254a00", stopOpacity: 1 }}
            />
            <stop
              offset="40%"
              style={{ stopColor: "#254a00", stopOpacity: "0.75" }}
            />
            <stop
              offset="60%"
              style={{ stopColor: "#254a00", stopOpacity: "0.8" }}
            />
            <stop
              offset="80%"
              style={{ stopColor: "#254a00", stopOpacity: 1 }}
            />
          </radialGradient>
        </defs>
        <g>
          <use xlinkHref="#eye" id="eye-test" fill="pink" />
        </g>
        <g mask="url(#mask)">
          <circle cx={380} cy={235} r={110} fill="orange" />
          <circle cx={380} cy={235} r={55} fill="#132500" />
          <circle cx={380} cy={235} r={47} fill="black" />
          <circle cx={416} cy={200} r={15} fill="white" />
        </g>
      </svg>
    </div>
  );
}

export default Eye;
