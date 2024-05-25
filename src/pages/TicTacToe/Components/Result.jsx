import React from "react";

const Result = (props) => {
  const { currentPlayer, winner } = props;
  return (
    <div>
      <p>Current Player : {currentPlayer}</p>
      <p>Winner : {winner}</p>
    </div>
  );
};

export default Result;
