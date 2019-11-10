import React, { Component } from "react";
import { Link } from "@reach/router";

class Game extends Component {
  state = {};
  render() {
    return (
      <>
        <h1>The game is coming soon.</h1>
        <p> Game ideas:</p>
        <ul style={{ textAlign: "left", display: "block", marginLeft: "20vw" }}>
          <li>
            Image slowly turns, you have to click it before it gets to 180
            degrees to save it. As soon as any die, you're out.
          </li>
          <li>
            Include stopwatch - make all the images normal again in the quickest
            time possible.
          </li>
        </ul>
        <Link
          to="/hall"
          style={{
            textDecoration: "none",
            color: "white",
            backgroundColor: "#56bc8a",
            borderRadius: "20px",
            padding: "10px",
            margin: "10px"
          }}
        >
          Go to the hall instead
        </Link>
      </>
    );
  }
}

export default Game;
