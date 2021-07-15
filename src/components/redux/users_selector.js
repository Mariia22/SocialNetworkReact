import { createSelector } from "reselect";

const getUsers = (state) => {
    return state.users.users
}
export const getUsersSelector = createSelector((users, getUsers) => { return users.filter(user => user) })

export const totalCountSelector = (state) => {
    return state.users.totalCount
}

export const pageSizeSelector = (state) => {
    return state.users.pageSize
}

export const currentPageSelector = (state) => {
    return state.users.currentPage

}
export const isLoadingSelector = (state) => {
    return state.users.isLoading
}

export const isFetchingSelector = (state) => {
    return state.users.isFetching
}