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

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    axios.delete("https://drake-mern.herokuapp.com/api/song/:id").then(res => {
      console.log(res);
      console.log(res.data);
    });
  }
  // send song id to url using axios

  // READ: songs will appear once user refreshes page. Must redirect to homepage
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

        {this.state.songs.map(song => (
          <li key={song.id} className="songName">
            <a href="" onClick={this.handleDelete}>
              x
            </a>
            {song.name}
          </li>
        ))}
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
