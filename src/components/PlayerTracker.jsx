import React from 'react';
import Corgi from './Corgi';
import Unicorn from './Unicorn';

export default function PlayerTracker (props) {


  return (
    <div className="playerWrapper">
    {(props.gameState.unicornTurn === true && props.gameState.winnerAnnouncement === null) && <div className="insidePlayerWrapper"><p>IT'S THE UNICORNS TURN!</p><Unicorn/></div>}
    {(props.gameState.unicornTurn === false && props.gameState.winnerAnnouncement === null) && <div className="insidePlayerWrapper"><p>IT'S THE CORGIS TURN!</p><Corgi/></div>}
  </div>
  )

}

