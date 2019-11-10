import React from "react";
import Login from "../../components/Login";
import firebase, { provider } from "../../firebase";
import { globalHistory } from "@reach/router";
import styles from "./App.module.scss";
import { Link } from "@reach/router";
import { Router } from "@reach/router";
import Game from "../Game/Game";
import Hall from "../Hall";

class App extends React.Component {
  state = { user: null, numImages: 0, rotation: 0 };
  signIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        const user = result.user;
        this.setState({ user: user });
        globalHistory.navigate("/");
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
      this.state.user != null ? (
        <section className={styles.welcome}>
          <h1>Would you like to enter the Hall of Mirrors or play a game?</h1>
          <section className={styles.buttons}>
            <button>
              <Link
                to="/hall"
                style={{ textDecoration: "none", color: "white" }}
              >
                Enter the Hall
              </Link>
            </button>
            <button>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/game"
              >
                Play the Game
              </Link>
            </button>
          </section>
          <Router>
            <Hall
              path="/hall"
              numImages={this.state.numImages}
              user={this.state.user}
              setInputValue={this.setInputValue}
            />
            <Game path="/game" user={this.state.user} />
          </Router>
        </section>
      ) : (
        <section className={styles.logIn}>
          <h1> You have to log in to access this website. </h1>
          <div>
            <Login signIn={this.signIn} text="Sign in" />
          </div>
        </section>
      );

    return <>{html}</>;
  }
}

export default App;
