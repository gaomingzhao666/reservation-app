import { reactive, type Reactive } from 'vue'
import { defineStore } from 'pinia'

export const useOrderInfoStore = defineStore('orderInfo', () => {
  const orderInfo: Reactive<OrderInfo> = reactive({
    hotelId: '',
    // origin type OrderInfo
    serviceImageUrl: '',
    serviceProviderName: '',
    serviceTitle: '',
    serviceItem: '',
    serviceDuration: '',
    servicePrice: '',
    serviceDateRange: {
      start: '',
      end: '',
    },

    // extends from type User
    uid: '',
    email: '',
    username: '',
    avatar_url: '',
    age: '',
    booked_hotels: [],
  })

  return { orderInfo }
})
