const ADD_POST = 'ADD-POST';
const CHANGE_POST = 'CHANGE-POST';

let initialState = {
    postData: [
        { id: 1, message: 'Hi!!!', like: 5 },
        { id: 2, message: 'How are you?', like: 3 },
        { id: 3, message: 'I am OK', like: 7 },
    ],
    newPostText: ''
}
export const postReduce = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 4,
                message: state.newPostText,
                like: 0
            }
            state.postData.push(newPost);
            state.newPostText = '';
            return state;
        case CHANGE_POST:
            state.newPostText = action.text;
            return state;

        default: return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const changePostActionCreator = (text) => ({ type: CHANGE_POST, text: text })
