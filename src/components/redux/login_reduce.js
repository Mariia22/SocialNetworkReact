import { authAPI } from './../API/api';

const SET_LOGIN = 'SET-LOGIN';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isSetLogin: false
}
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN: {
            return {
                ...state,
                ...action.payload
            }
        }
        default: { return state }
    }
}
export const setLogin = (userId, login, email, isSetLogin) => ({ type: SET_LOGIN, payload: { userId, login, email, isSetLogin } })
export const getAuth = () => (dispatch) => {
    authAPI.getAuth().then(response => {
        if (response.data.resultCode === 0) {
            let { id, login, email } = response.data.data;
            dispatch(setLogin(id, login, email, true))
        }
    })
}
export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuth())
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
export default loginReducer;