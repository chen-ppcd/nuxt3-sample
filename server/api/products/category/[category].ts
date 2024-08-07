import { Products } from "~/types/product"
import api from "~/server/utils/api"
export default defineEventHandler(async event => {

  // get param
  const category = getRouterParam(event, 'category')

  // fetching products by category
  const response: Products = await api(`/products/category/${category}`)

  // return to client
  return response
})
