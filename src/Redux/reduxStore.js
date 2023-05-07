import {combineReducers, createStore} from "redux";
import messengerReducer from "./reducers/messengerReducer";
import myProfileReducer from "./reducers/myProfileReducer";
import navBarReducer from "./reducers/navBarReducer";
import usersReducer from "./reducers/usersReducer";
import authReducer from "./reducers/authReducer";

let reducers = combineReducers({
        navBar: navBarReducer,
        myProfilePage: myProfileReducer,
        messengerPage: messengerReducer,
        usersPage: usersReducer,
        auth: authReducer
    }
);

let store = createStore(reducers);

window.store = store;

export default store;