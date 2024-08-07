import { Session } from "~/types/session"
import { Cart } from "~/types/cart"
import api from "~/server/utils/api"
export default defineEventHandler(async event => {

  // get session
  const session: Session = event.context.session

  // get user id
  const userId = session?.auth?.id

  // fetch cart by user id
  const response: Cart = await api(`/carts/${userId}`)

  return response
})
