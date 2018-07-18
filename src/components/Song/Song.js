import React, { Component } from "react";

class Song extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="song">Add Song Here</label>
          <br />
          <input type="text" placeholder="song name" />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default Song;
