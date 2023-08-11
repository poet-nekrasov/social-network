import { stopSubmit } from "redux-form";
import { authUserAPI } from "../../api/api";

const SET_DATA = "SET_DATA";

export const setData = (id, email, login, isAuth) => ({
    type: SET_DATA,
    payload: { id, email, login, isAuth },
});

export const getAuthUserData = () => (dispatch) => {
    authUserAPI.me().then((data) => {
        if (data.resultCode === 0) {
            const { id, email, login } = data.data;
            dispatch(setData(id, email, login, true));
        }
    });
};

export const logIn = (email, password, rememberMe) => (dispatch) => {
    authUserAPI.logIn({ email, password, rememberMe }).then((data) => {
        if (data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else if (data.resultCode === 1) {
            dispatch(stopSubmit("logIn", { _error: 'error' }));
        }
    });
};

export const logOut = () => (dispatch) => {
    authUserAPI.logOut().then((data) => {
        if (data.resultCode === 0) {
            dispatch(setData(null, null, null, false));
        }
    });
};

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: action.payload.isAuth,
            };

        default:
            return state;
    }
};
