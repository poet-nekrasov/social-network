import { profileAPI } from "../../api/api";
const UPDATE_INJECTED_TEXT = "UPDATE_INJECTED_TEXT";
const ADD_POST = "ADD_POST";
const DELETE_ALL_POSTS = "DELETE_ALL_POSTS";
const SET_SELECTED_PROFILE = "SET_SELECTED_PROFILE";

export const setSelectedProfile = (profile) => ({
  type: SET_SELECTED_PROFILE,
  profile,
});
export const updateInjectedText = (injectedText) => ({
  type: UPDATE_INJECTED_TEXT,
  injectedText: injectedText,
});
export const addPost = () => ({ type: ADD_POST });
export const deleteAllPosts = () => ({ type: DELETE_ALL_POSTS });

export const getSelectedProfile = (userId) => {
  return (dispatch) => {
    profileAPI
      .getProfile(userId)
      .then((data) => dispatch(setSelectedProfile(data)));
  };
};

let initialState = {
  profile: null,

  posts: {
    postsList: [],

    values: {
      numPost: 1,
      injectedText: "",
      buttonAdd: "Add post",
      buttonDelete: "Delete all posts",
    },
  },
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_PROFILE:
      return {
        ...state, 

        profile: action.profile 
      };

    case UPDATE_INJECTED_TEXT:
      return {
        ...state,

        posts: {
          ...state.posts,

          values: {
            ...state.posts.values,

            injectedText: action.injectedText,
          },
        },
      };

    case ADD_POST:
      if (state.posts.values.injectedText !== "") {
        let post = {
          id: state.posts.values.numPost,
          message: state.posts.values.injectedText,
          likesCount: 0,
        };

        state.posts.values.numPost++;

        return {
          ...state,

          posts: {
            postsList: [
              ...state.posts.postsList, 

              post
            ],

            values: {
               ...state.posts.values, 

               injectedText: "" 
              },
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
