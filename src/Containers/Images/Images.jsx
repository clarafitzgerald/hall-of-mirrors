import React, { Component } from "react";
import Image from "../../components/Image/Image";

class Images extends Component {
  state = {};
  render() {
    let image =
      this.props.user !== null
        ? this.props.user.photoURL
        : "../../images/default";

    let numImages = 3;
    let innerHtml = [];
    for (let index = 0; index < numImages; index++) {
      let randomNumber = Math.ceil(Math.random() * 360);
      innerHtml.push(
        <Image
          src={image}
          alt="display"
          key={index}
          randomNumber={randomNumber}
        />
      );
    }
    return <> {innerHtml}</>;
  }
}

export default Images;
