import React from "react";
import styles from "./Login.module.scss";

class Login extends React.Component {
  render() {
    return (
      <button className={styles.logIn} onClick={this.props.signIn}>
        {this.props.text}
      </button>
    );
  }
}

export default Login;
