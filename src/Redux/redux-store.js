import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReducer"
import dialogReducer from "./dialogReducer"
import profileReducer from "./profileReducer"
import usersReducer from "./usersReducer"
import thunkMiddleware from "redux-thunk" 


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store

export default store