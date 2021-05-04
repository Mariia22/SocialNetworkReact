let state = {
    posts: {
        postData: [
            { id: 1, message: 'Hi!!!', like: 5 },
            { id: 2, message: 'How are you?', like: 3 },
            { id: 3, message: 'I am OK', like: 7 },
        ]
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
        ]
    },
    friends: [
        { name: 'Mariia', photo: './../../images/Mariia.jpeg' },
        { name: 'Anna', photo: './../../images/Anna.jpeg' },
        { name: 'Alina', photo: './../../images/Alina.jpeg' }
    ]

}
export const addPost = (textPost) => {
    const newPost = {
        id: 4,
        message: textPost,
        likes: 0
    }
    state.posts.postData.push(newPost);
}

export default state;