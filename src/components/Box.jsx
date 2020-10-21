import React, {useEffect} from 'react';
import Corgi from './Corgi';
import Unicorn from './Unicorn';
import useGameState from '../hooks/useGameState';

export default function Box (props) {

  //const {gameState, setGameState} = useGameState();

  function handleBoxClick () {
    // if (props.image === "U") {
    //   return <Unicorn/>
    // } else if (props.image === "N") {
    //   return null;
    // }

    console.log("YOU clicked a BOX!")
    //console.log("unicornTurn before setState is = ", gameState.unicornTurn)

    // useEffect(() => {
    //   setGameState(prev => {return {...prev, unicornTurn: false, score: {unicorn: 7, corgi:7}}})

    // })
    // if (gameState.unicornTurn === true) {
    //   setGameState(prev => {return {...prev, unicornTurn: false, score: {unicorn: 7, corgi:7}}})
    // } else if (gameState.unicornTurn === false) {
      
    //     setGameState(prev => {return {...prev, unicornTurn: true, score: {unicorn: 6, corgi:6}}})
      
    // }

    
  
    //console.log("unicornTurn after setState is = ", gameState.unicornTurn)

    // if (gameState.unicornTurn) {
    //   return <Unicorn/>
    // }
   
    


  }

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
    //get the current gameBoar
    let updatedGameBoard = props.gameState.gameBoard.slice();
    let currentPlayer = props.gameState.unicornTurn ? "U" : "C";
    console.log('currnetPlayer = ', currentPlayer)
    updatedGameBoard[props.id] = {...updatedGameBoard[props.id], display: currentPlayer}
    return updatedGameBoard;
  }

  
  return (
    <div>
      {props.image === "U" && <button className="boxButton" onClick={event =>handleBoxClick()}><Unicorn/></button>}
      {props.image === "C" && <button className="boxButton" onClick={event =>handleBoxClick()}><Corgi/></button>}
      {props.image === "N" && <button className="boxButton" onClick={event => props.setGameState(prev => {return {...prev, unicornTurn: turn, gameBoard: updateGameBoard()}})}>{boxImage}</button>}
    </div>
  
  )


}