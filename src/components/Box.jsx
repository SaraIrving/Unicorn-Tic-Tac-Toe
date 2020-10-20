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

    //setGameState(prev => {return {...prev, unicornTurn: false}})

    if (gameState.unicornTurn) {
      return <Unicorn/>
    }

    


  }

  return (
    <div>
      {props.image === "U" && <button className="boxButton"><Unicorn/></button>}
      {props.image === "N" && <button className="boxButton"></button>}

    </div>

    // <button className="boxButton"></button>
  
  )




}