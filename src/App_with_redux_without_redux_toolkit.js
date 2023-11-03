import React from "react";
import {createStore} from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';

function reducer(state, action){
  if(action.type === 'up'){
    return {...state, value:state.value + action.step}
  }
  return state;
}

const initalState = {value:0}
const store = createStore(reducer, initalState);
function Counter(){
  const dispatch = useDispatch();
  const count = useSelector(state=>state.value);
  return(
    <div>
      <div>
        {count}
      </div>
      <div>
        <button onClick={
          ()=>{ dispatch({type:'up', step:2})}
        }>+</button>
      </div>
    </div>
  )
}

function App(){
  return(
    <div>
      <Provider store={store}>
        <Counter/>
      </Provider>
    </div>
  )
}

export default App;