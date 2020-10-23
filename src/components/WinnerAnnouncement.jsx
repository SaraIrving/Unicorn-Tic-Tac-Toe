import React from 'react';
import Corgi from './Corgi';
import Unicorn from './Unicorn';

export default function WinnerAnnouncement (props) {


  return (
    <div className="winnerWrapper">
    {props.gameState.winnerAnnouncement === "U" && <div><p>UNICORN wins this round!</p><Unicorn/></div>}
    {props.gameState.winnerAnnouncement === "C" && <div><p>CORGI wins this round!</p><Corgi/></div>}
  </div>

  )
}