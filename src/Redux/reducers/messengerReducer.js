const UPDATE_MY_NEW_MESSAGE = 'UPDATE_MY_NEW_MESSAGE';
const SEND_MY_MESSAGE = 'SEND_MY_MESSAGE';
const DELETE_ALL_MY_MESSAGES = 'DELETE_ALL_MY_MESSAGES';

export const updateMyNewMessage = (currentMessageText) => ({
    type: UPDATE_MY_NEW_MESSAGE, currentMessageText: currentMessageText
});
export const sendMyMessage = () => ({type: SEND_MY_MESSAGE});
export const deleteAllMyMessages = () => ({type: DELETE_ALL_MY_MESSAGES});

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
            currentMessageText: '',
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
                        currentMessageText: action.currentMessageText
                    }
                }
            };

        case SEND_MY_MESSAGE:
            let text = state.myMessages.values.currentMessageText;

            return {
                ...state,

                myMessages: {
                    myMessagesList: [
                        ...state.myMessages.myMessagesList,
                        {id: '1', message: text}
                    ],

                    values: {
                        ...state.myMessages.values,
                        currentMessageText: ''
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