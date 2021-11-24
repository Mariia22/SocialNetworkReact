import { createSelector } from "reselect";
import { AppStateType } from "./reduxStore";

const getUsers = (state: AppStateType) => {
  return state.users.users
}
export const getUsersSelector = createSelector(getUsers,
  (users) => {
    return users.filter(user => true);
  })

export const totalCountSelector = (state: AppStateType) => {
  return state.users.totalCount
}

export const pageSizeSelector = (state: AppStateType) => {
  return state.users.pageSize
}

export const currentPageSelector = (state: AppStateType) => {
  return state.users.currentPage

}
export const isLoadingSelector = (state: AppStateType) => {
  return state.users.isLoading
}

export const isFetchingSelector = (state: AppStateType) => {
  return state.users.isFetching
}