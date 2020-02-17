import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import  TablReducer from "./TablReducer"


let reducers = combineReducers({
    table:TablReducer
});

const store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;
