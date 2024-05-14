import React, { useEffect, useState } from "react";
import ProgressBar from "./Components/ProgressBar";

const MachineProgress = (props) => {
  const { timeInterval = 500, percentageVariable = 0.05 } = props;
  let progressPercentage = 0.0;
  const [completedWidth, setCompletedWidth] = useState("0px");

  useEffect(() => {
    return () => {};
  }, [progressPercentage]);

  // Function definitions
  function handleStart() {
    setInterval(() => {
      progressPercentage = progressPercentage + percentageVariable;
      setCompletedWidth((progressPercentage * 300).toString() + "px");
    }, timeInterval);
  }

  return (
    <>
      <h1>Machine-Progress</h1>
      <ProgressBar completedWidth={completedWidth} />
      <div className="button-container">
        <button onClick={handleStart}>Start</button>
        {/* <button onClick={handlePause}>Pause</button> */}
        {/* <button onClick={handleStop}>Stop</button> */}
      </div>
    </>
  );
};

export default MachineProgress;
