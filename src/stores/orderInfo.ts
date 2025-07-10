import { reactive, type Reactive } from 'vue'
import { defineStore } from 'pinia'

export const useOrderInfoStore = defineStore('orderInfo', () => {
  const orderInfo: Reactive<OrderInfo> = reactive({
    // origin type OrderInfo
    serviceImageUrl: '',
    serviceProviderName: '',
    serviceTitle: '',
    serviceDuration: '',
    servicePrice: '',
    serviceDateRange: '',

    // extends from type User
    uid: '',
    email: '',
    username: '',
    avatar_url: '',
    birth_at: '',
    booked_hotels: [],
  })

  return { orderInfo }
})
