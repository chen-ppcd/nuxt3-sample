import { User } from "~/types/user"
import api from "~/server/utils/api"
export default defineEventHandler(async () => {

  const users: User[] = await api('/users')
  // create random index
  const index: number = Math.floor(Math.random() * (users.length - 1))

  // get and return user random
  const user: User = {
    id: users[index].id,
    email: users[index].email,
    password: users[index].password,
    username: users[index].username,
    name: users[index].name,
  }

  return user ?? null
})
