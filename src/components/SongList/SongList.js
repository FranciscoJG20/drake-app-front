import React, { Component } from "react";
import Song from "../Song/Song";
import { Route, Link } from "react-router-dom";

class songlist extends Component {
  render() {
    return (
      <div>
        <p> I am the tracklist! </p>
        <Song />
        <Link to="/addsong">Add song</Link>
        <Route path="/song" component={Song} />
      </div>
    );
  }
}

export default songlist;
