
export const useAuthLogin = (data: LoginInfo) => {
  return useAsyncData('authLogin', () => api('/auth/login', { method: 'POST', body: data }))
}

export const useAuthLogout = () => {
  return useAsyncData('authLogout', () => api('/auth/logout', { method: 'PUT' }))
}
