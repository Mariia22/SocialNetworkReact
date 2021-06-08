const SET_LOGIN = 'SET-LOGIN';
const GET_LOGIN = 'GET-LOGIN';

let initialState = {
    login: null,
    email: null,
    isSetLogin: false
}
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LOGIN: {
            return {
                ...state,
                ...action.data
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
export const getLogin = (login, password, email) => ({ type: GET_LOGIN, data: { login, email } })
export const setLogin = (isSetLogin) => ({ type: SET_LOGIN, isSetLogin })
export default loginReducer;