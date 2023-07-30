const SEND_MESSAGE = "SEND_MESSAGE";
const DELETE_ALL_MESSAGES = "DELETE_ALL_MESSAGES";

export const sendMessage = (newMessage) => ({ type: SEND_MESSAGE, newMessage });
export const deleteAllMessages = () => ({ type: DELETE_ALL_MESSAGES });

let initialState = {
  dialogs: {
    dialogsList: [
      { id: "1", name: "Jotaro Kujo" },
      { id: "2", name: "Joseph Joestar" },
      { id: "3", name: "Muhammad Avdol" },
      { id: "4", name: "Noriaki Kakyoin" },
      { id: "5", name: "Jean Pierre Polnareff" },
      { id: "6", name: "Iggy" },
    ],
  },

  messages: {
    messagesList: [],
  },
};

const messengerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let text = action.newMessage;

      return {
        ...state,

        messages: {
          messagesList: [
            ...state.messages.messagesList,

            { id: "1", message: text },
          ]
        }
      };

    case DELETE_ALL_MESSAGES:
      return {
        ...state,

        messages: {
          ...state.messages,
          messagesList: [],
        },
      };

    default:
      return state;
  }
};

export default messengerReducer;
