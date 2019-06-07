import React from 'react';

//Components
import Login from'./Login/Login';


//CSS
import './App.css';
import Registro from './Registro.jsx/Registro';


function App() {
  const myName = 'Rocío';
  return (
    <div className="App">
      <Login name={myName}/>
      <Registro/>
    </div>
  );
}





export default App;
