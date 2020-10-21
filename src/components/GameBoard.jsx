import React from 'react'
import Box from './Box'
import useGameState from '../hooks/useGameState';

export default function GameBoard (props) {

  // let boardArray = [["U", "U", "N"], ["N", "N", "N"], ["N", "N", "N"]]
  // let noNestArray = ["U", "N", "N", "N", "N", "N", "N", "N", "N"];

  //const {gameState, setGameState} = useGameState();

  //need to work out how to give each Box an individual key that we can use to relate it with the index of the letter that it represents in the gameBoard array in state, maybe make game board array an array of objects with key value pairs of a numerical key and a alphabetical value??



  return (
    <div className="gameBoardWrapper">
      {props.gameState.gameBoard.map(({index, display}) => {
        
        if (display === "U") {
          return (<Box image={display} key={index} id ={index} gameState={props.gameState} setGameState={props.setGameState}></Box>)
        } else if (display === "N") {
          return (<Box image={display} key={index} id ={index} gameState={props.gameState} setGameState={props.setGameState}></Box>)
        } else if (display === "C") {
          return (<Box image={display} key={index} id ={index} gameState={props.gameState} setGameState={props.setGameState}></Box>)
        }
        return (<p>A ROW!</p>)
       
    })}
    </div>
  )


}