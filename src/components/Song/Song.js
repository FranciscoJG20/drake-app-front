import React, { Component } from "react";

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
      .post("https://drake-mern.herokuapp.com/api/song")
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
            onChange={this.props.handleInput}
          />
          <br />
          <button
            type="submit"
            value="submit"
            onClick={this.props.handleNewSong}
          />
        </form>
      </div>
    );
  }
}

export default Song;
