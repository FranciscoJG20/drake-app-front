import React, { Component } from "react";
import Song from "../Song/Song";
import { Route, Link } from "react-router-dom";
import axios from "axios";

class songlist extends Component {
  constructor() {
    super();

    this.state = {
      songs: []
    };
  }

  componentDidMount() {
    axios
      .get("https://drake-mern.herokuapp.com/api/song")
      .then(res => {
        console.log(res);
        this.setState({
          songs: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h2> Tracklist </h2>

        <Link to="/addsong">Add Song</Link>
        <Route path="/addsong" component={Song} />
      </div>
    );
  }
}

export default songlist;
