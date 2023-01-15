const UPDATE_MY_NEW_MESSAGE = 'UPDATE_MY_NEW_MESSAGE';
const SEND_MY_MESSAGE = 'SEND_MY_MESSAGE';
const DELETE_ALL_MY_MESSAGES = 'DELETE_ALL_MY_MESSAGES';

export const updateMyNewMessageActionCreator = (text) => ({type: UPDATE_MY_NEW_MESSAGE, newMessageText: text});
export const sendMyMessageActionCreator = () => ({type: SEND_MY_MESSAGE});
export const deleteAllMyMessagesActionCreator = () => ({type: DELETE_ALL_MY_MESSAGES});

let initialState = {

    myDialogs: {

        myDialogsList: [
            {id: '1', name: 'Jotaro Kujo'},
            {id: '2', name: 'Joseph Joestar'},
            {id: '3', name: 'Muhammad Avdol'},
            {id: '4', name: 'Noriaki Kakyoin'},
            {id: '5', name: 'Jean Pierre Polnareff'},
            {id: '6', name: 'Iggy'}
        ],

    },

    myMessages: {

        myMessagesList: [],

        values: {
            newMessageText: '',
            sendButton: 'Send',
            deleteButton: 'Delete all myMessages'
        },

    }

}

const messengerReducer = (state = initialState, action) => {

    switch (action.type) {

        case UPDATE_MY_NEW_MESSAGE:

            return {

                ...state,

                myMessages: {

                    ...state.myMessages,

                    values: {
                        ...state.myMessages.values,
                        newMessageText: action.newMessageText
                    }

                }

            };

        case SEND_MY_MESSAGE:

            let text = state.myMessages.values.newMessageText;

            return {

                ...state,

                myMessages: {

                    myMessagesList: [
                        ...state.myMessages.myMessagesList,
                        {id: '1', message: text}
                    ],

                    values: {
                        ...state.myMessages.values,
                        newMessageText: ''
                    }

                }

            };

        case DELETE_ALL_MY_MESSAGES:

            return {

                ...state,

                myMessages: {
                    ...state.myMessages,
                    myMessagesList: []
                }

            };

        default:
            return state;

    }

}

export default messengerReducer;