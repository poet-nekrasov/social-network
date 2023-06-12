import { usersAPI } from "../../api/api";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_SELECTED_PAGE = "SET_SELECTED_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const FOLLOWING_PROGRESS = "FOLLOWING_PROGRESS";

export const setUsers = (usersList) => ({
  type: SET_USERS,
  usersList,
});

export const setSelectedPage = (selectedPage) => ({
  type: SET_SELECTED_PAGE,
  selectedPage,
});

export const follow = (userId) => ({
  type: FOLLOW,
  userId,
});

export const unfollow = (userId) => ({
  type: UNFOLLOW,
  userId,
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const followingProgress = (isFetching, userId) => ({
  type: FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

let initialState = {
  usersList: [],
  usersAmount: 50,
  onePageUsersAmount: 5,
  selectedPage: 1,
  buttonFollow: "Follow",
  buttonUnfollow: "Unfollow",
  isFetching: true,
  idUsers: [],
};

export const getUsers = (onePageUsersAmount) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));

    usersAPI.getUsers(onePageUsersAmount).then((data) => {
      dispatch(setUsers(data.items));
      dispatch(toggleIsFetching(false));
    });
  };
};

export const getUsersSelectedPage = (onePageUsersAmount, selectedPage) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setSelectedPage(selectedPage));

    usersAPI
      .getUsersSelectedPage(onePageUsersAmount, selectedPage)
      .then((data) => {
        dispatch(setUsers(data.items));
        dispatch(toggleIsFetching(false));
      });
  };
};

export const setSub = (userId) => {
  return (dispatch) => {
    dispatch(followingProgress(true, userId));

    usersAPI.setSub(userId).then((data) => {
      dispatch(follow(userId));
      dispatch(followingProgress(false, userId));
    });
  };
};

export const deleteSub = (userId) => {
  return (dispatch) => {
    dispatch(followingProgress(true, userId));

    usersAPI.deleteSub(userId).then((data) => {
      dispatch(unfollow(userId));
      dispatch(followingProgress(false, userId));
    });
  };
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, usersList: action.usersList };

    case SET_SELECTED_PAGE:
      return { ...state, selectedPage: action.selectedPage };

    case FOLLOW:
      return {
        ...state,

        usersList: state.usersList.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }

          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,

        usersList: state.usersList.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }

          return u;
        }),
      };

    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };

    case FOLLOWING_PROGRESS:
      return {
        ...state,

        idUsers: action.isFetching
          ? [...state.idUsers, action.userId]
          : state.idUsers.filter((id) => id !== action.userId),
      };

    default:
      return state;
  }
};

export default usersReducer;
