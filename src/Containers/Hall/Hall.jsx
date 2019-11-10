import React, { Component } from "react";
import UserInput from "../../components/UserInput";
import styles from "./Hall.module.scss";
import Images from "../Images";

class Hall extends Component {
  render() {
    let html =
      this.props.numImages > 5000 ? (
        <>
          <section className={styles.form}>
            <UserInput handleChange={this.props.setInputValue} />
          </section>
          <p>
            Sorry, loading this many images takes too long. Please choose a
            number less than or equal to 5000.
          </p>
        </>
      ) : (
        <>
          <section className={styles.form}>
            <UserInput handleChange={this.props.setInputValue} />
          </section>
          <section className={styles.mainContent}>
            <Images user={this.props.user} numImages={this.props.numImages} />
          </section>
        </>
      );
    return <>{html}</>;
  }
}

export default Hall;
