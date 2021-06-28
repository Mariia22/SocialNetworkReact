import { profileAPI } from "../API/api";

const ADD_POST = 'ADD-POST';
const CHANGE_POST = 'CHANGE-POST';
const SET_PROFILE = 'SET-PROFILE';
const SET_ISLOADING = 'SET-ISLOADING';
const GET_STATUS = 'GET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';

let initialState = {
    postData: [
        { id: 1, message: 'Hi!!!', like: 5 },
        { id: 2, message: 'How are you?', like: 3 },
        { id: 3, message: 'I am OK', like: 7 },
    ],
    newPostText: '',
    profile: [],
    isLoadingProfile: false,
    status: ''
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
        case SET_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_ISLOADING:
            return {
                ...state, isLoadingProfile: action.isLoadingProfile
            }
        case GET_STATUS:
            return {
                ...state, status: action.getStatus
            }
        case UPDATE_STATUS:
            return {
                ...state, status: action.updateStatus
            }
        default: { return state; }
    }
}
export const addPost = () => ({ type: ADD_POST })
export const changePost = (text) => ({ type: CHANGE_POST, text: text })
const setProfile = (profile) => ({ type: SET_PROFILE, profile })
const setStatus = (status) => ({ type: GET_STATUS, status })
const newStatus = (status) => ({ type: UPDATE_STATUS, status })
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
export const updateStatus = () => (dispatch) => {
    profileAPI.updateStatus().then(data => {
        if (data.resultCode === 0) {
            dispatch(newStatus)
        }
    }
    )
}
export default postReducer;
