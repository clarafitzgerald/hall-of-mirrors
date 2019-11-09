import React from "react";

class Login extends React.Component {
  render() {
    return <button onClick={this.props.signIn}> Sign in</button>;
  }
}

export default Login;
