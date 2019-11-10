import React, { Component } from "react";
import { Link } from "@reach/router";

class Game extends Component {
  state = {};
  render() {
    return (
      <>
        <h1>The game is coming soon.</h1>
        <Link to="/hall">Go to the hall instead</Link>
      </>
    );
  }
}

export default Game;
