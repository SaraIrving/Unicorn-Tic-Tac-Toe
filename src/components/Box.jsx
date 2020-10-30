import React, {useEffect} from 'react';
import Corgi from './Corgi';
import Unicorn from './Unicorn';

export default function Box (props) {

  function determineTurn () {
    if (props.gameState.unicornTurn === true) {
      return false;
    } else {
      return true;
    }
  }
  const turn = determineTurn();
  
  function determineBoxImage () {
    if(props.gameState.gameBoard[props.id].display === "U") {
      return <Unicorn/>;
    } else if (props.gameState.gameBoard[props.id].display === "C") {
      return <Corgi/>;
    } 
  }
  const boxImage = determineBoxImage();

  function updateGameBoard() {
    let updatedGameBoard = props.gameState.gameBoard.slice();
    let currentPlayer = props.gameState.unicornTurn ? "U" : "C";
    updatedGameBoard[props.id] = {...updatedGameBoard[props.id], display: currentPlayer}
    return updatedGameBoard;
  }

  
  return (
    <div>
      {props.image === "U" && <button className="boxButton" ><Unicorn/></button>}
      {props.image === "C" && <button className="boxButton" ><Corgi/></button>}
      {props.image === "N" && <button className="boxButton" onClick={event => props.setGameState(prev => {return {...prev, unicornTurn: turn, gameBoard: updateGameBoard()}})}>{boxImage}</button>}
    </div>
  
  )


}