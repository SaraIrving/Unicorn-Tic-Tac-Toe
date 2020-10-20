import { useState, useEffect } from "react";


export default function useGameData () {

  const [gameState, setGameState] = useState({unicornTurn: true, 
                                              gameBoard: ["N", "N", "N", "N", "N", "N", "N", "N", "N"], 
                                              score: {unicorn: 0, corgi:0}});



  return {
    gameState, 
    useGameState
  }


}