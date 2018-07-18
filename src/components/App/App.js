import React, { Component } from "react";
import "./App.css";
import SongList from "../SongList/SongList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Scorpion </h1>
        </header>
        <p className="App-intro">
          This is a song tracklist of Drake's new album
        </p>
        <SongList />
      </div>
    );
  }
}

export default App;
