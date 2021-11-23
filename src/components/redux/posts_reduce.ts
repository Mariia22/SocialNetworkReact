import { profileAPI } from "../API/api";
import { stopSubmit } from 'redux-form';
import { PhotoType, PostType, ProfileType } from "../../types/types";

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
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  isLoadingProfile: false,
  status: '',
  isOwner: false
}

type initialStateType = typeof initialState;
const postReducer = (state = initialState, action: any): initialStateType => {
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
        ...state, profile: { ...state.profile, photos: action.photos } as ProfileType
      }
    default: { return state; }
  }
}

type AddPostActionType = {
  type: typeof ADD_POST
  newPostText: string
}
export const addPost = (newPostText: string): AddPostActionType => ({ type: ADD_POST, newPostText })

type DeletePostActionType = {
  type: typeof DELETE_POST
  postId: number
}
export const deletePost = (postId: number): DeletePostActionType => ({ type: DELETE_POST, postId })

type SetProfileActionType = {
  type: typeof SET_PROFILE
  profile: ProfileType
}
const setProfile = (profile: ProfileType): SetProfileActionType => ({ type: SET_PROFILE, profile })

type SetStatusActionType = {
  type: typeof SET_STATUS
  status: string
}
const setStatus = (status: string): SetStatusActionType => ({ type: SET_STATUS, status })

type SetIsLoadingActionType = {
  type: typeof SET_ISLOADING
  isLoadingProfile: boolean
}
export const setLoadingProfile = (isLoadingProfile: boolean): SetIsLoadingActionType => ({ type: SET_ISLOADING, isLoadingProfile })

type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: PhotoType
}
export const savePhotoSuccess = (photos: PhotoType): SavePhotoSuccessActionType => ({ type: SAVE_PHOTO_SUCCESS, photos })

export const getProfile = (userId: number) => async (dispatch: any) => {
  let response = await profileAPI.getProfile(userId);
  dispatch(setProfile(response.data));
  dispatch(setLoadingProfile(true));
}

export const getStatus = (userId: number) => async (dispatch: any) => {
  let response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response.data))
}

export const updateStatus = (status: string) => async (dispatch: any) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}

export const savePhoto = (photoFile: string) => async (dispatch: any) => {
  let response = await profileAPI.savePhoto(photoFile);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos))
  }
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
  const userId = getState().login.userId;
  const response = await profileAPI.saveProfile(profile);
  console.log(response.data.resultCode);
  if (response.data.resultCode === 0) {
    dispatch(getProfile(userId))
  }
  else {
    dispatch(stopSubmit('profile', { error: response.data.messages[0] }))
  }
}
export default postReducer;
