import React from "react";
import ClassTrafficLight from "./ClassTrafficLight";
import FunctionalTrafficLight from "./FunctionalTrafficLight"; 

function App() {
  return (
    <main>
      <h1>Traffic Light App</h1>
      <div className="container">
        <div className="left">
          <FunctionalTrafficLight /> 
        </div>
        <div className="right">
          <ClassTrafficLight />
        </div>
      </div>
    </main>
  );
}

export default App;