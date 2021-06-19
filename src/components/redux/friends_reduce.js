import { userAPI } from "../API/api";

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
                ...state, isFetching: action.isFetching ? [...state.isFetching, action.userId] : state.isFetching.filter(userId => userId !== action.userId)
            }
        default: return state
    }
}

export const toggleFollowing = (userId) => ({ type: TOGGLE_FOLLOWING, userId })
const setFriends = (users) => ({ type: SET_FRIENDS, users })
const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount })
export const setCurrentPage = (currentPage) => ({ type: CURRENT_PAGE, currentPage })
export const setIsLoading = (isLoading) => ({ type: IS_LOADING, isLoading })
export const setIsFetching = (isFetching, userId) => ({ type: IS_FETCHING, isFetching, userId })
export const getUsers = (currentPage = 1, pageSize = 99) => (dispatch) => {
    userAPI.getUser(currentPage, pageSize).then(data => {
        dispatch(setFriends(data.items));
        dispatch(setTotalCount(data.totalCount));
        dispatch(setIsLoading(false));
    })
}
export const followUser = (userId) => (dispatch) => {
    userAPI.follow(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(toggleFollowing(userId));
            dispatch(setIsFetching(false, userId));
        }
    })
}
export const unfollowUser = (userId) => (dispatch) => {
    userAPI.unfollow(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(toggleFollowing(userId));
            dispatch(setIsFetching(false, userId));
        }
    });

}
export default friendReducer;
