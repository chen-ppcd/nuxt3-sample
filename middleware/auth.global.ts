export default defineNuxtRouteMiddleware(async (to, from) => {
  // disabled in spa 
  const auth = useAuthInfo()
  if (to.name !== 'login' && !auth) {
    return navigateTo('/login')
  }
})
