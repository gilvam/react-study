import React from 'react';
import logoReact from './assets/imgs/logo-react.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoReact} className="App-logo" alt="logo" />
        <p>
          REACT study
        </p>
      </header>
    </div>
  );
}

export default App;
