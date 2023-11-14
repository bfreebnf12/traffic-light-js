import React, { useState } from "react";

const TrafficLightState = {
  Red: "red",
  Yellow: "yellow",
  Green: "green",
};

const FunctionalTrafficLight = () => {
  const [currentLight, setCurrentLight] = useState(TrafficLightState.Red);

  const nextState = () => {
    switch (currentLight) {
      case TrafficLightState.Red:
        setCurrentLight(TrafficLightState.Green);
        break;
      case TrafficLightState.Green:
        setCurrentLight(TrafficLightState.Yellow);
        break;
      case TrafficLightState.Yellow:
        setCurrentLight(TrafficLightState.Red);
        break;
      default:
        setCurrentLight(TrafficLightState.Red);
    }
  };

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        <div
          className={`circle ${
            currentLight === TrafficLightState.Red ? "red" : ""
          }`}
        ></div>
        <div
          className={`circle ${
            currentLight === TrafficLightState.Yellow ? "yellow" : ""
          }`}
        ></div>
        <div
          className={`circle ${
            currentLight === TrafficLightState.Green ? "green" : ""
          }`}
        ></div>
      </div>
      <button className="next-state-button" onClick={nextState}>
        Next State
      </button>
    </div>
  );
};

export default FunctionalTrafficLight;