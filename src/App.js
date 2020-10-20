import React from 'react';
import logo from './logo.svg';
import './App.css';
import Corgi from './components/Corgi';
import Unicorn from './components/Unicorn';
import Box from './components/Box';
import GameBoard from './components/GameBoard';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>
          Tick Tack Toe APP!
        </p>
      
      </header>
      
      <body>
        <Box/>
      <Corgi/>
      <Unicorn/>
      <GameBoard/>
      
      </body>
    </div>
  );
}

export default App;
