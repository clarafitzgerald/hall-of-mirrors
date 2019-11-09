import React from "react";
import Images from "../Images";
import Login from "../../components/Login";
import firebase, { provider } from "../../firebase";
import { globalHistory } from "@reach/router";

class Routes extends React.Component {
  state = { user: null };
  signIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        const user = result.user;
        console.log(user);
        this.setState({ user: user });
        globalHistory.navigate("/hall");
        // global history here tells the browser where to send you once logged in
      })
      .catch(error => console.log(error));
  };

  render() {
    let html =
      this.state.user != null ? (
        <Images user={this.state.user} />
      ) : (
        <Login signIn={this.signIn} />
      );

    return <>{html}</>;
  }
}

export default Routes;
