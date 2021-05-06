const ADD_POST = 'ADD-POST';
const CHANGE_POST = 'CHANGE-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_MESSAGE = 'CHANGE-MESSAGE';

let store = {
    _state: {
        posts: {
            postData: [
                { id: 1, message: 'Hi!!!', like: 5 },
                { id: 2, message: 'How are you?', like: 3 },
                { id: 3, message: 'I am OK', like: 7 },
            ],
            newPostText: ''
        },

        dialogs: {
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
        },
        friends: [
            { name: 'Mariia', photo: './../../images/Mariia.jpeg' },
            { name: 'Anna', photo: './../../images/Anna.jpeg' },
            { name: 'Alina', photo: './../../images/Alina.jpeg' }
        ]
    },
    getState() {
        return this._state;
    },
    _subsubscribe() {
        alert("Change text");
    },
    subscribe(observer) {
        this._subsubscribe = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost = {
                id: 4,
                message: this._state.posts.newPostText,
                like: 0
            }
            this._state.posts.postData.push(newPost);
            this._state.posts.newPostText = '';
            this._subsubscribe(this._state);
        }
        else if (action.type === CHANGE_POST) {
            this._state.posts.newPostText = action.text;
            this._subsubscribe(this._state);
        }
        else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                message: this._state.dialogs.newMessage
            }
            this._state.dialogs.messageData.push(newMessage);
            this._state.dialogs.newMessage = '';
            this._subsubscribe(this._state);
        }
        else if (action.type === CHANGE_MESSAGE) {
            this._state.dialogs.newMessage = action.message;
            this._subsubscribe(this._state);
        }
    }
}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const changePostActionCreator = (text) => ({ type: CHANGE_POST, text: text })
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const changeMessageActionCreator = (message) => ({ type: CHANGE_MESSAGE, message: message })

export default store;