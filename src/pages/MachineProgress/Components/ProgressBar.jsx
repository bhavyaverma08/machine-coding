import React from "react";

const ProgressBar = (props) => {
  const { totalWidth = "500px", completedWidth = "30px" } = props;
  return (
    <div style={{ width: totalWidth, background: "grey", height: "20px" }}>
      <div
        style={{ width: completedWidth, background: "green", height: "20px" }}
      ></div>
    </div>
  );
};

export default ProgressBar;
