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
        { message: 'Hi' },
        { message: 'How are you!' },
        { message: 'I am OK' },
        { message: 'I am not alcoholic' }
    ],
    newMessage: ''
};
const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                message: state.newMessage
            }
            state.messageData.push(newMessage);
            state.newMessage = '';
            return state;

        case CHANGE_MESSAGE:
            state.newMessage = action.message;
            return state;

        default:
            return state;
    }
}


export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const changeMessageActionCreator = (message) => ({ type: CHANGE_MESSAGE, message: message })

export default dialogReducer;