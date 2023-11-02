import './App.css';
import React, {useState} from 'react';
import {createStore} from 'redux';
import {provider, useSelector, useDispatch, connect} from 'react-redux';

function reducer(currentState, action){
  if(currentState === undefined){
    return{number:1};
  }
  const newState = {...currentState};
  return newState
}

const store = createStore(reducer);

function Left(props){
  return(
    <div>
      <h1>Left1</h1>
      <Left2/>
    </div>
  )
}
function Left2(props){
  return(
    <div>
      <h1>Left2</h1>
      <Left3/>
    </div>
  )
}
function Left3(props){
  return(
    <div>
      <h1>Left3</h1>
    </div>
  )
}
function Right(props){
  return(
    <div>
      <h1>Right1</h1>
      <Right2/>
    </div>
  )
}
function Right2(props){
  return(
    <div>
      <h1>Right2</h1>
      <Right3/>
    </div>
  )
}
function Right3(props){
  return(
    <div>
      <h1>Right3</h1>
      <input type='button' value='+' onClick={
        ()=>{}
      }/>
    </div>
  )
}

function App() {
  // const [number, setNumber] = useState(1);
  return (
    <div id='container'>
      <h1>Root</h1>
      <div id='gird'>
        <Left/>
        <Right/>
      </div>
    </div>
  );
}

export default App;
