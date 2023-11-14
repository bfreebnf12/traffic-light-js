import React, { Component } from "react";

const TrafficLightState = {
  Red: "red",
  Yellow: "yellow",
  Green: "green",
};

class ClassTrafficLight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLight: TrafficLightState.Red,
    };
  }

  nextState = () => {
    switch (this.state.currentLight) {
      case TrafficLightState.Red:
        this.setState({ currentLight: TrafficLightState.Green });
        break;
      case TrafficLightState.Green:
        this.setState({ currentLight: TrafficLightState.Yellow });
        break;
      case TrafficLightState.Yellow:
        this.setState({ currentLight: TrafficLightState.Red });
        break;
      default:
        this.setState({ currentLight: TrafficLightState.Red });
    }
  };

  render() {
    const { currentLight } = this.state;

    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          <div
            className={`circle ${currentLight === TrafficLightState.Red ? "red" : ""}`}
          ></div>
          <div
            className={`circle ${currentLight === TrafficLightState.Yellow ? "yellow" : ""}`}
          ></div>
          <div
            className={`circle ${currentLight === TrafficLightState.Green ? "green" : ""}`}
          ></div>
        </div>
        <button className="next-state-button" onClick={this.nextState}>
          Next State
        </button>
      </div>
    );
  }
}

export default ClassTrafficLight;