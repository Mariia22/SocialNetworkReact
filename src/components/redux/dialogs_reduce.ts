const ADD_MESSAGE = 'ADD-MESSAGE';

type DialogType = {
  id: number
  name: string
}
type MessageType = {
  id: number
  message: string
}
let initialState = {
  dialogData: [
    { id: 1, name: 'Mariia' },
    { id: 2, name: 'Anna' },
    { id: 3, name: 'Alina' },
    { id: 4, name: 'Malina' },
    { id: 5, name: 'Eva' },
  ] as Array<DialogType>,

  messageData: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you!' },
    { id: 3, message: 'I am OK' },
    { id: 4, message: 'I am not alcoholic' }
  ] as Array<MessageType>
}

export type initialStateType = typeof initialState;
const dialogReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messageData: [...state.messageData, { id: 6, message: action.newMessageText }],
      }
    default:
      return state;
  }
}

type AddMessageActionType = {
  type: typeof ADD_MESSAGE
  newMessageText: string
}
export const addMessage = (newMessageText: string): AddMessageActionType => ({ type: ADD_MESSAGE, newMessageText })

export default dialogReducer;