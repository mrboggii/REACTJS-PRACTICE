import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter inicial={10} mas={2} menos={3} />
      </header>
    </div>
  );
}

export default App;
