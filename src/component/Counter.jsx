import {connect} from "react-redux"
import React from "react"

function Counter(props){
    console.log(props)
    return(
        <div className="App">
            <h1>counter : {props.c.count}</h1>
            <button onClick={()=>props.dispatch({type:"INC"})}>increment</button>
            <button onClick={()=>props.dispatch({type:"DEC"})}>decrement</button>
            <button onClick={()=>props.dispatch({type:"res"})}>reset</button>
        </div>
    )
}
export default connect(store=>store) (Counter)