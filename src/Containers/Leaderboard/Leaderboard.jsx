import React, { Component } from "react";
import { firestore } from "../../firebase";
import styles from "./Leaderboard.module.scss";
import Button from "../../components/Button";

class Leaderboard extends Component {
  state = { scores: [], filteredScores: [], chosenDifficulty: null };
  getScores = () => {
    firestore
      .collection("Leaderboard")
      .get()
      .then(querySnapshot => {
        let scores = querySnapshot.docs.map(doc => {
          const scores = {
            ...doc.data(),
            docId: doc.id
          };
          return scores;
        });
        let orderedScores = scores.sort(function(a, b) {
          return a.finishTime - b.finishTime;
        });
        this.setState({
          scores: orderedScores
        });
      });
  };

  componentDidMount() {
    this.getScores();
  }

  leaderboardDifficulty = chosenDifficulty => {
    let selectDifficulty = this.state.scores.filter(
      score => score.difficulty === chosenDifficulty
    );

    selectDifficulty.length > 25
      ? (selectDifficulty = selectDifficulty.slice(0, 25))
      : (selectDifficulty = selectDifficulty.slice());

    this.setState({ filteredScores: selectDifficulty });
  };

  render() {
    let difficulties = [
      "easy",
      "mediocre",
      "tough",
      "hard",
      "I've literally got all day"
    ];

    let addButtons = difficulties.map((difficulty, index) => (
      <Button
        className={styles.button}
        onClick={() => {
          this.setState(
            { chosenDifficulty: difficulty },
            this.leaderboardDifficulty(difficulty)
          );
        }}
        text={difficulty}
        key={index}
      />
    ));

    let instruction =
      this.state.chosenDifficulty == null ? (
        <p>Choose a difficulty to view scores for</p>
      ) : (
        <p>Select a different difficulty?</p>
      );

    let tableHeading =
      this.state.chosenDifficulty == null ? null : (
        <tr>
          <th>Position</th>
          <th>User's name</th>
          <th>Finish time (seconds)</th>
        </tr>
      );

    return (
      <>
        {instruction}
        <section className={styles.buttons}>{addButtons}</section>
        <table className={styles.table}>
          <tbody>
            {tableHeading}
            {this.state.filteredScores.map((score, docId) => (
              <tr key={docId}>
                <th>{docId + 1}</th>
                <th>{score.user}</th>
                <th>{score.finishTime / 1000}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Leaderboard;
