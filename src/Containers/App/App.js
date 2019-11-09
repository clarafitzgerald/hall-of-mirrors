import React from "react";
import Images from "../Images";
import Login from "../../components/Login";
import firebase, { provider } from "../../firebase";
import { globalHistory } from "@reach/router";
import UserInput from "../../components/UserInput";
import styles from "./App.module.scss";
import { Link } from "@reach/router";
import { Router } from "@reach/router";
import Game from "../Game/Game";

class App extends React.Component {
  state = { user: null, numImages: 0 };
  signIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        const user = result.user;
        console.log(user);
        this.setState({ user: user });
        globalHistory.navigate("/welcome");
        // global history here tells the browser where to send you once logged in
      })
      .catch(error => console.log(error));
  };

  setInputValue = event => {
    this.setState({
      numImages: event.target.value
    });
  };

  render() {
    let html =
      this.state.numImages > 5000 && this.state.user != null ? (
        <>
          <section className={styles.form}>
            <UserInput handleChange={this.setInputValue} />
          </section>
          <p>
            Sorry, loading this many images takes too long. Please choose a
            number less than or equal to 5000.
          </p>
          <p>
            I like you for testing the limits though, would you like to play a
            game?
          </p>
          <Link to="/game">Game</Link>
          <Router>
            <Game path="/game" />
          </Router>
        </>
      ) : this.state.user != null ? (
        <>
          <section className={styles.form}>
            <UserInput handleChange={this.setInputValue} />
          </section>
          <section className={styles.mainContent}>
            <Images user={this.state.user} numImages={this.state.numImages} />
          </section>
        </>
      ) : (
        <>
          <Login signIn={this.signIn} text="Sign in" />
        </>
      );

    return <>{html}</>;
  }
}

export default App;
