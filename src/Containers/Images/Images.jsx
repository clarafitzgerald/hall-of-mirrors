import React, { Component } from "react";
import Image from "../../components/Image/Image";

class Images extends Component {
  state = { correctedArray: this.props.correctedArray };
  isCorrected = (index, boolean) => {
    const correctedArray = this.state.correctedArray;
    correctedArray[index] = boolean;
    this.setState({ correctedArray });
  };
  render() {
    let image =
      this.props.user !== null
        ? this.props.user.photoURL
        : "../../images/default";

    let randNum = max => {
      return Math.ceil(Math.random() * max);
    };
    let innerHtml = [];
    for (let index = 0; index < this.props.numImages; index++) {
      innerHtml.push(
        <Image
          src={image}
          alt="display"
          key={index}
          randomNumber360={randNum(360)}
          randomNumber2={randNum(2)}
          firstRandomNumber255={randNum(255)}
          secondRandomNumber255={randNum(255)}
          thirdRandomNumber255={randNum(255)}
          numImages={this.props.numImages}
          isCorrected={this.isCorrected}
          index={index}
          handleImageClick={this.props.handleImageClick}
          game={this.props.game}
        />
      );
    }

    return <>{innerHtml}</>;
  }
}

export default Images;
