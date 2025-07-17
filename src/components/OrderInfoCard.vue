<template>
  <Card>
    <CardHeader>
      <h2>Order Information</h2>

      <section>
        <h3>{{ orderInfoStore.orderInfo.serviceTitle }}</h3>

        <h3>{{ orderInfoStore.orderInfo.serviceProviderName }}</h3>
      </section>
    </CardHeader>

    <CardContent class="flex items-center justify-between">
      <h3>{{ orderInfoStore.orderInfo.serviceItem }}</h3>
      <p>{{ orderInfoStore.orderInfo.servicePrice }}</p>
    </CardContent>

    <CardContent class="flex items-center justify-between">
      <h3>Duration</h3>
      <p>{{ orderInfoStore.orderInfo.serviceDuration }}</p>
    </CardContent>

    <CardContent class="flex items-center justify-between">
      <h3>Date</h3>
      <p>
        {{ orderInfoStore.orderInfo.serviceDateRange.start }} -
        {{ orderInfoStore.orderInfo.serviceDateRange.end }}
      </p>
    </CardContent>

    <CardContent class="flex items-center justify-between">
      <h3>Name</h3>
      <p>{{ orderInfoStore.orderInfo.username }}</p>
    </CardContent>

    <CardContent class="flex items-center justify-between">
      <h3>Email</h3>
      <p>{{ orderInfoStore.orderInfo.email }}</p>
    </CardContent>

    <CardContent class="flex items-center justify-between">
      <h3>Age</h3>
      <p>{{ orderInfoStore.orderInfo.age }}</p>
    </CardContent>

    <!-- <CardContent class="flex items-center justify-between">
      <h3>Age</h3>
      <p>{{ orderInfoStore.orderInfo.birth_at }}</p>
      <p>{{ formattedBirthAtYear }}</p>
      <p>{{ timeAgo }}</p> -->
    <!-- </CardContent> -->

    <CardFooter>
      <Button
        @click="
          route.path === `/booking/${route.params.id}` &&
          router.push(`/booking/${route.params.id}/personal-info`)
        "
        v-if="route.path === `/booking/${route.params.id}`"
        >Continue</Button
      >
      <Button
        @click="
          route.path === `/booking/${route.params.id}/personal-info` &&
          router.push(`/booking/${route.params.id}/confirm`)
        "
        v-if="route.path === `/booking/${route.params.id}/personal-info`"
        >Continue</Button
      >
      <Button v-if="route.path === `/booking/${route.params.id}/confirm`" @click="submitOrder()"
        >Submit</Button
      >
    </CardFooter>
  </Card>
</template>

<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { useOrderInfoStore } from '@/stores/orderInfo'
import { useRoute, useRouter } from 'vue-router'

import { db } from '@/lib/firebase'
import { doc, runTransaction, updateDoc, arrayUnion } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { toast } from 'vue-sonner'

const route = useRoute()
console.log(route.params.id)

const router = useRouter()
const orderInfoStore = useOrderInfoStore()

const auth = getAuth()
const user = auth.currentUser
console.log('route path: ' + route.path)
console.log(`/booking/${route.params.id}/personal-info`)

const submitOrder = async () => {
  if (user) {
    // const hotelRef = doc(db, 'hotel', route.params.id.toString())
    // const userDocRef = doc(db, 'user', user.uid.toString())

    //     const bookedHotels = await runTransaction(db, async (transaction) => {
    //       const userDoc = await transaction.get(userDocRef)

    //       if (!userDoc.exists()) toast.error('User does not exist.')

    //       transaction.update(userDocRef, {
    //         booked_hotels: {
    //           hotel: hotelRef,
    //           service_title: orderInfoStore.orderInfo.serviceTitle,
    //           service_items: {
    //             item_title: orderInfoStore.orderInfo.serviceItem,
    //             duration: orderInfoStore.orderInfo.serviceDuration,
    //             price: orderInfoStore.orderInfo.servicePrice,
    //             date_range: {
    //               start: orderInfoStore.orderInfo.serviceDateRange.start,
    //               end: orderInfoStore.orderInfo.serviceDateRange.end,
    //             },
    //           },
    //         },
    //       })
    //     })
    //   }
    // }

    const hotelRef = doc(db, 'hotel', route.params.id.toString())
    // const docSnap = await getDoc(docRef)

    const userRef = doc(db, 'user', user.uid.toString())
    await updateDoc(userRef, {
      booked_hotels: arrayUnion({
        hotel: hotelRef,
        service_title: orderInfoStore.orderInfo.serviceTitle,
        service_items: {
          item_title: orderInfoStore.orderInfo.serviceItem,
          duration: orderInfoStore.orderInfo.serviceDuration,
          price: orderInfoStore.orderInfo.servicePrice,
          date_range: {
            start: orderInfoStore.orderInfo.serviceDateRange.start,
            end: orderInfoStore.orderInfo.serviceDateRange.end,
          },
        },
      }),
    })
      .then(() => {
        router.push('/order')
        toast.success('Order submitted successfully.')
      })
      .catch(() => {
        toast.error('Failed to submit order. Please try again later.')
      })
  } else {
    router.push('/login')
    toast.error('You must be logged in to submit an order.')
  }
}

// const formattedBirthAtYear = dayjs.utc(orderInfoStore.orderInfo.birth_at).format('YYYY/MM/DD')
// const formattedBirthAtMonth = dayjs(orderInfoStore.orderInfo.birth_at).format('MM')

// const age = dayjs()
//   .subtract(Number(formattedBirthAtYear), 'year')
//   .subtract(Number(formattedBirthAtMonth), 'month')
</script>
