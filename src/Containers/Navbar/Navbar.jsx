import React, { Component } from "react";
import { Link } from "@reach/router";
import styles from "./Navbar.module.scss";

class Navbar extends Component {
  render() {
    return (
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link to="/hall">Enter the Hall</Link>
          </li>
          <li>
            {" "}
            <Link to="/game">Play the Game</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
