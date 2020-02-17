import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import  TableReducer from "./TableReducer"


let reducers = combineReducers({
    table:TableReducer
});

const store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;
