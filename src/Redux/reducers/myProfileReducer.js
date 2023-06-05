import { myProfileAPI } from "../../api/api";
const UPDATE_MY_NEW_POST_TEXT = 'UPDATE_MY_NEW_POST_TEXT';
const ADD_MY_POST = 'ADD_MY_POST';
const DELETE_ALL_POSTS = 'DELETE_ALL_POSTS';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const updateMyNewPost = (currentPostText) => ({type: UPDATE_MY_NEW_POST_TEXT, currentPostText: currentPostText});
export const addMyPost = () => ({type: ADD_MY_POST});
export const deleteAllPosts = () => ({type: DELETE_ALL_POSTS});

export const currentUserProfile = (userId) => {
    myProfileAPI.getUserProfile(userId)
        .then(data => this.props.setUserProfile(data));
}

let initialState = {
    profile: null,

    myPosts: {
        myPostsList: [],

        values: {
            numPost: 1,

            currentPostText: '',

            addButton: 'Add post',
            deleteButton: 'Delete all myPosts'
        },
    }
}

const myProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        case UPDATE_MY_NEW_POST_TEXT:
            return {
                ...state,

                myPosts: {
                    ...state.myPosts,

                    values: {
                        ...state.myPosts.values,

                        currentPostText: action.currentPostText
                    }
                }
            };

        case ADD_MY_POST:
            if (state.myPosts.values.currentPostText !== '') {
                let post = {
                    id: state.myPosts.values.numPost,
                    message: state.myPosts.values.currentPostText,
                    likesCount: 0
                }

                state.myPosts.values.numPost++;

                return {
                    ...state,

                    myPosts: {
                        myPostsList: [
                            ...state.myPosts.myPostsList,

                            post
                        ],

                        values: {
                            ...state.myPosts.values,

                            currentPostText: ''
                        }
                    }
                };
            }

            return state;

        case DELETE_ALL_POSTS:
            return {
                ...state,

                myPosts: {
                    myPostsList: [],

                    values: {
                        ...state.myPosts.values,

                        numPost: 1
                    }
                }
            };

        default:
            return state;
    }
}

export default myProfileReducer;