import React, { Component } from "react";
import styles from "./Game.module.scss";
import Button from "../../components/Button";
import Images from "../Images";
import { globalHistory } from "@reach/router";
import { firestore } from "../../firebase";

class Game extends Component {
  state = {
    difficulty: null,
    status: false,
    runningTime: 0,
    correctedArray: [],
    numImages: 0,
    winStatus: false,
    subWinStatus: false,
    scores: []
  };

  checkWinStatus = () => {
    if (this.state.winStatus === true) {
      alert(
        `You win! You finished difficulty level ${
          this.state.difficulty.type
        } in ${this.state.runningTime /
          1000} seconds. Your score has been added to the leaderboard, click the leaderboard to check if you've made the top 25 for your difficulty`
      );
      firestore
        .collection("Leaderboard")
        .doc()
        .set({
          user: this.props.user.displayName,
          difficulty: this.state.difficulty.type,
          finishTime: this.state.runningTime
        })
        .then(() => {
          globalHistory.navigate("/leaderboard");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
      this.handleReset();
    }
  };

  handleClick = () => {
    let numImages = this.state.difficulty
      ? this.state.difficulty.numImages
      : this.state.numImages;

    let correctedArray = [];
    for (let index = 0; index < numImages; index++) {
      correctedArray = correctedArray.concat(false);
    }
    this.setState({ correctedArray });
    this.setState(state => {
      if (state.status) {
        clearInterval(state.timer);
      } else {
        const startTime = Date.now() - state.runningTime;
        state.timer = setInterval(() => {
          this.setState({ runningTime: Date.now() - startTime });
        }, 100);
      }
      return { status: !state.status };
    });
  };

  handleImageClick = () => {
    let winStatus =
      this.state.correctedArray.filter(booleanValue => booleanValue === false)
        .length === 1
        ? true
        : false;
    let subWinStatus =
      this.state.correctedArray.filter(booleanValue => booleanValue === false)
        .length === 0
        ? true
        : false;
    this.setState({ winStatus, subWinStatus });
    this.checkWinStatus();
  };

  handleReset = () => {
    this.setState(
      {
        runningTime: 0,
        status: true,
        difficulty: null,
        winStatus: false,
        subWinStatus: false,
        correctedArray: []
      },
      this.handleClick
    );
  };

  render() {
    let difficulties = [
      { type: "easy", numImages: 5 },
      { type: "mediocre", numImages: 25 },
      { type: "tough", numImages: 50 },
      { type: "hard", numImages: 100 },
      { type: "I've literally got all day", numImages: 500 }
    ];
    let addButtons = difficulties.map((difficulty, index) => (
      <Button
        className={styles.button}
        onClick={() => {
          this.setState({ difficulty });
        }}
        text={difficulty.type}
        key={index}
      />
    ));

    let initializeGame = this.state.difficulty ? (
      <div className={styles.buttons}>
        <p className={styles.button}>
          {Math.ceil(this.state.runningTime / 100) / 10}s
        </p>
        <button className={styles.button} onClick={this.handleClick}>
          {this.state.status ? "Pause" : "Start"}
        </button>
        <button className={styles.button} onClick={this.handleReset}>
          Play again?
        </button>
      </div>
    ) : (
      <>
        <p>First, select your difficulty</p>
        <section className={styles.buttons}>{addButtons}</section>
      </>
    );

    let addImages =
      this.state.difficulty &&
      this.state.status &&
      this.state.subWinStatus === false ? (
        <section className={styles.mainContent}>
          <Images
            activate={this.activate}
            user={this.props.user}
            numImages={this.state.difficulty.numImages}
            isActive={this.state.isActive}
            correctedArray={this.state.correctedArray}
            handleImageClick={this.handleImageClick}
            game={true}
          />
        </section>
      ) : (
        <section></section>
      );

    return (
      <>
        {initializeGame}
        {addImages}
      </>
    );
  }
}

export default Game;
