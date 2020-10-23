import React from 'react';
import Corgi from './Corgi';
import Unicorn from './Unicorn';
import useGameState from '../hooks/useGameState';

export default function PlayerTracker (props) {

  //const {gameState, setGameState} = useGameState();


  return (
    <div className="playerWrapper">
    {props.gameState.unicornTurn === true && <div><p>IT'S THE UNICORNS TURN tracker!</p><Unicorn/></div>}
    {props.gameState.unicornTurn === false && <div><p>IT'S THE CORGIS TURN tracker !</p><Corgi/></div>}
  </div>
  )

}

