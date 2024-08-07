

type UserProfile = {
  firstname: string
  lastname: string
}

export type User = {
  id: number
  email: string
  password: string
  username: string
  name: UserProfile
}

export type LoginInfo = Pick<User, "id" | "password" | "username">