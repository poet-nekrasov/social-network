const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FETCHING_FOLLOW = 'TOGGLE_IS_FETCHING_FOLLOW';

export const setUsers = (usersList) => ({type: SET_USERS, usersList});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

export const followOnUser = (userId) => ({type: FOLLOW, userId});
export const unfollowFromUser = (userId) => ({type: UNFOLLOW, userId});

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFetchingFollow = (isFetching, userId) => ({type: TOGGLE_IS_FETCHING_FOLLOW, isFetching, userId});

let initialState = {
    usersList: [],
    totalUsersAmount: 50,
    inOnePageUsersAmount: 5,
    currentPage: 1,
    followButtonValue: 'Follow',
    unfollowButtonValue: 'Unfollow',
    isFetching: true,
    isFetchingFollow: []
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

        case TOGGLE_IS_FETCHING_FOLLOW:
            return {
                ...state,
                isFetchingFollow: action.isFetching
                    ? [...state.isFetchingFollow, action.userId]
                    : state.isFetchingFollow.filter(id => id !== action.userId)
            };

        default:
            return state;
            
    }
};

export default usersReducer;