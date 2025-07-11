import { reactive, type Reactive } from 'vue'
import { defineStore } from 'pinia'

export const useOrderInfoStore = defineStore('orderInfo', () => {
  const orderInfo: Reactive<OrderInfo> = reactive({
    // origin type OrderInfo
    serviceImageUrl: '',
    serviceProviderName: '',
    serviceTitle: '',
    serviceItem: '',
    serviceDuration: '',
    servicePrice: '',
    serviceDateRange: '',

    // extends from type User
    uid: '',
    email: '',
    username: '',
    avatar_url: '',
    birth_at: 'April 13, 2002 at 1:00:00 AM UTC+8',
    booked_hotels: [],
  })

  return { orderInfo }
})
