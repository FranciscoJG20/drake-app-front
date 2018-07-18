import React, { Component } from "react";

class Song extends Component {
  constructor() {
    super();

    this.state = {
      name: ""
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
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
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default Song;
