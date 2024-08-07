import type { NitroFetchRequest, $Fetch } from "nitropack"

export const useUserRepo = <T>(fetchInstance: $Fetch<T, NitroFetchRequest> = api) => ({
  getRandomUser: () => {
    return useAsyncData<User>('getUsers', () => fetchInstance(`/users/2`))
  },
  getUserById: (id: number) => {
    return useAsyncData<User>('getUserById', () => fetchInstance(`/users/${id}`))
  }
})