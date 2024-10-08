import { defineStore } from "pinia"

export const useProductStore = defineStore('productStore', {
  persist: true,
  state: () => ({
    categories:[] as string[],
    products: [] as Product[],
    product: null as Product | null,
    pending: false,
  }),
  getters: {

  },

  actions: {
    async getAllCategories() {
      const categories = await api<string[]>('/api/products/category')
      this.categories = categories
    },
    async getProducts(category?: string) {
      this.pending = true
      const products = await api<Product[]>(category ? '/api/products/category/' + category : '/api/products')
      this.products = products
      this.pending = false
    },
    async getProductById(id: string) {
      try {
        const data = await api<Product>(`https://fakestoreapi.com/products/${id}`)
        return this.product = data
      } catch {
        throw new Error('Product not found, id: ' + id)
      }
    }
  }

})
