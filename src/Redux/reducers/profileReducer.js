import { profileAPI } from "../../api/api";

const SET_SELECTED_PROFILE = "SET_SELECTED_PROFILE";

const ADD_POST = "ADD_POST";

const DELETE_ALL_POSTS = "DELETE_ALL_POSTS";

const SET_PROFILE_STATUS = "SET_PROFILE_STATUS";

export const setSelectedProfile = (profile) => ({
    type: SET_SELECTED_PROFILE,
    profile,
});

export const setProfileStatus = (status) => ({
    type: SET_PROFILE_STATUS,
    status,
});

export const addPost = (newPost) => ({ type: ADD_POST, newPost });

export const deleteAllPosts = () => ({ type: DELETE_ALL_POSTS });

export const getProfileStatus = (userId) => {
    return (dispatch) => {
        profileAPI
            .getStatus(userId)
            .then((data) => dispatch(setProfileStatus(data)));
    };
};

export const updateProfileStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then((data) => {
            if (data.resultCode === 0) {
                dispatch(getProfileStatus(data));
            }
        });
    };
};

export const getSelectedProfile = (userId) => {
    return (dispatch) => {
        profileAPI
            .getProfile(userId)
            .then((data) => dispatch(setSelectedProfile(data)));
    };
};

let initialState = {
    status: null,

    profile: null,

    posts: {
        postsList: [],

        values: {
            numPost: 1,
        },
    },
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE_STATUS:
            return {
                ...state,

                status: action.status,
            };

        case SET_SELECTED_PROFILE:
            return {
                ...state,

                profile: action.profile,
            };

        case ADD_POST:
            if (action.newPost !== "") {
                let post = {
                    id: state.posts.values.numPost,
                    message: action.newPost,
                    likesCount: 0,
                };

                state.posts.values.numPost++;

                return {
                    ...state,

                    posts: {
                        postsList: [...state.posts.postsList, post],

                        values: { ...state.posts.values },
                    },
                };
            }

            return state;

        case DELETE_ALL_POSTS:
            return {
                ...state,

                posts: {
                    postsList: [],

                    values: {
                        ...state.posts.values,

                        numPost: 1,
                    },
                },
            };

        default:
            return state;
    }
};

export default profileReducer;
