export let initialState = {
    navBarNames: [
        {id: 1, name: 'Home'},
        {id: 2, name: 'My profile'},
        {id: 3, name: 'Messenger'},
        {id: 4, name: 'Users'},
        {id: 5, name: 'News'},
        {id: 6, name: 'Music'},
        {id: 7, name: 'Settings'}
    ]
};

const navBarReducer = (state = initialState, action) => state;

export default navBarReducer;

