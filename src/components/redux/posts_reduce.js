import { profileAPI } from "../API/api";
import { stopSubmit } from 'redux-form';

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET-PROFILE';
const SET_ISLOADING = 'SET-ISLOADING';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE-POST';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';

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
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state, profile: { ...state.profile, photos: action.photos }
            }
        default: { return state; }
    }
}
export const addPost = (newPostText) => ({ type: ADD_POST, newPostText })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
const setProfile = (profile) => ({ type: SET_PROFILE, profile })
const setStatus = (status) => ({ type: SET_STATUS, status })
export const setLoadingProfile = (isLoadingProfile) => ({ type: SET_ISLOADING, isLoadingProfile })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })

export const getProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setProfile(response.data));
    dispatch(setLoadingProfile(true));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (photoFile) => async (dispatch) => {
    let response = await profileAPI.savePhoto(photoFile);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().login.userId;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getProfile(userId))
    }
    else {
        dispatch(stopSubmit('profile', { error: response.data.messages[0] }))
    }
}
export default postReducer;
