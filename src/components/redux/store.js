/*
import { dialogReduce } from './dialogs_reduce.js';
import { postReduce } from './posts_reduce.js';
import { friendReduce } from './friends_reduce.js';

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
        this._state.posts = postReduce(this._state.posts, action);
        this._state.dialogs = dialogReduce(this._state.dialogs, action);
        this._state.friends = friendReduce(this._state.friends, action);
        this._subsubscribe(this._state);
    }
}
export default store;*/