import React from 'react';
import logo from './logo.svg';
import './App.css';
import Corgi from './components/Corgi';
import Unicorn from './components/Unicorn';
import PlayerTracker from './components/PlayerTracker';
import Box from './components/Box';
import GameBoard from './components/GameBoard';
import useGameState from './hooks/useGameState';
import WinnerAnnouncement from './components/WinnerAnnouncement';

function App() {

  const {gameState, setGameState} = useGameState();

  const gameBoardReset = [{index: 0, display: "N"}, 
  {index: 1, display: "N"}, 
  {index: 2, display: "N"}, 
  {index: 3, display: "N"}, 
  {index: 4, display: "N"}, 
  {index: 5, display: "N"}, 
  {index: 6, display: "N"}, 
  {index: 7, display: "N"}, 
  {index: 8, display: "N"}];



  return (
    <div className="App">
      <header className="App-header">

        <p>
          Tick Tack Toe: Unicorn vs. Corgicorn!
        </p>
      
      </header>
      
      <body>
        {/* <div>
          {gameState.unicornTurn && <p>IT'S THE UNICORNS TURN!</p>}
          {gameState.unicornTurn === false && <p>IT'S THE CORGIS TURN!</p>}
        </div> */}
        <div className="gameBoardTopper">
          <div>
            {gameState.winnerAnnouncement === null && <PlayerTracker gameState={gameState} setGameState={setGameState}/>}
            {gameState.winnerAnnouncement !== null && <WinnerAnnouncement gameState={gameState} setGameState={setGameState}/>}
          </div>
          <div>
            <p>The Score is: Unicorn: <span>{gameState.score.unicorn}</span> Corgi: <span>{gameState.score.corgi}</span></p>
            <button onClick={event => setGameState(prev => {return {...prev, score: {unicorn: 0, corgi:0}}})}>RESET THE SCORE!</button>
            <button onClick={event => setGameState(prev => {return {...prev, gameBoard: gameBoardReset, winnerAnnouncement: null}})}>Play Again!</button>
          </div>
      
          {/* <Corgi/>
          <Unicorn/> */}
        </div>
        
        
        <GameBoard gameState={gameState} setGameState={setGameState}/>
      
      </body>
      <footer>
        <p>
          Ticking Tacky Toes since 2020.
        </p>
      </footer>
    </div>
  );
}

export default App;
