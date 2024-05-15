import React, { useEffect, useState } from "react";
import ProgressBar from "./Components/ProgressBar";
import "../MachineProgress/styles.css";

const MachineProgress = (props) => {
  const { timeInterval = 500, percentageVariable = 0.05 } = props;
  let progressPercentage = 0.0;
  const [completedWidth, setCompletedWidth] = useState("0px");
  const [intervalID, setIntervalID] = useState(null);

  // Function definitions
  function handleStart() {
    const myInterval = setInterval(() => {
      progressPercentage = progressPercentage + percentageVariable;
      setCompletedWidth((progressPercentage * 500).toString() + "px");
      console.log("progressPercentage",progressPercentage)
      console.log("completedWidth",completedWidth)
      if (Math.floor(progressPercentage) === 1) {
        clearInterval(myInterval);
      }
    }, timeInterval);
    setIntervalID(myInterval);
  }

  function handlePause(){
    clearInterval(intervalID)
  }

  function handleReset(){
    setCompletedWidth("0px")
    clearInterval(intervalID)
  }

  return (
    <div className="progress-container">
      <h2>Machine-Progress</h2>
      <ProgressBar completedWidth={completedWidth} />
      <div className="button-container">
        <button className="button-styles" onClick={handleStart}>Start</button>
        <button className="button-styles"  onClick={handlePause}>Pause</button>
        <button className="button-styles"  onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default MachineProgress;
