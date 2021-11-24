import axios, { AxiosInstance } from 'axios'
import { ProfileType } from './../../types/types'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { 'API-KEY': '60dd0327-9af6-4c5a-bb28-85f63102a11f' }
});

export const userAPI = {
  getUser(currentPage = 1, pageSize = 150) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => { return response.data })
  },
  follow(id: number) {
    return instance.post(`follow/${id}`).then(response => { return response.data })
  },
  unfollow(id: number) {
    return instance.delete(`follow/${id}`).then(response => { return response.data })
  }
}

type GetAuthType = {
  data: { id: number, email: string, login: string }
  resultCode: ResultCodeEnum
  messages: Array<string>
}
type LoginType = {
  data: { userId: number }
  resultCode: ResultCodeEnum | ResultCodeCaptchaEnum
  messages: Array<string>
}
export enum ResultCodeEnum {
  Success = 0,
  Error = 1
}
export enum ResultCodeCaptchaEnum {
  CaptchaIsRequired = 10
}
export const authAPI = {
  getAuth() {
    return instance.get<GetAuthType>(`auth/me`).then(res => res.data)
  },
  login(email: string, password: string, rememberMe = false, captcha: null | string) {
    return instance.post<LoginType>('auth/login', { email, password, rememberMe, captcha }).then(res => res.data)
  },
  logout() {
    return instance.delete('auth/login')
  }
}

export const profileAPI = {
  getProfile(id: number) {
    return instance.get(`profile/${id}`);
  },
  getStatus(id: number) {
    return instance.get(`profile/status/${id}`);
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, { status: status })
  },
  savePhoto(photoFile: any) {
    const formData = new FormData();
    formData.append('image', photoFile);
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  saveProfile(profile: ProfileType) {
    return instance.put(`profile`, profile);
  }
}

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  }
}

