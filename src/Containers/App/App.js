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
        console.log(user);
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

  state = { isFlipped: false, counter: 0 };

  handleClick = () => {
    this.setState({
      isFlipped: !this.state.isFlipped,
      counter: this.state.counter + 1
    });
  };

  render() {
    let rotation = 0;
    let addRotation = () => {
      rotation += 100;
      console.log(rotation);
    };
    let myVar = setInterval(addRotation, 1000);
    if (rotation > 360) {
      clearInterval(myVar);
    }

    let randomRotation = `rotate(${rotation}deg)`;
    let transformation = { transform: randomRotation };
    let html =
      this.state.user != null ? (
        <section className={styles.welcome}>
          <h1>Would you like to enter the Hall of Mirrors or play a game?</h1>
          <section className={styles.buttons}>
            <button>
              <Link to="/hall">Enter the Hall</Link>
            </button>
            <button>
              <Link to="/game">Play the Game</Link>
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
          <a>
            <Login signIn={this.signIn} text="Sign in" />
          </a>
          <div style={transformation} className={styles.test}>
            HAT
          </div>
        </section>
      );

    return <>{html}</>;
  }
}

export default App;
