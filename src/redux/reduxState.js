import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import  TablReduser from "./TablReduser"


let reducers = combineReducers({
    tabl:TablReduser
});

const store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;