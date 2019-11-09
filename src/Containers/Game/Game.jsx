import React, { Component } from "react";
import Image from "../../components/Image";

class Game extends Component {
  state = {};
  render() {
    return (
      <>
        <Image user={this.props.user} />
      </>
    );
  }
}

export default Game;
