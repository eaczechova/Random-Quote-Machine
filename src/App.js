import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1 id="title">Random Quote Machine</h1>
        <div id="quote-box">
          <p id="text">Quote goes here</p>
          <p id="author">Author goes here</p>
        </div>
        <button id="new-quote">Twitt</button>
        <button id="tweet-quote">Next Quote</button>
      </div>
    );
  }
}

export default App;
