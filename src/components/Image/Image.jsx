import React, { Component } from "react";

class Image extends Component {
  state = { rotationValue: this.props.randomNumber };
  render() {
    let resetRotation = () => {
      if (this.state.rotationValue !== 0) {
        this.setState({ rotationValue: 0 });
      } else {
        this.setState({ rotationValue: this.props.randomNumber });
      }
    };
    let randomRotation = `rotate(${this.state.rotationValue}deg)`;
    let transformation = { transform: randomRotation };
    return (
      <img
        src={this.props.src}
        alt="display"
        style={transformation}
        onClick={resetRotation}
      />
    );
  }
}

export default Image;
