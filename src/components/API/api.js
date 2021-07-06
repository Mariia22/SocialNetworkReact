import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { 'API-KEY': '60dd0327-9af6-4c5a-bb28-85f63102a11f' }

});

export const userAPI = {
    getUser(currentPage = 1, pageSize = 150) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => { return response.data })
    },
    follow(id) {
        return instance.post(`follow/${id}`).then(response => { return response.data })
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(response => { return response.data })
    }
}
export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', { email, password, rememberMe })
    },
    logout() {
        return instance.delete('auth/login')
    }
}
export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`)
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, { status })
    }
}
