import { useState, useEffect } from "react";


export default function useGameState () {

  const [gameState, setGameState] = useState({unicornTurn: true, 
                                              gameBoard: ["N", "N", "N", "N", "N", "N", "N", "N", "N"], 
                                              score: {unicorn: 1, corgi:1}});



  return {
    gameState, 
    setGameState
  }


}