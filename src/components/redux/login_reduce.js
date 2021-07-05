import { authAPI } from './../API/api';

const SET_LOGIN = 'SET-LOGIN';
const GET_LOGIN = 'GET-LOGIN';

let initialState = {
    login: null,
    email: null,
    password: null,
    isSetLogin: false
}
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LOGIN: {
            return {
                ...state,
                ...action.payload
            }
        }
        case SET_LOGIN: {
            return {
                ...state,
                isSetLogin: action.isSetLogin
            }
        }
        default: { return state }
    }
}
const getLogin = (login, email) => ({ type: GET_LOGIN, payload: { login, email, password } })
export const setLogin = (isSetLogin) => ({ type: SET_LOGIN, isSetLogin })
export const getAuth = () => (dispatch) => {
    authAPI.getAuth().then(response => {
        if (response.resultCode === 0) {
            let { login, email } = response.data;
            dispatch(getLogin(login, email))
            dispatch(setLogin(true))
        }

    })
}
export const login = (email, password, rememberMe = false) => (dispatch) => {
    authAPI.login().then(response => {
        if (response.resultCode === 0) {
            dispatch(getLogin(email, password, rememberMe))
        }
    })
}
export const logout = () => (dispatch) => {
    authAPI.logout().then(response => {
        if (response.resultCode === 0) {
            dispatch(getLogin(null, null, null))
            dispatch(setLogin(false))
        }
    })
}
export default loginReducer;