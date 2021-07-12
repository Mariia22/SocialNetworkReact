import { getAuth } from "./login_reduce";

const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
    initialized: false
}
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized
            }
        }
        default: { return state }
    }
}

const initializedSuccseed = (initialized) => ({ type: SET_INITIALIZED, initialized });
export const initialized = () => (dispatch) => {
    let promise = dispatch(getAuth);
    promise.then(() => {
        dispatch(initializedSuccseed(true))
    })
}
export default appReducer;