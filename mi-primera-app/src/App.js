import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter inicial={10}/>
        <Counter inicial={5}/>
      </header>
    </div>
  );
}

export default App;