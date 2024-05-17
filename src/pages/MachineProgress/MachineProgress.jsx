import React, { useState, useEffect, useRef } from "react";
import ProgressBar from "./Components/ProgressBar";
import "../MachineProgress/styles.css";

const MachineProgress = ({ timeInterval = 500, percentageVariable = 0.05 }) => {
  const [completedWidth, setCompletedWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const progressPercentage = useRef(0);
  const intervalID = useRef(null);

  const progressFunction = () => {
    progressPercentage.current += percentageVariable;
    setCompletedWidth(progressPercentage.current * 500);

    if (progressPercentage.current >= 1) {
      clearInterval(intervalID.current);
    }
  };

  const handleStart = () => {
    if (intervalID.current) return;
    setIsPaused(false);
    intervalID.current = setInterval(progressFunction, timeInterval);
  };

  const handlePause = () => {
    if (!intervalID.current) return;
    setIsPaused(true);
    clearInterval(intervalID.current);
    intervalID.current = null;
  };

  const handleResume = () => {
    if (intervalID.current) return;
    setIsPaused(false);
    intervalID.current = setInterval(progressFunction, timeInterval);
  };

  const handleReset = () => {
    setIsPaused(true);
    clearInterval(intervalID.current);
    intervalID.current = null;
    progressPercentage.current = 0;
    setCompletedWidth(0);
  };

  useEffect(() => {
    return () => clearInterval(intervalID.current);
  }, []);

  return (
    <div className="progress-container">
      <h2>Machine-Progress</h2>
      <ProgressBar
        completedWidth={`${completedWidth}px`}
        totalWidth={`${timeInterval}px`}
      />
      <div className="button-container">
        <button
          disabled={!isPaused && intervalID.current}
          className="button-styles"
          style={{ background: "#40A578" }}
          onClick={handleStart}
        >
          {completedWidth > 0 ? "Resume" : "Start"}
        </button>
        <button
          style={{ background: "#FEB941" }}
          disabled={!intervalID.current}
          className="button-styles"
          onClick={handlePause}
        >
          {"Pause"}
        </button>
        <button
          style={{ background: "#524C42" }}
          className="button-styles"
          onClick={handleReset}
          // disabled={!intervalID.current}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default MachineProgress;
