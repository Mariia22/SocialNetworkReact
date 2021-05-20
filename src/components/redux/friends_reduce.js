const TOGGLE_FOLLOWING = 'TOGGLE-FOLLOWING';
const SET_FRIENDS = 'SET-FRIENDS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const CURRENT_PAGE = 'CURRENT-PAGE';

let initialState = {
    users: [],
    totalCount: 0,
    pageSize: 99,
    currentPage: 1
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
        case CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        default: return state
    }
}

export const toggleFollowActionCreator = (userId) => ({ type: TOGGLE_FOLLOWING, userId })
export const setFriendsActionCreator = (users) => ({ type: SET_FRIENDS, users })
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount })
export const setCurrentPage = (currentPage) => ({ type: CURRENT_PAGE, currentPage })
export default friendReducer;
