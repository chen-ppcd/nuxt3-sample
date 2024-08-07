import api from "~/utils/api"

export default defineNuxtPlugin({
  name: "api",
  parallel: true,
  setup: () => ({ provide: { api }})
})