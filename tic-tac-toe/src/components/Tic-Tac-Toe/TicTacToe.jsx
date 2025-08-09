import React, { useState } from "react";
import "./TicTacToe.css";
import circle_icon from "../assets/o.png";
import ex_icon from "../assets/x.png";

const data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  const [turn, setTurn] = useState(0);
  const [lock, setLock] = useState(false);
  const [winner, setWinner] = useState(null);

  const toggle = (e, num) => {
    if (lock) return;
    if (data[num] !== "") return;

    if (turn % 2 === 0) {
      e.target.innerHTML = `<img src="${ex_icon}">`;
      data[num] = "x";
    } else {
      e.target.innerHTML = `<img src="${circle_icon}">`;
      data[num] = "o";
    }
    setTurn((prev) => prev + 1);

    checkWin();
  };

  const checkWin = () => {
   
    if (data[0] === data[1] && data[1] === data[2] && data[0] !== "")
      return won(data[0]);
    if (data[3] === data[4] && data[4] === data[5] && data[3] !== "")
      return won(data[3]);
    if (data[6] === data[7] && data[7] === data[8] && data[6] !== "")
      return won(data[6]);

    if (data[0] === data[3] && data[3] === data[6] && data[0] !== "")
      return won(data[0]);
    if (data[1] === data[4] && data[4] === data[7] && data[1] !== "")
      return won(data[1]);
    if (data[2] === data[5] && data[5] === data[8] && data[2] !== "")
      return won(data[2]);

    if (data[0] === data[4] && data[4] === data[8] && data[0] !== "")
      return won(data[0]);
    if (data[2] === data[4] && data[4] === data[6] && data[2] !== "")
      return won(data[2]);

    return null;
  };

  const won = (winnerPlayer) => {
    setLock(true);
    setWinner(winnerPlayer);
  };

  const resetGame = () => {
    for (let i = 0; i < data.length; i++) {
      data[i] = "";
    }
    const boxes = document.querySelectorAll(".boxes");
    boxes.forEach((box) => (box.innerHTML = ""));

    setTurn(0);
    setLock(false);
    setWinner(null);
  };

  return (
    <div className="container">
      {!lock ? (
        <h1 className="title">
          Tic Tac Toe in <span>React</span>
        </h1>
      ) : (
        <h1 className="title">
          Player <span>{winner && winner.toUpperCase()}</span> Wins!
        </h1>
      )}

      <div className="board">
        <div className="row">
          <div className="boxes" onClick={(e) => toggle(e, 0)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 1)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 2)}></div>
        </div>

        <div className="row">
          <div className="boxes" onClick={(e) => toggle(e, 3)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 4)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 5)}></div>
        </div>

        <div className="row">
          <div className="boxes" onClick={(e) => toggle(e, 6)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 7)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 8)}></div>
        </div>
      </div>

      <button className="reset" onClick={resetGame}>
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
