import React, { useState } from "react";
// import Mike from "../pages/oscars/pictures/taylor.mp4";
import ReactPlayer from "react-player";
import "./styles.css";

export default function Video() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };
  return (
    <div className="App">
      <h1 className="oscar-title">2022 OSCAR NIGHT KICKOFF</h1>
      <div>
        {/* <img
          src={Img}
          className="video-thumb tiny"
          alt="thumb"
          style={{ opacity: isVideoLoaded ? 0 : 1 }}
        /> */}
        <div style={{ opacity: isVideoLoaded ? 1 : 0 }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=2_NJm87Glsk"
            playing={true}
            controls={true}
            loop={true}
            muted={false}
            playsinline={true}
            onReady={onLoadedData}
            width={340}
            height={160}
          />
        </div>
      </div>
    </div>
  );
}
