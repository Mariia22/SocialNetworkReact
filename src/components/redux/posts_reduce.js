const ADD_POST = 'ADD-POST';
const CHANGE_POST = 'CHANGE-POST';
const SET_LOADING_PPOFILE = 'SET-LOADING-PPOFILE ';
const SET_PROFILE = 'SET-PROFILE';

let initialState = {
    postData: [
        { id: 1, message: 'Hi!!!', like: 5 },
        { id: 2, message: 'How are you?', like: 3 },
        { id: 3, message: 'I am OK', like: 7 },
    ],
    newPostText: '',
    profile: [],
    isLoadingProfile: false
}
const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                postData: [...state.postData, { id: 4, message: state.newPostText, like: 0 }],
                newPostText: ''
            };
        }
        case CHANGE_POST: {
            return {
                ...state,
                newPostText: action.text
            }
        }
        case SET_LOADING_PPOFILE:
            return {
                ...state, isLoadingProfile: action.isLoadingProfile
            }
        case SET_PROFILE:
            return {
                ...state, profile: action.profile
            }
        default: { return state; }
    }
}
export const addPost = () => ({ type: ADD_POST })
export const changePost = (text) => ({ type: CHANGE_POST, text: text })
export const setLoadingProfile = (isLoadingProfile) => ({ type: SET_LOADING_PPOFILE, isLoadingProfile })
export const setProfile = (profile) => ({ type: SET_PROFILE, profile })

export default postReducer;
