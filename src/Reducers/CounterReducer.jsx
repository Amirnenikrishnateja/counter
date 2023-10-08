const initialState={
    count:+prompt()
}

function CounterReducer(state=initialState,action){
    if(action.type==="INC")
    {
        console.log(state)
        console.log(initialState)
        return{
        
        count:state.count+1}
    }
    if(action.type==="DEC")
    {
        return{
        count:state.count-1}
    }  
    if(action.type==="res")
    {
        return{
            count:initialState.count
        }
    }
    return state
}

export default CounterReducer;