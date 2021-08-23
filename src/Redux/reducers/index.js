



import { combineReducers } from "redux";
import reducer from "./Reducer";

const reducers = combineReducers({
    account : reducer
});

export default reducers; 