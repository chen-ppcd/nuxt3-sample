import type { NitroFetchRequest, $Fetch } from "nitropack"

export const useUserRepo = <T>(fetchInstance: $Fetch<T, NitroFetchRequest> = api) => ({
  getRandomUser: () => {
    return useAsyncData<User>('getUsers', () => fetchInstance(`/api/users`))
  },
  getUserById: (id: number) => {
    return useAsyncData<User>('getUserById', () => fetchInstance(`/api/user/${id}`))
  }
})