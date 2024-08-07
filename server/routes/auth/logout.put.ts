import { Session } from "~/types/session"

export default defineEventHandler(event => {

  // get session
  const session: Session = event.context.session

  // remove all authenticated session
  session.auth = null

  return true
})
