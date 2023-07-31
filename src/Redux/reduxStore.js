import { applyMiddleware, combineReducers } from "redux";
import messengerReducer from "./reducers/messengerReducer";
import profileReducer from "./reducers/profileReducer";
import navBarReducer from "./reducers/navBarReducer";
import usersReducer from "./reducers/usersReducer";
import authReducer from "./reducers/authReducer";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
  navBar: navBarReducer,
  profilePage: profileReducer,
  messengerPage: messengerReducer,
  usersPage: usersReducer,
  authData: authReducer,
  form: formReducer,
});

let store = configureStore({ reducer: reducers }, applyMiddleware(thunk));

window.store = store;

export default store;
