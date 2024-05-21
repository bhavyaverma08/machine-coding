import React, { useRef, useState } from "react";
import "./styles.css";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const intervalID = useRef(null);
  const handleStart = () => {
    intervalID.current = setInterval(() => {
      setTime((prev) => prev + 1);
    });
  };
  const handleStop = () => {
    clearInterval(intervalID.current);
  };
  const handleReset = () => {
    intervalID.current = null;
    setTime(0);
  };
  return (
    <div className="watch-container">
      <h2>Stop Watch</h2>
      <p>{time}</p>
      <div className="button-container">
        <button className="button-styles" onClick={handleStart}>
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
