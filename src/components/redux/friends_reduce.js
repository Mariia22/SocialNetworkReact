const TOGGLE_FOLLOWING = 'TOGGLE-FOLLOWING';
const SET_FRIENDS = 'SET-FRIENDS';

let initialState = {
    users: []
}
const friendReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOWING:
            return {
                ...state,
                users: state.users.map(
                    user => {
                        if (user.id === action.userId) {
                            user.follow = !user.follow;
                        }
                        return user;
                    })
            }
        case SET_FRIENDS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default: return state
    }
}

export const toggleFollowActionCreator = (userId) => ({ type: TOGGLE_FOLLOWING, userId })
export const setFriendsActionCreator = (users) => ({ type: SET_FRIENDS, users })
export default friendReducer;
