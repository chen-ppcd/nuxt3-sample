import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'

export default defineNuxtPlugin((nuxtApp) => {

  // init notyf
  const notyf = new Notyf()

  // regiter as global method
  return {
    provide: {
      notyfError: (msg: string) => notyf.error(msg),
      notyfSuccess: (msg: string) => notyf.success(msg),
    }
  }
})
