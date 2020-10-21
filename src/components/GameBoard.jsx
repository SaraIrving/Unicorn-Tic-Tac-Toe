import React from 'react'
import Box from './Box'
import useGameState from '../hooks/useGameState';

export default function GameBoard (props) {

  let boardArray = [["U", "U", "N"], ["N", "N", "N"], ["N", "N", "N"]]
  let noNestArray = ["U", "N", "N", "N", "N", "N", "N", "N", "N"];

  //const {gameState, setGameState} = useGameState();

  return (
    <div className="gameBoardWrapper">
      {props.gameState.gameBoard.map(box => {
        if (box === "U") {
          return (<Box image="U"></Box>)
        } else if (box === "N") {
          return (<Box image="N" gameState={props.gameState} setGameState={props.setGameState}></Box>)
        }
        return (<p>A ROW!</p>)
       
    })}
    </div>
  )


}