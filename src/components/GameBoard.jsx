import React, { useEffect } from 'react'
import Box from './Box'

export default function GameBoard (props) {

  function determineWinner() {
    //consider putting this function inside a useEffect that runs based on any changes to the gameBoard array in gameState????

    //determine horizontal unicorn win options
    if (props.gameState.gameBoard[0].display === "U" || props.gameState.gameBoard[3].display === "U" || props.gameState.gameBoard[6].display === "U") {
      
      if (props.gameState.gameBoard[1].display === "U" && props.gameState.gameBoard[2].display === "U") {
        props.setGameState(prev => {return {...prev, score: {unicorn: prev.score.unicorn + 1, corgi: prev.score.corgi}, winnerAnnouncement: "U"}})
        //return "unicorn wins"
      } else if (props.gameState.gameBoard[4].display === "U" && props.gameState.gameBoard[5].display === "U") {
        props.setGameState(prev => {return {...prev, score: {unicorn: prev.score.unicorn + 1, corgi: prev.score.corgi}, winnerAnnouncement: "U"}})
        //return "unicorn wins";
      } else if (props.gameState.gameBoard[7].display === "U" && props.gameState.gameBoard[8].display === "U") {
        props.setGameState(prev => {return {...prev, score: {unicorn: prev.score.unicorn + 1, corgi: prev.score.corgi}, winnerAnnouncement: "U"}})
        //return "unicorn wins";
      }
    }

    //determine horizontal corgi win options
    if (props.gameState.gameBoard[0].display === "C" || props.gameState.gameBoard[3].display === "C" || props.gameState.gameBoard[6].display === "C") {
      
      if (props.gameState.gameBoard[1].display === "C" && props.gameState.gameBoard[2].display === "C") {
        console.log("WERE HERE")
        props.setGameState(prev => {return {...prev, score: {unicorn: prev.score.unicorn, corgi: prev.score.corgi + 1}, winnerAnnouncement: "C"}})
        //return "corgi wins"
      } else if (props.gameState.gameBoard[4].display === "C" && props.gameState.gameBoard[5].display === "C") {
        props.setGameState(prev => {return {...prev, score: {unicorn: prev.score.unicorn, corgi: prev.score.corgi + 1}, winnerAnnouncement: "C"}})
        //return "corgi wins";
      } else if (props.gameState.gameBoard[7].display === "C" && props.gameState.gameBoard[8].display === "C") {
        props.setGameState(prev => {return {...prev, score: {unicorn: prev.score.unicorn, corgi: prev.score.corgi + 1}, winnerAnnouncement: "C"}})
        //return "corgi wins";
      }
    }
      
      if (props.gameState.gameBoard[0].display === "U"  && props.gameState.gameBoard[3].display === "U" && props.gameState.gameBoard[6].display === "U") {
        //console.log("IN THE RETURN UNICORN WINS")
        //props.setGameState(prev => {return {...prev, score: {unicorn: 2, corgi: 0}}})
        props.setGameState(prev => {return {...prev, score: {unicorn: prev.score.unicorn + 1, corgi: prev.score.corgi}, winnerAnnouncement: "U"}})
        //return "unicorn wins"
      } else if (props.gameState.gameBoard[1].display === "U" && props.gameState.gameBoard[4].display === "U" && props.gameState.gameBoard[7].display === "U") {
        props.setGameState(prev => {return {...prev, score: {unicorn: prev.score.unicorn + 1, corgi: prev.score.corgi}, winnerAnnouncement: "U"}})
        //return "unicorn wins";
      } else if (props.gameState.gameBoard[2].display === "U" && props.gameState.gameBoard[5].display === "U" && props.gameState.gameBoard[8].display === "U") {
        props.setGameState(prev => {return {...prev, score: {unicorn: prev.score.unicorn + 1, corgi: prev.score.corgi}, winnerAnnouncement: "U"}})
        //return "unicorn wins";
      }
    

  
      if (props.gameState.gameBoard[0].display === "C" && props.gameState.gameBoard[3].display === "C" && props.gameState.gameBoard[6].display === "C") {
        //console.log("IN THE RETURN UNICORN WINS")
        //props.setGameState(prev => {return {...prev, score: {unicorn: 2, corgi: 0}}})
        props.setGameState(prev => {return {...prev, score: {unicorn: prev.score.unicorn, corgi: prev.score.corgi + 1}, winnerAnnouncement: "C"}})
        //return "corgi wins"
      } else if (props.gameState.gameBoard[1].display === "C" && props.gameState.gameBoard[4].display === "C" && props.gameState.gameBoard[7].display === "C") {
        props.setGameState(prev => {return {...prev, score: {unicorn: prev.score.unicorn, corgi: prev.score.corgi + 1}, winnerAnnouncement: "C"}})
        //return "corgi wins";
      } else if (props.gameState.gameBoard[2].display === "C" && props.gameState.gameBoard[5].display === "C" && props.gameState.gameBoard[8].display === "C") {
        props.setGameState(prev => {return {...prev, score: {unicorn: prev.score.unicorn, corgi: prev.score.corgi + 1}, winnerAnnouncement: "C"}})
        //return "corgi wins";
      }

    //determine diagonal unicorn win options
    if (props.gameState.gameBoard[4].display === "U") {
      if (props.gameState.gameBoard[0].display === "U" && props.gameState.gameBoard[8].display === "U") {
        props.setGameState(prev => {return {...prev, score: {unicorn: prev.score.unicorn + 1, corgi: prev.score.corgi}, winnerAnnouncement: "U"}})
        //return "unicorn wins";
      } else if (props.gameState.gameBoard[2].display === "U" && props.gameState.gameBoard[6].display === "U") {
        props.setGameState(prev => {return {...prev, score: {unicorn: prev.score.unicorn + 1, corgi: prev.score.corgi}, winnerAnnouncement: "U"}})
        //return "unicorn wins";
      }
    }

    //determine diagonal corgi win options
    if (props.gameState.gameBoard[4].display === "C") {
      if (props.gameState.gameBoard[0].display === "C" && props.gameState.gameBoard[8].display === "C") {
        props.setGameState(prev => {return {...prev, score: {unicorn: prev.score.unicorn, corgi: prev.score.corgi + 1}, winnerAnnouncement: "C"}})
        //return "corgi wins";
      } else if (props.gameState.gameBoard[2].display === "C" && props.gameState.gameBoard[6].display === "C") {
        props.setGameState(prev => {return {...prev, score: {unicorn: prev.score.unicorn, corgi: prev.score.corgi + 1}, winnerAnnouncement: "C"}})
        //return "corgi wins";
      }
    }
  }

  let winner;

  useEffect(() => {
    winner = determineWinner();
  }, [props.gameState.gameBoard])


  return (
    <div className="gameBoard">
 
      <div className="gameBoardWrapper">
      {props.gameState.gameBoard.map(({index, display}) => {
        
        if (display === "U") {
          return (<Box image={display} key={index} id ={index} gameState={props.gameState} setGameState={props.setGameState}></Box>)
        } else if (display === "N") {
          return (<Box image={display} key={index} id ={index} gameState={props.gameState} setGameState={props.setGameState}></Box>)
        } else if (display === "C") {
          return (<Box image={display} key={index} id ={index} gameState={props.gameState} setGameState={props.setGameState}></Box>)
        }
        return (<p>A ROW!</p>)
       
    })}
    </div>
    </div>
    
  )


}