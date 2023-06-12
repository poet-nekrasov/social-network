import { authUserAPI } from "../../api/api";

const SET_AUTH_DATA = "SET_AUTH_DATA";

export const setData = (id, email, login) => ({
  type: SET_AUTH_DATA,
  data: { id, email, login },
});

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

export const setAuthData = () => {
  return (dispatch) => {
    authUserAPI.getAuthData().then((data) => {
      let { id, email, login } = data.data;
      dispatch(setData(id, email, login));
    });
  };
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };

    default:
      return state;
  }
};

export default authReducer;
