export type PostType = {
  id: number
  message: string
  like: number
}
export type ProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ContactType
  photos: PhotoType
}
export type PhotoType = {
  small: string | null
  large: string | null
}
export type ContactType = {
  github: string
  vk: string
  instagram: string
  facebook: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}
export type UserType = {
  id: number
  name: string
  status: string
  photos: PhotoType
  followed: boolean
}