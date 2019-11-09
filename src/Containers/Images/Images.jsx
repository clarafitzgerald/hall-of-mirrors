import React, { Component } from "react";
import Image from "../../components/Image/Image";

class Images extends Component {
  render() {
    let image =
      this.props.user !== null
        ? this.props.user.photoURL
        : "../../images/default";

    let innerHtml = [];
    for (let index = 0; index < this.props.numImages; index++) {
      let randomNumber = Math.ceil(Math.random() * 360);
      innerHtml.push(
        <Image
          src={image}
          alt="display"
          key={index}
          randomNumber={randomNumber}
          numImages={this.props.numImages}
        />
      );
    }
    return <> {innerHtml}</>;
  }
}

export default Images;
