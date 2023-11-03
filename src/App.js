import React, {createContext, useState, useContext} from "react";

const ColorContext = createContext({
    state: {color: 'black', subcolor: 'red'},
    actions:{
        setColor: ()=>{
        },
        setSubcolor: ()=>{

        }
    }
});

const ColorProvider = ({children}) =>{
    const [color, setColor] = useState('black');
    const [subcolor, setSubcolor] = useState('red');

    const value = {
        state: {color, subcolor},
        actions:{setColor, setSubcolor}
    }
    return( <ColorContext.Provider value={value}>{children}</ColorContext.Provider>)
};
const {Consumer: ColorConsumer} = ColorContext;

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const SelectColors = ()=>{
    return(
        <div>
            <h2> 색상을 선택하세요 </h2>
            <ColorConsumer>
            {
                ({actions})=>(
                    <div style={{display:'flex'}}>
                {
                    colors.map(color=>(
                        <div
                        key = {color} style={{
                            background:color, width:'24px', height:'24px', cursor:'pointer'
                        }}
                        // left click
                        onClick={()=>{actions.setColor(color)}}
                        // right click
                        onContextMenu={
                            e=>{
                                e.preventDefault();
                                actions.setSubcolor(color);
                            }
                        }
                        />
                    ))
                }
            </div>
                )
            }
            </ColorConsumer>
            {/* <div style={{display:'flex'}}>
                {
                    colors.map(color=>(
                        <div
                        key = {color} style={{
                            background:color, width:'24px', height:'24px', cursor:'pointer'
                        }}
                        />
                    ))
                }
            </div> */}
        </div>
    )
}

const ColorBoxUseContext = ()=>{
    const {state} = useContext(ColorContext);
    return(
                <>
                    <div style={
                        {width:'64px', height:'64px', background: state.color}
                    }/>
                    <div style={
                        {width:'32px', height:'32px', background: state.subcolor}
                    }/>
                </>
    )
}

const ColorBox = ()=>{
    return(
        <ColorConsumer>
        {
            value => (
                <>
                    <div style={
                        {width:'64px', height:'64px', background: value.state.color}
                    }/>
                    <div style={
                        {width:'32px', height:'32px', background: value.state.subcolor}
                    }/>
                </>
            )
        }
        </ColorConsumer>
        //{<ColorContext.Consumer>
        //{
        //    value=>(
        //        <div style={{
        //            width:'64px',
        //            height:'64px',
        //            background: value.color
        //        }}/>
        //    )
        //}
        //</ColorContext.Consumer> */}
    );
}
const App = ()=>{
    return(
        //<ColorContext.Provider value={{color:'red'}}>
        <ColorProvider>
            <div>
                <SelectColors/>
                {/* <ColorBox /> */}
                <ColorBoxUseContext/>
            </div>
        </ColorProvider>
        //</ColorContext.Provider>
    )
}

export default App;