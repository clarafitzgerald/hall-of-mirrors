import React, { Component } from "react";
import styles from "./Game.module.scss";
import Button from "../../components/Button";
import Images from "../Images";
import Stopwatch from "../../components/Stopwatch";

class Game extends Component {
  state = { difficulty: null };

  // stopwatchOn = () => {
  //   this.setState({ isStopwatchRunning: true });
  // };

  // stopwatchOff = () => {
  //   this.setState({ isStopwatchRunning: false });
  // };

  render() {
    let difficulties = [
      { type: "easy", numImages: 5 },
      { type: "mediocre", numImages: 25 },
      { type: "tough", numImages: 625 },
      { type: "hard", numImages: 3125 },
      { type: "I've literally got all day", numImages: 5000 }
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

    let addImages = this.state.difficulty ? (
      <section className={styles.mainContent}>
        <Images
          activate={this.activate}
          user={this.props.user}
          numImages={this.state.difficulty.numImages}
          isActive={this.state.isActive}
        />
      </section>
    ) : null;

    // let renderGame = this.state.isStopwatchRunning ? addImages : "";
    return (
      <>
        <section className={styles.buttons}>{addButtons}</section>
        {addImages}
        <Stopwatch
          stopwatchOn={this.stopwatchOn}
          stopwatchOff={this.stopwatchOff}
        />
      </>
    );
  }
}

export default Game;
