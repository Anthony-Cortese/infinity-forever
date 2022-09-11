import React, { Component } from "react";
import { PageHeader } from "react-bootstrap";
import Video from "./Video";

class Content extends Component {
  render() {
    return (
      <div className="title">
        <video src={Video} autoPlay="true" />
      </div>
    );
  }
}

export default Content;
