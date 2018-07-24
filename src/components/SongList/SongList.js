import React, { Component } from "react";
import Song from "../Song/Song";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import "./SongList.css";

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

        {this.state.songs.map(song => <li class="songName">{song.name}</li>)}
        <br />

        <Link to="/addsong" id="addSongButton">
          Add Song
        </Link>
        <Route path="/addsong" component={Song} />
      </div>
    );
  }
}

export default songlist;
