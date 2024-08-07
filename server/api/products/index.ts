import { Products } from "~/types/product"
import api from "~/server/utils/api"

export default defineEventHandler(async event => {

  // fetching all products
  const response: Products = await api('/products', {
    responseType: 'json'
  })

  // return to client
  return response
})
