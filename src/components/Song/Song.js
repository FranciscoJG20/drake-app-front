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
    axios
      .post("https://drake-mern.herokuapp.com/api/song", {
        name: this.state.name
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state.name);
    return (
      <div>
        <form onSubmit={this.handleNewSong}>
          <input
            type="text"
            placeholder="song name"
            name="name"
            onChange={this.handleInput}
          />
          <br />
          <button type="submit" value="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Song;
