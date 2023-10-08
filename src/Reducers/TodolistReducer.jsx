const initialState={
    todo : ['Teja','Krishna']
}
function TodoReducer(state=initialState,action){
    if(action.type==='ADDTODO'){
        return {todo:[...state.todo,action.payload]}
    }
    if(action.type === 'DEL'){
        var x = state.todo;
        x.splice(action.payload,1)
        return {todo:[...x]}
    }
    if(action.type==='Edit')
    { return{todo:[...state.todo+1]}
    }
    return state
}
export default TodoReducer;