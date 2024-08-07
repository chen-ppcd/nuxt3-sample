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
  onRequest() {
    console.log("onRequest")
  },
  onResponse() {
    console.log("onResponse")
  },
})

export default api