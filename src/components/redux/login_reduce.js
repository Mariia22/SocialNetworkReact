import { stopSubmit } from 'redux-form';
import { authAPI, securityAPI } from './../API/api';

const SET_LOGIN = 'SET-LOGIN';
const GET_CAPTCHA = 'GET-CAPTCHA';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isSetLogin: false,
    captchaUrl: null
}
const loginReducer = (state = initialState, action) => {
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
export const setLogin = (userId, login, email, isSetLogin) => ({
    type: SET_LOGIN, payload: { userId, login, email, isSetLogin }
})

export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA, payload: { captchaUrl }
})


export const getAuth = () => (dispatch) => {
    return authAPI.getAuth().then(response => {
        if (response.data.resultCode === 0) {
            let { id, login, email } = response.data.data;
            dispatch(setLogin(id, login, email, true))
        }
    })
}
export const login = (email, password, rememberMe, captcha) => (dispatch) => {
    console.log(captcha)
    authAPI.login(email, password, rememberMe, captcha).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuth())
        }
        else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl());
            }
            const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
            dispatch(stopSubmit('login', { _error: message }))
        }
    })
}
export const logout = () => (dispatch) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setLogin(null, null, null, false))
        }
    })
}
export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}
export default loginReducer;