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
import { $fetch } from "ofetch"
const api = $fetch.create({
  baseURL: "https://fakestoreapi.com",
  onRequest() {
    console.log("onRequest, client:", import.meta.client)
  },
  onResponse() {
    console.log("onResponse, client:", import.meta.client)
  },
})

export default api