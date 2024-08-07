import api from "~/server/utils/api"
export default defineEventHandler(async event => {
  const response: Array<String> = await api(`/products/categories`)
  return response;
})
