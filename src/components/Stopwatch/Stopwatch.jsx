import React, { Component } from "react";

class Stopwatch extends Component {
  state = {
    status: false,
    runningTime: 0
  };

  handleClick = () => {
    this.setState(state => {
      if (state.status) {
        clearInterval(this.timer);
      } else {
        const startTime = Date.now() - this.state.runningTime;
        this.timer = setInterval(() => {
          this.setState({ runningTime: Date.now() - startTime });
        });
      }
      return { status: !state.status, isActive: false };
    });
  };

  handleReset = () => {
    this.setState({ runningTime: 0, status: false });
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
