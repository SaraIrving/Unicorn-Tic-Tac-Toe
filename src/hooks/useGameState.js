import { useState, useEffect } from "react";


export default function useGameState () {

  const [gameState, setGameState] = useState({unicornTurn: true, 
                                              gameBoard: [{index: 0, display: "N"}, 
                                                          {index: 1, display: "N"}, 
                                                          {index: 2, display: "N"}, 
                                                          {index: 3, display: "N"}, 
                                                          {index: 4, display: "N"}, 
                                                          {index: 5, display: "N"}, 
                                                          {index: 6, display: "N"}, 
                                                          {index: 7, display: "N"}, 
                                                          {index: 8, display: "N"}], 
                                              score: {unicorn: 0, corgi: 0},
                                              winnerAnnouncement: null} 
                                              );



  return {
    gameState, 
    setGameState
  }


}