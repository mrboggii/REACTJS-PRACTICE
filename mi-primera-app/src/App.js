import React, {useState, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
function App() {
  const[show, setshow] = useState(true)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {show && <Fragment>
        <Counter inicial={10}/>
        <Counter inicial={5}/>
        </Fragment>}
        <button onClick={()=>setshow(!show)}>Eliminar esta mierda</button>
      </header>
    </div>
  );
}

export default App;