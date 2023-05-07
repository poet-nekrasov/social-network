const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

export const setUsers = (usersList) => ({type: SET_USERS, usersList});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const followOnUser = (userId) => ({type: FOLLOW, userId});
export const unfollowFromUser = (userId) => ({type: UNFOLLOW, userId});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

let initialState = {
    usersList: [],
    totalUsersAmount: 50,
    inOnePageUsersAmount: 5,
    currentPage: 1,
    followButtonValue: 'Follow',
    unfollowButtonValue: 'Unfollow',
    isFetching: true
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USERS:
            return {...state, usersList: action.usersList};

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};

        case FOLLOW:
            return {
                ...state,

                usersList: state.usersList.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }

                    return u;
                })
            };

        case UNFOLLOW:
            return {
                ...state,

                usersList: state.usersList.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }

                    return u;
                }),
            };

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};

        default:
            return state;
            
    }
};

export default usersReducer;