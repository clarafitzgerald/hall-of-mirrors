import React, { Component } from "react";

class Image extends Component {
  state = {
    rotationValue: this.props.randomNumber360,
    scale: this.props.randomNumber2,
    color: `rgb(${this.props.firstRandomNumber255}, ${this.props.secondRandomNumber255}, ${this.props.thirdRandomNumber255})`
  };

  render() {
    let resetTransformations = () => {
      if (this.state.rotationValue !== 0) {
        this.setState({ rotationValue: 0, scale: 1, color: "transparent" });
      } else {
        this.setState({
          rotationValue: this.props.randomNumber360,
          scale: this.props.randomNumber2,
          color: `rgb(${this.props.firstRandomNumber255}, ${this.props.secondRandomNumber255}, ${this.props.thirdRandomNumber255})`
        });
      }
    };

    let randomRotation = `rotate(${this.state.rotationValue}deg)`;
    let numRows = Math.floor(Math.sqrt(this.props.numImages));
    // here I am finding the heighest square number less than my number of images, to obtain a reasonable number of rows for the required number of images to be set across
    let width = `${(100 * numRows * this.state.scale) /
      this.props.numImages}vh`;
    // now I'm taking the full viewport width multiplied by the number of rows set across, and dividing this by the number of images I want in a row to obtain an appropriate viewport width for each image to take up
    let height = "auto";
    let transformation = {
      transform: randomRotation,
      width,
      height
    };

    let color = {
      backgroundColor: this.state.color
    };
    console.log(color);

    return (
      <div style={color}>
        <img
          src={this.props.src}
          alt="display"
          style={transformation}
          onClick={resetTransformations}
        />
      </div>
    );
  }
}

export default Image;
