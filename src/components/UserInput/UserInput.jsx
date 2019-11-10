import React, { Component } from "react";

class UserInput extends Component {
  render() {
    return (
      <>
        <p> Please choose how many of your face you'd like to see</p>
        <input type="number" onChange={this.props.handleChange} />
      </>
    );
  }
}

export default UserInput;
