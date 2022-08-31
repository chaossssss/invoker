import router from '../router'

export function logout() {
  window.sessionStorage.clear()
  window.localStorage.clear()
  router.replace({ path: "/login" })
}

引用录用配置文件