import {connect} from "react-redux"
import React, { useState } from "react"

function Todolist(props){
    var [Todos,setTodos] = useState('')
    return(
        <div className="App">
            <h1>Todolist</h1>
            <input type="text" onChange={(e)=>{setTodos(e.target.value)}}/>
            <button id="on" className="on" onClick={()=>{props.dispatch({type:'ADDTODO',payload:Todos})}}>Add</button>
            <button id="off" className="off">Update</button>
            <ul>
                {
                    props.t.todo.map((todo,i)=>{
                        return (
                            <li>{todo}
                            <button onClick={()=>{props.dispatch({type:'DEL',payload:i})}}>Del</button>
                            <button onClick={()=>{props.dispatch({type:'Edit'})}}>Edit</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default connect(store=>store) (Todolist)