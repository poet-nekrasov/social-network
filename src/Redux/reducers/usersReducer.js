import { usersAPI } from "../../api/api";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_SELECTED_PAGE = "SET_SELECTED_PAGE";
const SET_DATA_FETCHING_STATUS = "SET_DATA_FETCHING_STATUS";
const UPDATE_SUBS_LIST = "UPDATE_SUBS_LIST";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount,
});

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

export const setStatusFetchingData = (isFetching) => ({
    type: SET_DATA_FETCHING_STATUS,
    isFetching,
});

export const updateSubsList = (isFetching, userId) => ({
    type: UPDATE_SUBS_LIST,
    isFetching,
    userId,
});

let initialState = {
    usersList: [],
    pageUsersCount: 7,
    selectedPage: 1,
    isFetching: true,
    usersIdProgressInSub: [],
    totalUsersCount: 0,
};

export const getAllUsers = (selectedPage, pageUsersCount) => {
    return (dispatch) => {
        dispatch(setStatusFetchingData(true));
        dispatch(setSelectedPage(selectedPage));

        usersAPI.getAllUsers(selectedPage, pageUsersCount).then((data) => {
            if (data.error === null) {
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(100));

                dispatch(setStatusFetchingData(false));
            }
        });
    };
};

export const setSub = (userId) => {
    return (dispatch) => {
        dispatch(updateSubsList(true, userId));

        usersAPI.setSub(userId).then((data) => {
            if (data.resultCode === 0) {
                dispatch(follow(userId));
            }

            dispatch(updateSubsList(false, userId));
        });
    };
};

export const deleteSub = (userId) => {
    return (dispatch) => {
        dispatch(updateSubsList(true, userId));

        usersAPI.deleteSub(userId).then((data) => {
            if (data.resultCode === 0) {
                dispatch(unfollow(userId));
            }

            dispatch(updateSubsList(false, userId));
        });
    };
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount };

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

        case SET_DATA_FETCHING_STATUS:
            return { ...state, isFetching: action.isFetching };

        case UPDATE_SUBS_LIST:
            return {
                ...state,

                usersIdProgressInSub: action.isFetching
                    ? [...state.usersIdProgressInSub, action.userId]
                    : state.usersIdProgressInSub.filter(
                          (id) => id !== action.userId
                      ),
            };

        default:
            return state;
    }
};

export default usersReducer;
