const ADD_MESSAGE = 'ADD-MESSAGE';

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
    ]
};
const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messageData: [...state.messageData, { message: action.newMessageText }],
            }
        default:
            return state;
    }
}
export const addMessage = (newMessageText) => ({ type: ADD_MESSAGE, newMessageText })

export default dialogReducer;