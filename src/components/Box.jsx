import React from 'react';
import Corgi from './Corgi';
import Unicorn from './Unicorn';
import useGameState from '../hooks/useGameState';

export default function Box (props) {

  const {gameState, setGameState} = useGameState();

  function handleBoxClick () {
    // if (props.image === "U") {
    //   return <Unicorn/>
    // } else if (props.image === "N") {
    //   return null;
    // }

    console.log("YOU clicked a BOX!")
    console.log("unicornTurn before setState is = ", gameState.unicornTurn)
    if (gameState.unicornTurn) {
      setGameState(prev => {return {...prev, unicornTurn: false, score: {unicorn: 7, corgi:7}}})
    } else if (gameState.unicornTurn === false) {
      if (gameState.unicornTurn) {
        setGameState(prev => {return {...prev, unicornTurn: true, score: {unicorn: 6, corgi:6}}})
      }
    }
  
    console.log("unicornTurn after setState is = ", gameState.unicornTurn)

    // if (gameState.unicornTurn) {
    //   return <Unicorn/>
    // }
   
    


  }

  return (
    <div>
      {props.image === "U" && <button className="boxButton" onClick={event =>handleBoxClick()}><Unicorn/></button>}
      {props.image === "C" && <button className="boxButton" onClick={event =>handleBoxClick()}><Corgi/></button>}
      {props.image === "N" && <button className="boxButton" onClick={event =>handleBoxClick()}></button>}

    </div>

    // <button className="boxButton"></button>
  
  )




}