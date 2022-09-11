import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
// import Video from "../src/assets/video";
// import Mike from "../src/pages/oscars/pictures/taylor.mp4";

// const VIDEO = {
//   src:Mike,
//   type:'video/mp4'
//  };

//  class App1 extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       src: VIDEO.src,
//       type:VIDEO.type
//     }
//   };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
