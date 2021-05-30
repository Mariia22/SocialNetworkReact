const SET_LOADING_PPOFILE = 'SET-LOADING-PPOFILE ';
const SET_PROFILE = 'SET-PROFILE';


let initialState = {
    profile: [],
    isLoadingProfile: false
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING_PPOFILE:
            return {
                ...state, isLoadingProfile: action.isLoadingProfile
            }
        case SET_PROFILE:
            return {
                ...state, profile: action.profile
            }
        default: return state
    }
}

export const setLoadingProfile = (isLoadingProfile) => ({ type: SET_LOADING_PPOFILE, isLoadingProfile })
export const setProfile = (profile) => ({ type: SET_PROFILE, profile })
export default profileReducer;
