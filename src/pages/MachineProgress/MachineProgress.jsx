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

  function progressfunction(PP, PV, interval) {
    progressPercentage = PP + PV;
    setCompletedWidth(progressPercentage * 500);
    if (Math.floor(progressPercentage) === 1) {
      clearInterval(interval);
    }
  }

  // Function definitions
  function handleStart() {
    setPauseState(false);
    const myInterval = setInterval(() => {
      progressfunction(progressPercentage, percentageVariable, myInterval);
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
      progressfunction(progressPercentage, percentageVariable, myNewInterval);
    }, timeInterval);
    setIntervalID(myNewInterval);
  }

  function handleReset() {
    setPauseState(false);
    setCompletedWidth(0);
    clearInterval(intervalID);
    setIntervalID(null);
  }

  return (
    <div className="progress-container">
      <h2>Machine-Progress</h2>
      <ProgressBar
        completedWidth={completedWidth.toString() + "px"}
        totalWidth={timeInterval.toString() + "px"}
      />
      <div className="button-container">
        <button
          disabled={intervalID}
          className="button-styles"
          style={{ background: "#40A578" }}
          onClick={handleStart}
        >
          Start
        </button>
        <button
          style={{ background: "#FEB941" }}
          disabled={intervalID === null}
          className="button-styles"
          onClick={pauseState ? handleResume : handlePause}
        >
          {pauseState ? "Resume" : "Pause"}
        </button>
        <button
          style={{ background: "#524C42" }}
          className="button-styles"
          onClick={handleReset}
          disabled={intervalID === null}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default MachineProgress;
