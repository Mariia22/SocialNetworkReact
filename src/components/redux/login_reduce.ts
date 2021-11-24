import { stopSubmit } from 'redux-form';
import { authAPI, securityAPI } from '../API/api';
import { ResultCodeEnum, ResultCodeCaptchaEnum } from './../API/api'

const SET_LOGIN = 'SET-LOGIN';
const GET_CAPTCHA = 'GET-CAPTCHA';

type initialStateType = {
  userId: number | null,
  login: string | null,
  email: string | null,
  isSetLogin: boolean,
  captchaUrl: string | null
}

let initialState: initialStateType = {
  userId: null,
  login: null,
  email: null,
  isSetLogin: false,
  captchaUrl: null
}
const loginReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case SET_LOGIN:
    case GET_CAPTCHA:
      {
        return {
          ...state,
          ...action.payload
        }
      }
    default: { return state }
  }
}
type setLoginActionPayloadType = {
  userId: number | null
  login: string | null
  email: string | null
  isSetLogin: boolean
}
type setLoginActionType = {
  type: typeof SET_LOGIN
  payload: setLoginActionPayloadType
}

export const setLogin = (userId: number | null, login: string | null, email: string | null, isSetLogin: boolean): setLoginActionType => ({
  type: SET_LOGIN, payload: { userId, login, email, isSetLogin }
})

type getCaptchaUrlSuccessAction = {
  type: typeof GET_CAPTCHA
  payload: { captchaUrl: string }
}

export const getCaptchaUrlSuccess = (captchaUrl: string): getCaptchaUrlSuccessAction => ({
  type: GET_CAPTCHA, payload: { captchaUrl }
})


export const getAuth = () => async (dispatch: any) => {
  const authData = await authAPI.getAuth()
  if (authData.resultCode === ResultCodeEnum.Success) {
    let { id, login, email } = authData.data;
    dispatch(setLogin(id, login, email, true))
  }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
  const loginData = await authAPI.login(email, password, rememberMe, captcha)
  if (loginData.resultCode === ResultCodeEnum.Success) {
    dispatch(getAuth())
  }
  else {
    if (loginData.resultCode === ResultCodeCaptchaEnum.CaptchaIsRequired) {
      dispatch(getCaptchaUrl());
    }
    const message = loginData.messages.length > 0 ? loginData.messages[0] : 'Some error';
    dispatch(stopSubmit('login', { _error: message }))
  }
}

export const logout = () => async (dispatch: any) => {
  const response = await authAPI.logout()
  if (response.data.resultCode === 0) {
    dispatch(setLogin(null, null, null, false))
  }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl))
}
export default loginReducer;