import type { User } from './user'

export type LoginPayload = {
  email: string
  password: string
}

export type RegisterPayload = {
  email: string
  password: string
  name?: string
}

export type AuthResponse = {
  accessToken: string
  user: User
}
