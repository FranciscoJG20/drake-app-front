import React, { Component } from "react";
import axios from "axios";

class Song extends Component {
  constructor() {
    super();

    this.state = {
      name: ""
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleNewSong = this.handleNewSong.bind(this);
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleNewSong(e) {
    e.preventDefault();
    const song = {
      name: this.state.name
    };
    axios
      .post("https://drake-mern.herokuapp.com/api/song", song)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="song">Add Song Here</label>
          <br />
          <input
            type="text"
            placeholder="song name"
            onChange={this.handleInput}
          />
          <br />
          <button type="submit" value="submit" onClick={this.handleNewSong}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Song;
