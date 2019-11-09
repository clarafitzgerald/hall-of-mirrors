import React from "react";
import styles from "./App.module.scss";
import Routes from "../../Containers/Routes";

class App extends React.Component {
  render() {
    return (
      <>
        <header className={styles.app}>
          <h1>Hall of Mirrors</h1>
        </header>

        <main>
          <p>You need to log in to view this page.</p>
          <Routes />
        </main>
      </>
    );
  }
}

export default App;
