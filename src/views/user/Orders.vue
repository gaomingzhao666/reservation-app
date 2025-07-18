<template>
  <main>
    <HotelCard
      v-for="(item, index) in orders"
      :key="index"
      :hotel="item.hotel"
      :status="{ useFor: 'order' }"
    />
  </main>
</template>

<script lang="ts" setup>
import HotelCard from '@/components/HotelCard/HotelCard.vue'

import { db } from '@/lib/firebase'
import { useRouter } from 'vue-router'
import { getAuth } from 'firebase/auth'
import {
  collection,
  doc,
  DocumentReference,
  getDoc,
  query,
  where,
  type DocumentData,
} from 'firebase/firestore'
import { onMounted, reactive, type Reactive } from 'vue'
import { toast } from 'vue-sonner'

interface ServiceItem {
  dateRange: {
    start: string
    end: string
  }
  duration: string
  itemTitle: string
  price: string
}
interface Orders {
  hotel: DocumentReference<unknown, DocumentData>
  serviceTitle: string
  serviceItem: ServiceItem[]
}
let orders: Reactive<Orders[]> = reactive([])

const auth = getAuth()
const user = auth.currentUser
const router = useRouter()

const init = async () => {
  if (user) {
    const userRef = doc(db, 'user', user.uid.toString())
    const userSnap = await getDoc(userRef)

    if (userSnap.exists()) {
      orders = userSnap.data().booked_hotels
      console.log((await getDoc(orders[0].hotel)).data())

      orders.forEach(async (item) => {
        const hotelSnap = await getDoc(item.hotel)
        // item.hotel = hotelSnap.data()
        // console.log(hotel)
      })

      // orders.hotel = bookedHotels
    } else console.error('User document does not exist.')
  } else {
    router.push('/login')
    toast.error('User not authenticated. Please log in to view your orders.')
  }
}

onMounted(() => {
  init()
})
</script>
