// import axios from "axios"

// const api = axios.create({
//   baseURL: "https://fakestoreapi.com",
//   timeout: 5000,
//   proxy: {
//     host:"internalproxy.cmn-card.corp",
//     port: 15080
//   }
// })

// api.interceptors.response.use(null, error => console.log("axios error", error))

import _api from "~/utils/api"
import { ProxyAgent } from 'undici'

const dispatcher = new ProxyAgent("http://internalproxy.cmn-card.corp:15080")
const api = _api.create({
  baseURL: "https://fakestoreapi.com",
  // @ts-expect-error
  dispatcher
})

export default api