import React, { useState } from "react"
import Square from "./Square";

function Board(props) {

  const [status, setStatus] = useState('Start with player: O');
  //immustate
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(0);

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWin = (boardSquares) => {
    for (const line of lines) {
      const [a, b, c] = line;
      if (boardSquares[a] && boardSquares[a] == boardSquares[b] && boardSquares[a] == boardSquares[c]) {
        alert("Winner is " + boardSquares[a])
      }
      // const [d, e, f] = line;
      // if (boardSquares[d] && boardSquares[d] != boardSquares[e] && boardSquares[d] == boardSquares[f]) {
      //   alert("Draw")
      // }
    }
  }

  const handleClick = (i) => {
    if (squares[i]) {   //can't overwrite
      return;
    }
    let s = squares[i];
    s = status === "next player: X" ? 'X' : 'O';
    let copy = [...squares];//copy squares
    copy[i] = s;//changes value in squares
    setSquares(copy);
    setStatus(status === "next player: X" ? "next player: O" : "next player: X")

    //check win
    checkWin(copy);
  }
  //const [] = useState();

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={(e) => handleClick(i)} />;
  }

  const reset = () => {
    setTurn("X");
    setSquares(Array(9).fill(null));
    checkWin(null);
  }


  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <br />
      <button onClick={reset}>New game</button>
    </div>
  );
}

export default Board;