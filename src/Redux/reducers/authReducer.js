import { authUserAPI } from "../../api/api";

const SET_DATA = "SET_DATA";

export const setData = (id, email, login, isAuth) => ({
  type: SET_DATA,
  payload: { id, email, login, isAuth },
});

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

export const logIn =
  ({ email, password, rememberMe }) =>
  (dispatch) => {
    authUserAPI
      .logIn({ email, password, rememberMe })
      .then(() => dispatch(getAuthUserData()));
  };

export const logOut = () => (dispatch) => {
  authUserAPI
    .logOut()
    .then(() => dispatch(setData(null, null, null, false)));
};

export const getAuthUserData = () => (dispatch) => {
  authUserAPI.me().then((data) => {
    const {id, email, login} = data.data;
    dispatch(setData(id, email, login, true));
  });
};

const authReducer = (state = initialState, action) => {
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

export default authReducer;
