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
      <h3>Service Duration</h3>
      <p>{{ orderInfoStore.orderInfo.serviceDuration }}</p>
    </CardContent>

    <CardContent class="flex items-center justify-between">
      <h3>Service Date</h3>
      <p>
        {{ orderInfoStore.orderInfo.serviceDateRange.start }} -
        {{ orderInfoStore.orderInfo.serviceDateRange.end }}
      </p>
    </CardContent>

    <CardContent class="flex items-center justify-between">
      <h3>Customer Name</h3>
      <p>{{ orderInfoStore.orderInfo.username }}</p>
    </CardContent>

    <CardContent class="flex items-center justify-between">
      <h3>Email</h3>
      <p>{{ orderInfoStore.orderInfo.email }}</p>
    </CardContent>

    <!-- <CardContent class="flex items-center justify-between">
      <h3>Age</h3>
      <p>{{ orderInfoStore.orderInfo.birth_at }}</p>
      <p>{{ formattedBirthAtYear }}</p>
      <p>{{ timeAgo }}</p> -->
    <!-- </CardContent> -->

    <CardFooter>
      <Button>Continue</Button>
    </CardFooter>
  </Card>
</template>

<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { useOrderInfoStore } from '@/stores/orderInfo'
import { useTimeAgo } from '@vueuse/core'

const orderInfoStore = useOrderInfoStore()
const timeAgo = useTimeAgo()
import dayjs from 'dayjs'

// const formattedBirthAtYear = dayjs.utc(orderInfoStore.orderInfo.birth_at).format('YYYY/MM/DD')
// const formattedBirthAtMonth = dayjs(orderInfoStore.orderInfo.birth_at).format('MM')

// const age = dayjs()
//   .subtract(Number(formattedBirthAtYear), 'year')
//   .subtract(Number(formattedBirthAtMonth), 'month')
</script>
