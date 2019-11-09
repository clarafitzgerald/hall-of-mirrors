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
    let numRows = Math.floor(Math.sqrt(this.props.numImages));
    // here I am finding the heighest square number less than my number of images, to obtain a reasonable number of rows for the required number of images to be set across
    let width = `${(100 * numRows) / this.props.numImages}vh`;
    // now I'm taking the full viewport width multiplied by the number of rows set across, and dividing this by the number of images I want in a row to obtain an appropriate viewport width for each image to take up
    let height = "auto";
    let transformation = { transform: randomRotation, width, height };

    console.log(width);
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
