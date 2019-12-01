import React from 'react';
import './App.css';
import Pessoa from './containers/Pessoa.js';


const App = () => {  
  return (
    <div className="App">
      <header className="App-header"/>        
      <div className="App-content">
        <Pessoa/>
      </div>
    </div>
  );
}

export default App;