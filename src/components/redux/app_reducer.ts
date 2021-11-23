import { getAuth } from "./login_reduce";

const SET_INITIALIZED = 'SET_INITIALIZED';

type initialStateType = {
  initialized: boolean
}

let initialState: initialStateType = {
  initialized: false
}
const appReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case SET_INITIALIZED: {
      return {
        ...state,
        initialized: true
      }
    }
    default: { return state }
  }
}
type initializedSuccseedAction = {
  type: typeof SET_INITIALIZED
}
const initializedSuccseed = (): initializedSuccseedAction => ({ type: SET_INITIALIZED });

export const initialized = () => (dispatch: any) => {
  let promise = dispatch(getAuth);
  Promise.all([promise])
    .then(() => {
      dispatch(initializedSuccseed())
    })
}
export default appReducer;