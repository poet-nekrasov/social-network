const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export const setUsersActionCreator = (users) => ({type: SET_USERS, users});

export const followActionCreator = (userId) => ({type: FOLLOW, userId});

export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId});

let initialState = {
    users: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            };

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            };

        default:
            return state;

    }

};


export default usersReducer;