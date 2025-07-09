import { reactive, type Reactive } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  let user: Reactive<User> = reactive({
    uid: '',
    email: '',
    username: '',
    avatar_url: '',
    birth_at: '',
  })

  const updateUser = (arguUser: User) => {
    user = arguUser
    return user
  }

  return { user, updateUser }
})
