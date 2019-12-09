import React from 'react';
import logoReact from './assets/imgs/logo-react.svg';
import './App.scss';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logoReact} className="app-logo" alt="logo" />
        <p>
          REACT study
        </p>
      </header>
    </div>
  );
}

export default App;
