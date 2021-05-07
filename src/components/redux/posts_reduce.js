const ADD_POST = 'ADD-POST';
const CHANGE_POST = 'CHANGE-POST';

export const postReduce = (state, action) => {
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
