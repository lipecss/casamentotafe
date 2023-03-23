export default function () {
  const { isAuthenticated } = useAuth()
  
  if (isAuthenticated) {
    return navigateTo('/dashboard')
  }
}
