import React, { useEffect, useState } from "react";
import PageLayout from "../../Layouts/PageLayout";
import Matrix from "./Components/Matrix";
import Result from "./Components/Result";
// current player to be displayed
// 3x3 layout
// disable the already clicked box
// Show result
// Stike through the lines that has won

const GamePage = () => {
  const [myMatrix, setmyMatrix] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [currentPlayer, setcurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [count, setCount] = useState(0);

  function checkWinner() {
    // 1st row
    if (
      myMatrix[0][0] === myMatrix[0][1] &&
      myMatrix[0][1] === myMatrix[0][2]
    ) {
      setWinner(myMatrix[0][0]);
    }
    //2nd row
    else if (
      myMatrix[1][0] === myMatrix[1][1] &&
      myMatrix[1][1] === myMatrix[1][2]
    ) {
      setWinner(myMatrix[1][2]);
    }
    //3rd row
    else if (
      myMatrix[2][0] === myMatrix[2][1] &&
      myMatrix[2][1] === myMatrix[2][2]
    ) {
      setWinner(myMatrix[2][2]);
    }
    // 1st column
    else if (
      myMatrix[0][0] === myMatrix[1][0] &&
      myMatrix[1][0] === myMatrix[2][0]
    ) {
      setWinner(myMatrix[0][0]);
    }
    // diagonal 1
    else if (
      myMatrix[0][0] === myMatrix[1][1] &&
      myMatrix[1][1] === myMatrix[2][2]
    ) {
      setWinner(myMatrix[0][0]);
    }
    // 2nd column
    else if (
      myMatrix[0][1] === myMatrix[1][1] &&
      myMatrix[1][1] === myMatrix[2][1]
    ) {
      setWinner(myMatrix[2][1]);
    }
    // 3rd column
    else if (
      myMatrix[0][2] === myMatrix[1][2] &&
      myMatrix[1][2] === myMatrix[2][2]
    ) {
      setWinner(myMatrix[2][2]);
    }
    // diagonal 2
    else if (
      myMatrix[2][0] === myMatrix[1][1] &&
      myMatrix[1][1] === myMatrix[0][2]
    ) {
      setWinner(myMatrix[1][1]);
    } else if (count === 9 && !winner) {
      setWinner("Draw");
    }
  }

  function handleOnClick(el, i1, i2) {
    if (el !== "" || winner) return;
    setCount((prev) => prev + 1);
    const newState = [...myMatrix];
    newState[i1][i2] = currentPlayer;
    setmyMatrix(newState);
    const newPlayer = currentPlayer === "X" ? "O" : "X";
    setcurrentPlayer(newPlayer);
  }

  useEffect(() => {
    if (count >= 5 && !winner) {
      checkWinner();
    }
  }, [count]);

  return (
    <PageLayout>
      <Matrix myMatrix={myMatrix} handleOnClick={handleOnClick} />
      <Result currentPlayer={currentPlayer} winner={winner} />
    </PageLayout>
  );
};

export default GamePage;
