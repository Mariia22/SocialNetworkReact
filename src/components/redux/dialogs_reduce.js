const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_MESSAGE = 'CHANGE-MESSAGE';

export const dialogReduce = (state, action) => {
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

        default: return state;
    }
}


export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const changeMessageActionCreator = (message) => ({ type: CHANGE_MESSAGE, message: message })