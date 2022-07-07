import React, { useState } from "react"
import Board from "./Board"

//props gan cung
function TicTacToe(props) {
    return(
        <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
}

export default TicTacToe;