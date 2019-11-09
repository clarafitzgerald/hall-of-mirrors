import React from "react";

class Login extends React.Component {
  render() {
    return <button onClick={this.props.signIn}> {this.props.text} </button>;
  }
}

export default Login;
