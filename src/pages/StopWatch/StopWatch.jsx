import React, { useRef, useState } from "react";
import "./styles.css";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [timeInProgress, setTimeInProgress] = useState(false);
  const intervalID = useRef(null);
  const handleStart = () => {
    setTimeInProgress(true);
    intervalID.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };
  const handleStop = () => {
    setTimeInProgress(false);
    clearInterval(intervalID.current);
  };
  const handleReset = () => {
    setTimeInProgress(false);
    intervalID.current = null;
    setTime(0);
  };

  const getFormattedTime = () => {
    return time;
  };
  return (
    <div className="watch-container">
      <h2>Stop Watch</h2>
      <p>{getFormattedTime(time)}</p>
      <div className="button-container">
        <button
          disabled={timeInProgress}
          className="button-styles"
          onClick={handleStart}
        >
          Start
        </button>
        <button className="button-styles" onClick={handleStop}>
          Stop
        </button>
        <button className="button-styles" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
