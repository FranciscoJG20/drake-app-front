import React, { Component } from "react";
import Song from "../Song/Song";

class songlist extends Component {
  render() {
    return (
      <div>
        <p> I am the tracklist! </p>
        <Song />
      </div>
    );
  }
}

export default songlist;
