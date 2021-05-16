const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_MESSAGE = 'CHANGE-MESSAGE';

let initialState = {
    dialogData: [
        { id: 1, name: 'Mariia' },
        { id: 2, name: 'Anna' },
        { id: 3, name: 'Alina' },
        { id: 4, name: 'Malina' },
        { id: 5, name: 'Eva' },
    ],

    messageData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you!' },
        { id: 3, message: 'I am OK' },
        { id: 4, message: 'I am not alcoholic' }
    ],
    newMessage: ''
};
const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messageData: [...state.messageData, { message: state.newMessage }],
                newMessage: ''
            }
        case CHANGE_MESSAGE:
            return {
                ...state,
                newMessage: action.message
            }
        default:
            return state;
    }
}
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const changeMessageActionCreator = (message) => ({ type: CHANGE_MESSAGE, message: message })

export default dialogReducer;