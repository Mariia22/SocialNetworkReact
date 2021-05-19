const TOGGLE_FOLLOWING = 'TOGGLE-FOLLOWING';
const SET_FRIENDS = 'SET-FRIENDS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

let initialState = {
    users: [],
    totalCount: 0,
    pageSize: 500,
    currentPage: 5
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
                ...state, users: [...action.users]
            }
        case SET_TOTAL_COUNT:
            return {
                ...state, totalCount: action.totalCount
            }
        default: return state
    }
}

export const toggleFollowActionCreator = (userId) => ({ type: TOGGLE_FOLLOWING, userId })
export const setFriendsActionCreator = (users) => ({ type: SET_FRIENDS, users })
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount })
export default friendReducer;
