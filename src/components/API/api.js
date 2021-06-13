import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { 'API-KEY': '9fa3e008-7b78-407e-8075-26fe409e0d96' }
});

export const userAPI = {
    getUser(currentPage = 1, pageSize = 150) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => { return response.data })
    }
}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`).then(response => { return response.data })
    }
}