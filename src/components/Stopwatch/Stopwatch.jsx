import React, { Component } from "react";

class Stopwatch extends Component {
  state = {
    status: false,
    runningTime: 0
  };

  handleClick = () => {
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

  handleReset = () => {
    this.setState({ runningTime: 0 }, this.handleClick);
  };
  render() {
    // this.state.runningTime > 0
    //   ? this.props.stopwatchOn()
    //   : this.props.stopwatchOff();
    return (
      <div>
        <p>{this.state.runningTime}ms</p>
        <button onClick={this.handleClick}>
          {this.state.status ? "Stop" : "Start"}
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;
