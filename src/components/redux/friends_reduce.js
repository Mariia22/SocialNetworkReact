const TOGGLE_FOLLOWING = 'TOGGLE-FOLLOWING';
const SET_FRIENDS = 'SET-FRIENDS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const CURRENT_PAGE = 'CURRENT-PAGE';
const IS_LOADING = 'IS-LOADING';
const IS_FETCHING = 'IS-FETCHING';

let initialState = {
    users: [],
    totalCount: 0,
    pageSize: 99,
    currentPage: 1,
    isLoading: false,
    isFetching: []
}
const friendReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOWING:
            return {
                ...state,
                users: state.users.map(
                    user => {
                        if (user.id === action.userId) {
                            user.followed = !user.followed;
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
        case IS_LOADING:
            return {
                ...state, isLoading: action.isLoading
            }
        case IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching ? [...state.isFetching, action.userId] : state.filter(userId => userId !== action.userId)
            }
        default: return state
    }
}

export const toggleFollowing = (userId) => ({ type: TOGGLE_FOLLOWING, userId })
export const setFriends = (users) => ({ type: SET_FRIENDS, users })
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount })
export const setCurrentPage = (currentPage) => ({ type: CURRENT_PAGE, currentPage })
export const setIsLoading = (isLoading) => ({ type: IS_LOADING, isLoading })
export const setIsFetching = (isFetching, userId) => ({ type: IS_FETCHING, isFetching, userId })
export default friendReducer;
