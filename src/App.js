import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function Left(props){
  return(
    <div>
      <h1>Left1: {props.number}</h1>
      <Left2 number={props.number}/>
    </div>
  )
}
function Left2(props){
  return(
    <div>
      <h1>Left2: {props.number}</h1>
      <Left3 number = {props.number}/>
    </div>
  )
}
function Left3(props){
  return(
    <div>
      <h1>Left3: {props.number}</h1>
    </div>
  )
}

function App() {
  const [number, setNumber] = useState(1);
  return (
    <div id='container'>
      <h1>Root</h1>
      <Left number={number}/>
    </div>
  );
}

export default App;
