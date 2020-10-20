import React from 'react';
import logo from './logo.svg';
import './App.css';
import Corgi from './components/Corgi';
import Unicorn from './components/Unicorn';
import Box from './components/Box';
import GameBoard from './components/GameBoard';
import useGameState from './hooks/useGameState';

function App() {

  const {gameState, setGameState} = useGameState();



  return (
    <div className="App">
      <header className="App-header">

        <p>
          Tick Tack Toe APP!
        </p>
      
      </header>
      
      <body>
        <div>
          {gameState.unicornTurn && <p>IT'S THE UNICORNS TURN!</p>}
          {gameState.unicornTurn === false && <p>IT'S THE CORGIS TURN!</p>}
        </div>
      <Corgi/>
      <Unicorn/>
      <GameBoard/>
      
      </body>
    </div>
  );
}

export default App;
