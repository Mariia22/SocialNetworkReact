const SET_LOGIN = 'SET-LOGIN';

let initialState = {
    login: null,
    password: null,
    email: null,
    isSetLogin: false
}
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN: {
            return {
                ...state,
                ...action.data
            }
        }
        default: { return state }
    }
}
export default setLogin = (login, password, email) => ({ type: SET_LOGIN, data: { login, password, email } })
export default loginReducer;