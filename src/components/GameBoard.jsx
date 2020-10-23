import React, { useEffect } from 'react'
import Box from './Box'
import useGameState from '../hooks/useGameState';

export default function GameBoard (props) {

  // let boardArray = [["U", "U", "N"], ["N", "N", "N"], ["N", "N", "N"]]
  // let noNestArray = ["U", "N", "N", "N", "N", "N", "N", "N", "N"];

  //const {gameState, setGameState} = useGameState();

  //need to work out how to give each Box an individual key that we can use to relate it with the index of the letter that it represents in the gameBoard array in state, maybe make game board array an array of objects with key value pairs of a numerical key and a alphabetical value??



  function determineWinner() {
    //consider putting this function inside a useEffect that runs based on any changes to the gameBoard array in gameState????

    // given each box that is clicked, evaluate all possible ways it could win
    //ROWS:
    // if it's in the first column, are the next two consecutive indexs also the same image? 
    console.log("DETERMINE WINNER RUNS")

    //determine horizontal unicorn win options
    if (props.gameState.gameBoard[0].display === "U" || props.gameState.gameBoard[3].display === "U" || props.gameState.gameBoard[6].display === "U") {
      
      if (props.gameState.gameBoard[1].display === "U" && props.gameState.gameBoard[2].display === "U") {
        //console.log("IN THE RETURN UNICORN WINS")
        //props.setGameState(prev => {return {...prev, score: {unicorn: 2, corgi: 0}}})
        console.log("IN HORIZONTAL UNI WINNER before setState call")
        props.setGameState(prev => {return {...prev, score: {unicorn: 8, corgi: 8}, winnerAnnouncement: "U"}})
        return "unicorn wins"
      } else if (props.gameState.gameBoard[4].display === "U" && props.gameState.gameBoard[5].display === "U") {
        return "unicorn wins";
      } else if (props.gameState.gameBoard[7].display === "U" && props.gameState.gameBoard[8].display === "U") {
        return "unicorn wins";
      }
    }

    //determine horizontal corgi win options
    if (props.gameState.gameBoard[0].display === "C" || props.gameState.gameBoard[3].display === "C" || props.gameState.gameBoard[6].display === "C") {
      
      if (props.gameState.gameBoard[1].display === "C" && props.gameState.gameBoard[2].display === "C") {
        //console.log("IN THE RETURN UNICORN WINS")
        //props.setGameState(prev => {return {...prev, score: {unicorn: 2, corgi: 0}}})
        console.log("WERE HERE")
        return "corgi wins"
      } else if (props.gameState.gameBoard[4].display === "C" && props.gameState.gameBoard[5].display === "C") {
        return "corgi wins";
      } else if (props.gameState.gameBoard[7].display === "C" && props.gameState.gameBoard[8].display === "C") {
        return "corgi wins";
      }
    }

    //determine vertical unicorn win options
    if (props.gameState.gameBoard[0].display === "U" || props.gameState.gameBoard[1].display === "U" || props.gameState.gameBoard[2].display === "U") {
      
      if (props.gameState.gameBoard[3].display === "U" && props.gameState.gameBoard[6].display === "U") {
        //console.log("IN THE RETURN UNICORN WINS")
        //props.setGameState(prev => {return {...prev, score: {unicorn: 2, corgi: 0}}})
        return "unicorn wins"
      } else if (props.gameState.gameBoard[4].display === "U" && props.gameState.gameBoard[7].display === "U") {
        return "unicorn wins";
      } else if (props.gameState.gameBoard[5].display === "U" && props.gameState.gameBoard[8].display === "U") {
        return "unicorn wins";
      }
    }

    //determine vertical corgi win options
    if (props.gameState.gameBoard[0].display === "C" || props.gameState.gameBoard[1].display === "C" || props.gameState.gameBoard[2].display === "C") {
      
      if (props.gameState.gameBoard[3].display === "C" && props.gameState.gameBoard[6].display === "C") {
        //console.log("IN THE RETURN UNICORN WINS")
        //props.setGameState(prev => {return {...prev, score: {unicorn: 2, corgi: 0}}})
        return "corgi wins"
      } else if (props.gameState.gameBoard[4].display === "C" && props.gameState.gameBoard[7].display === "C") {
        return "corgi wins";
      } else if (props.gameState.gameBoard[5].display === "C" && props.gameState.gameBoard[8].display === "C") {
        return "corgi wins";
      }
    }

    //determine diagonal unicorn win options
    if (props.gameState.gameBoard[4].display === "U") {
      if (props.gameState.gameBoard[0].display === "U" && props.gameState.gameBoard[8].display === "U") {
        return "unicorn wins";
      } else if (props.gameState.gameBoard[2].display === "U" && props.gameState.gameBoard[6].display === "U") {
        return "unicorn wins";
      }
    }

    //determine diagonal corgi win options
    if (props.gameState.gameBoard[4].display === "C") {
      if (props.gameState.gameBoard[0].display === "C" && props.gameState.gameBoard[8].display === "C") {
        return "corgi wins";
      } else if (props.gameState.gameBoard[2].display === "C" && props.gameState.gameBoard[6].display === "C") {
        return "corgi wins";
      }
    }



    //return "no one wins"
    
    

  }

  let winner;

  useEffect(() => {
    console.log("INSIDE THE USEEFFECT")
    winner = determineWinner();
  }, [props.gameState.gameBoard])

  console.log('winner = ', winner)

  //let winner = determineWinner();
  
  // if (winner === "unicorn wins") {
  //   const currentUniScore = props.gameState.score.unicorn + 1;
  //   props.setGameState(prev => {return {...prev, score: {unicorn: currentUniScore, corgi: prev.score.corgi}}})
  // }

  return (
    <div className="gameBoard">
      <div className="winnerAnnouncementWrapper">
        {console.log("what is winner = ", winner)}
      {winner === "unicorn wins" && <h2>UNICORN WINS!!!!</h2>}
      {winner === "corgi wins" && <h2>CORGI WINS!!!!</h2>}
      {winner === "no one wins" && <h2>LOSERS!!!!</h2>}
      {props.gameState.winnerAnnouncement === null && <p>IT's NULL!</p>}
      {props.gameState.winnerAnnouncement === "U" && <p>IT's a Unicorn winner!</p>}
      </div>
   
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