<template>
  <main>
    <HotelCard
      v-for="(item, index) in hotels"
      :key="index"
      :hotel="{
        hotelId: item.hotel_id,
        name: item.hotel_name,
        reviewStars: item.review_stars,
        isOpening:
          isNowBetweenDates(item.opening_date, item.closing_date) &&
          isNowBetweenTimes(item.open_time, item.close_time),
        openTime: item.open_time,
        closeTime: item.close_time,
        address: item.address,
        openingDate: item.opening_date,
        closingDate: item.closing_date,
        paymentMethods: item.payment_methods,
        price: item.price,
      }"
      :status:="{ useFor: 'info' }"
      class="my-10"
    />
  </main>
</template>

<script lang="ts" setup>
import HotelCard from '@/components/HotelCard/HotelCard.vue'
import { onMounted, reactive, type Reactive } from 'vue'
import { db } from '@/lib/firebase'
import { collection, getDocs, type DocumentData } from 'firebase/firestore'

import { isNowBetweenDates, isNowBetweenTimes } from '@/lib/isBetween'

let hotels: Reactive<DocumentData[]> = reactive([])

const init = async () => {
  const querySnapshot = await getDocs(collection(db, 'hotel'))
  hotels = await querySnapshot.docs.map((doc) => doc.data())
}
onMounted(() => {
  init()
})
</script>
