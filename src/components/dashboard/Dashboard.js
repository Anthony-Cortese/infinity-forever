import React from "react";
import "./styles.css";
import title from "../../pages/screwjack/pictures/title.png";
import joint from "../../pages/hollywood/pictures/joint.png";
import together from "../../pages/wolf/pictures/Together.png";
import sean from "../../pages/underneath/pictures/Sean at car.png";
import siggy from "../../pages/screwjack/pictures/siggy.png";
import Films from "./Films";
import Coming from "./Coming";

function Dashboard() {
  return (
    <>
      <section id="dashboard-div">
        <div className="img-container1">
          {/* <div className="signs-dash">
            <div className="sign-dash"> </div>
            <div className="sign-dash1"> </div>
          </div> */}
          <div className="featured-div">
            <img
              className="large-screwjack-img"
              alt="large-underneath-bottom"
              src={title}
            ></img>
          </div>
        </div>

        <div className="film-info-dash">
          <h4 className="title">FILM</h4>
          <h4 className="title">SCREW JACK</h4>
          <h4 className="title">2022</h4>
        </div>
        {/* <div className="dotted-line-dash"></div> */}
      </section>
      <Films />
    </>
  );
}

export default Dashboard;
