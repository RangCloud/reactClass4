import React, {createContext, useContext} from "react";
import "./style_context_api.css";

const myGlobalStyle = {border: '10px dashed red'}
const themeDefault = {border: '10px solid green'};
const themeContext = createContext(themeDefault);

function Sub1(){
  const theme = useContext(themeContext);
  return(
    <themeContext.Provider value={{border: '10px dashed blue'}}>
      <div style={theme}>
        <h1>sub1</h1>
        <Sub2/>
      </div>
    </themeContext.Provider>
  )
}
function Sub2(){
  const theme = useContext(themeContext);
  return(
    <div style={myGlobalStyle}>
      <h1>sub2</h1>
      <Sub3/>
    </div>
  )
}
function Sub3(){
  const theme = useContext(themeContext);
  return(
    <div style={theme}>
      <h1>sub3</h1>
    </div>
  )
}

function App(){
  const theme = useContext(themeContext);
  console.log(theme);
  return(
    <themeContext.Provider value={{border: '10px solid yellow'}}>
      <div style={theme} className="root">
        <h1>hello</h1>
        <Sub1/>
      </div>
    </themeContext.Provider>
  )
}

export default App;