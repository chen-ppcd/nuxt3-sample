const auth: Ref<boolean> = useLocalStorage("auth", false)

export const useAuthInfo = () => auth.value

export const useAuthLogin = (data: LoginInfo) => {
  return useAsyncData('authLogin', async () => {
    const res = await api<User>(`users/${data.id}`)
    if (res.username === data.username && res.password === data.password) {
      useUserStore().setUserInfo(res)
      auth.value = true
    } else {
      useUserStore().setUserInfo(null)
      auth.value = false
    }
    return auth.value
  })
}

export const useAuthLogout = () => {
  return useAsyncData('authLogout', () => {
    auth.value = false
    useUserStore().setUserInfo(null)
    return Promise.resolve(true)
  })
}
