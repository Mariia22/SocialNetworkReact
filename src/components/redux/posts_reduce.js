import { profileAPI } from "../API/api";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET-PROFILE';
const SET_ISLOADING = 'SET-ISLOADING';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE-POST';

let initialState = {
    postData: [
        { id: 1, message: 'Hi!!!', like: 5 },
        { id: 2, message: 'How are you?', like: 3 },
        { id: 3, message: 'I am OK', like: 7 },
    ],
    profile: [],
    isLoadingProfile: false,
    status: '',
    isOwner: false
}
const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                postData: [...state.postData, { id: 4, message: action.newPostText, like: 0 }]
            };
        }
        case SET_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_ISLOADING:
            return {
                ...state, isLoadingProfile: action.isLoadingProfile
            }
        case SET_STATUS:
            return {
                ...state, status: action.status
            }
        case DELETE_POST:
            return {
                ...state, postData: [...state.postData.filter(postData => postData.id !== action.postId)]
            }
        default: { return state; }
    }
}
export const addPost = (newPostText) => ({ type: ADD_POST, newPostText })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
const setProfile = (profile) => ({ type: SET_PROFILE, profile })
const setStatus = (status) => ({ type: SET_STATUS, status })
export const setLoadingProfile = (isLoadingProfile) => ({ type: SET_ISLOADING, isLoadingProfile })
export const getProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(data => {
        dispatch(setProfile(data));
        dispatch(setLoadingProfile(true));
    });
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(
        data => {
            dispatch(setStatus(data))
        }
    )
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(data => {
        if (data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
    )
}
export const savePhoto = (file) => (dispatch) => {
    profileAPI.updateStatus(file).then(data => {
        if (data.resultCode === 0) {
            dispatch(setStatus(file))
        }
    }
    )
}
export default postReducer;
