import React from "react";

const ProgressBar = (props) => {
  const { totalWidth = "500px", completedWidth = "30px" } = props;
  return (
    <div className="progress-bar" style={{ width: totalWidth, background: "#ececec"}}>
      <div className="progress-bar"
        style={{ width: completedWidth, background: "#00ab5a"}}
      ></div>
    </div>
  );
};

export default ProgressBar;
