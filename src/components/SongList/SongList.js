import React, { Component } from "react";
import Song from "../Song/Song";
import { Route } from "react-router-dom";

class songlist extends Component {
  constructor() {
    super();

    this.state = {
      songs: ["Emotionless", "Summer Games", "On Your Feelings"]
    };
  }
  render() {
    return (
      <div>
        <h2> Tracklist </h2>
        <br />
        {this.state.songs[0]}
        <br />
        {this.state.songs[1]}
        <br />
        <br />
        <Song />
        <Route path="/song" component={Song} />
      </div>
    );
  }
}

export default songlist;
