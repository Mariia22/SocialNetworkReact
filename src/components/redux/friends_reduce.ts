import { UserType } from './../../types/types';
import { userAPI } from "../API/api";

const TOGGLE_FOLLOWING = 'TOGGLE-FOLLOWING';
const SET_FRIENDS = 'SET-FRIENDS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const CURRENT_PAGE = 'CURRENT-PAGE';
const IS_LOADING = 'IS-LOADING';
const IS_FETCHING = 'IS-FETCHING';

let initialState = {
  users: [] as Array<UserType>,
  totalCount: 0,
  pageSize: 100,
  currentPage: 1,
  isLoading: false,
  isFetching: [] as Array<number>
}
type initialStateType = typeof initialState;
const friendReducer = (state = initialState, action: any): initialStateType => {
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

type ToggleFollowingActionType = {
  type: typeof TOGGLE_FOLLOWING
  userId: number
}
export const toggleFollowing = (userId: number): ToggleFollowingActionType => ({ type: TOGGLE_FOLLOWING, userId })

type SetFriendsActionType = {
  type: typeof SET_FRIENDS
  users: UserType
}
const setFriends = (users: UserType): SetFriendsActionType => ({ type: SET_FRIENDS, users })

type SetTotalCountActionType = {
  type: typeof SET_TOTAL_COUNT
  totalCount: number
}
const setTotalCount = (totalCount: number): SetTotalCountActionType => ({ type: SET_TOTAL_COUNT, totalCount })

type SetCurrentPageActionType = {
  type: typeof CURRENT_PAGE
  currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({ type: CURRENT_PAGE, currentPage })

type SetIsLoadingActionType = {
  type: typeof IS_LOADING
  isLoading: boolean
}
export const setIsLoading = (isLoading: boolean): SetIsLoadingActionType => ({ type: IS_LOADING, isLoading })

type SetIsFetchingActionType = {
  type: typeof IS_FETCHING
  isFetching: boolean
  userId: number
}
export const setIsFetching = (isFetching: boolean, userId: number): SetIsFetchingActionType => ({ type: IS_FETCHING, isFetching, userId })

export const getUsers = (currentPage = 1, pageSize = 99) => async (dispatch: any) => {
  const data = await userAPI.getUser(currentPage, pageSize)
  dispatch(setFriends(data.items));
  dispatch(setTotalCount(data.totalCount));
  dispatch(setIsLoading(false));
}
export const followUser = (userId: number) => async (dispatch: any) => {
  const data = await userAPI.follow(userId)
  if (data.resultCode === 0) {
    dispatch(toggleFollowing(userId));
    dispatch(setIsFetching(false, userId));
  }
}
export const unfollowUser = (userId: number) => async (dispatch: any) => {
  const data = await userAPI.unfollow(userId)
  if (data.resultCode === 0) {
    dispatch(toggleFollowing(userId));
    dispatch(setIsFetching(false, userId));
  }
}

export default friendReducer;
