const UPDATE_MY_NEW_POST_TEXT = 'UPDATE_MY_NEW_POST_TEXT';
const ADD_MY_POST = 'ADD_MY_POST';
const DELETE_ALL_MY_POSTS = 'DELETE_ALL_MY_POSTS';

export const updateMyNewPostActionCreator = (text) => ({type: UPDATE_MY_NEW_POST_TEXT, newPostText: text});
export const addMyPostActionCreator = () => ({type: ADD_MY_POST});
export const deleteAllMyPostsActionCreator = () => ({type: DELETE_ALL_MY_POSTS});

let initialState = {

    myPosts: {

        myPostsList: [],

        values: {
            numPost: 1,
            newPostText: '',
            addButton: 'Add post',
            deleteButton: 'Delete all myPosts'
        },

    }

}

const myProfileReducer = (state = initialState, action) => {

    switch (action.type) {

        case UPDATE_MY_NEW_POST_TEXT:

            return {
                ...state,
                myPosts: {
                    ...state.myPosts,
                    values: {
                        ...state.myPosts.values,
                        newPostText: action.newPostText
                    }
                }
            };

        case ADD_MY_POST:

            if (state.myPosts.values.newPostText !== '') {

                let post = {
                    id: state.myPosts.values.numPost,
                    message: state.myPosts.values.newPostText,
                    likesCount: 0
                };

                return {
                    ...state,
                    myPosts: {
                        myPostsList: [
                            ...state.myPosts.myPostsList,
                            post
                        ],
                        values: {
                            ...state.myPosts.values,
                            newPostText: '',
                            numPost: {...state.myPosts.values.numPost}
                        }
                    }
                };

            };

            return state;


        case DELETE_ALL_MY_POSTS:

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