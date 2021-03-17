import { combineReducers, createStore } from "redux";
import dialogReducer from "./dialogReducer"
import profileReducer from "./profileReducer"

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer
});

let store = createStore(reducers);

export default store