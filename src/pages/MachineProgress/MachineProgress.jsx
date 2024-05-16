import React, { useState } from "react";
import ProgressBar from "./Components/ProgressBar";
import "../MachineProgress/styles.css";

const MachineProgress = (props) => {
  const { timeInterval = 500, percentageVariable = 0.05 } = props;
  var progressPercentage = 0.0;
  let initialWidth = 0;
  const [completedWidth, setCompletedWidth] = useState(initialWidth);
  const [intervalID, setIntervalID] = useState(null);
  const [pauseState, setPauseState] = useState(null);

  // Function definitions
  function handleStart() {
    setPauseState(false);
    const myInterval = setInterval(() => {
      progressPercentage = progressPercentage + percentageVariable;
      setCompletedWidth(progressPercentage * 500);
      if (Math.floor(progressPercentage) === 1) {
        clearInterval(myInterval);
      }
    }, timeInterval);
    setIntervalID(myInterval);
  }

  function handlePause() {
    setPauseState(true);
    initialWidth = completedWidth;
    clearInterval(intervalID);
  }

  function handleResume() {
    setPauseState(false);
    progressPercentage = Math.floor(completedWidth) / timeInterval;
    const myNewInterval = setInterval(() => {
      progressPercentage = progressPercentage + percentageVariable;
      setCompletedWidth(progressPercentage * 500);
      if (Math.floor(progressPercentage) === 1) {
        clearInterval(myNewInterval);
      }
    }, timeInterval);
    setIntervalID(myNewInterval);
  }

  function handleReset() {
    setPauseState(false);
    setCompletedWidth("0px");
    clearInterval(intervalID);
  }

  return (
    <div className="progress-container">
      <h2>Machine-Progress</h2>
      <ProgressBar
        completedWidth={completedWidth.toString() + "px"}
        totalWidth={timeInterval.toString() + "px"}
      />
      <div className="button-container">
        <button className="button-styles" onClick={handleStart}>
          Start
        </button>
        <button
          className="button-styles"
          onClick={pauseState ? handleResume : handlePause}
        >
          {pauseState ? "Resume" : "Pause"}
        </button>
        <button className="button-styles" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default MachineProgress;
