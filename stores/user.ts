import { defineStore } from "pinia"

export const useUserStore = defineStore('userStore', {
  persist: true,
  state: () => ({
    userInfo: null as User | null,
  }),
  getters: {

  },

  actions: {
    setUserInfo(data: User | null) {
      this.userInfo = data
    }
  }

})
