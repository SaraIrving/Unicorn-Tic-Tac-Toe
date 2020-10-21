import React from 'react'
import Box from './Box'
import useGameState from '../hooks/useGameState';

export default function GameBoard (props) {

  // let boardArray = [["U", "U", "N"], ["N", "N", "N"], ["N", "N", "N"]]
  // let noNestArray = ["U", "N", "N", "N", "N", "N", "N", "N", "N"];

  //const {gameState, setGameState} = useGameState();

  //need to work out how to give each Box an individual key that we can use to relate it with the index of the letter that it represents in the gameBoard array in state, maybe make game board array an array of objects with key value pairs of a numerical key and a alphabetical value??



  function determineWinner() {
    //consider putting this function inside a useEffect that runs based on any changes to the gameBoard array in gameState????

    // given each box that is clicked, evaluate all possible ways it could win
    //ROWS:
    // if it's in the first column, are the next two consecutive indexs also the same image? 
    console.log("DETERMINE WINNER RUNS")

    if (props.gameState.gameBoard[0].display === "U" || props.gameState.gameBoard[3].display === "U" || props.gameState.gameBoard[6].display === "U") {
      
      if (props.gameState.gameBoard[1].display === "U" && props.gameState.gameBoard[2].display === "U") {
        console.log("IN THE RETURN UNICORN WINS")
        return "unicorn wins"
      }
      
    }
    return "in progress"

  }

  let winner = determineWinner();


  return (
    <div>
      {winner === "unicorn wins" && <h2>UNICORN WINS!!!!</h2>}
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
    </div>
    
  )


}