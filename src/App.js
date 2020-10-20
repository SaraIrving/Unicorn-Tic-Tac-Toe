import React from 'react';
import logo from './logo.svg';
import './App.css';
import Corgi from './components/Corgi'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>
          Tick Tack Toe APP!
        </p>
      
      </header>
      
      <body>
      <Corgi/>
      
      </body>
    </div>
  );
}

export default App;
