import { rerenderDOM } from './../../render';
let state = {
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

}
export const addPost = () => {
    const newPost = {
        id: 4,
        message: state.posts.newPostText,
        like: 0
    }
    state.posts.postData.push(newPost);
    changePost('');
    rerenderDOM(state);
}
export const changePost = (textPost) => {
    state.posts.newPostText = textPost;
    rerenderDOM(state);
}

export const addMessage = () => {
    let newMessage = {
        message: state.dialogs.newMessage
    }
    state.dialogs.messageData.push(newMessage);
    changeMessage('');
    rerenderDOM(state);
}
export const changeMessage = (message) => {
    state.dialogs.newMessage = message;
    rerenderDOM(state);
}

export default state;