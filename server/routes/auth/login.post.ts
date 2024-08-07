import { User } from "~/types/user"
import { Session } from "~/types/session"
import api from "~/server/utils/api"
// define type for user login
type RequestBody = {
  username: string
  password: string
  id: number
}

type Response = {
  status: boolean
  message: string
  data: Object | Array<any>
}

type Token = {
  token: string
}

type SessionAuth = {
  name: {
    firstname: string
    lastname: string
  },
  id: number
  token: string
}

export default defineEventHandler(async event => {

  // parse body
  const body: RequestBody = await readBody(event)

  try {
    // fetching
    const response: Token = await api('/auth/login', {
      method: 'POST',
      body,
    })

    // get spesific user using ID
    const user: User = await api(`/users/${body.id}`, {
      method: 'GET',
    })

    // access session
    const session: Session = event.context.session

    // save user credential into session
    session.auth = {
      name: {
        firstname: user.name.firstname,
        lastname: user.name.lastname
      },
      id: user.id,
      token: response.token
    } as SessionAuth

    // return to client
    return {
      status: true,
      message: 'Login success',
      data: {
        token: response.token,
        ...user
      }
    } as Response

  } catch (err: any) {
    // failed authentication
    return {
      status: false,
      message: err?.data,
      data: {}
    } as Response
  }

})
