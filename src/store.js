import { combineReducers, createStore} from "redux";
import CounterReducer from "./Reducers/CounterReducer";
import TodoReducer from "./Reducers/TodolistReducer";
const store=createStore(combineReducers({c:CounterReducer,t:TodoReducer}))

export default store