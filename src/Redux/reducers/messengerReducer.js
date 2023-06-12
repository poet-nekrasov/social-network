const UPDATE_MESSAGE = "UPDATE_MESSAGE";
const SEND_MESSAGE = "SEND_MESSAGE";
const DELETE_ALL_MESSAGES = "DELETE_ALL_MESSAGES";

export const updateMessage = (injectedMessage) => ({
  type: UPDATE_MESSAGE,
  injectedMessage: injectedMessage,
});
export const sendMessage = () => ({ type: SEND_MESSAGE });
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

    values: {
      injectedMessage: "",
      buttonSend: "Send",
      buttonDelete: "Delete all messages",
    },
  },
};

const messengerReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE:
      return {
        ...state,

        messages: {
          ...state.messages,

          values: {
            ...state.messages.values,
            injectedMessage: action.injectedMessage,
          },
        },
      };

    case SEND_MESSAGE:
      let text = state.messages.values.injectedMessage;

      return {
        ...state,

        messages: {
          messagesList: [
            ...state.messages.messagesList,
            { id: "1", message: text },
          ],

          values: {
            ...state.messages.values,
            injectedMessage: "",
          },
        },
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
