<template>
  <Card class="w-full p-5 md:w-5xl">
    <CardHeader>
      <section class="flex items-center justify-between">
        <CardTitle>{{ props.data.hotelName }}</CardTitle>

        <section class="flex items-center justify-start gap-x-4">
          <RouterLink to="/review">
            <Button size="lg" variant="secondary">Review</Button>
          </RouterLink>

          <RouterLink :to="`/booking/${props.data.hotelName}`">
            <Button size="lg">Book Now</Button>
          </RouterLink>
        </section>
      </section>

      <section class="flex items-center justify-start gap-x-2 text-sm">
        <section class="flex items-center justify-start gap-x-2">
          <span class="font-semibold">5.0</span>
          <section class="flex items-center justify-start">
            <Star :size="20" color="#fbbf24" fill="#fbbf24" />
            <Star />
            <Star />
            <Star />
            <Star />
          </section>
          <span>(188)</span>
        </section>

        <section class="flex items-center justify-start gap-x-2">
          <p class="text-sm text-[#fbbf24]">Closing</p>
          <p>opens soon at 00:00</p>
        </section>
      </section>
    </CardHeader>

    <CardContent class="flex flex-wrap items-center justify-between gap-y-2 text-sm">
      <section class="flex items-center justify-start gap-x-2">
        <MapPin />
        <p>{{ props.data.address }}</p>
      </section>

      <section class="flex items-center justify-start gap-x-2">
        <Clock />

        <p>{{ props.data.openingDate }} - {{ props.data.closingDate }}</p>

        <section>
          <h5>Closed</h5>

          <p>{{ props.data.openTime }} - {{ props.data.closeTime }}</p>
        </section>
      </section>

      <section class="flex items-center justify-start gap-x-2">
        <CreditCard />
        <section class="flex flex-wrap items-center justify-start gap-x-2">
          <p v-for="(item, index) in props.data.paymentMethods" :key="index">{{ item }},</p>
        </section>
      </section>
    </CardContent>
  </Card>
</template>

<script lang="ts" setup>
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star, MapPin, Clock, CreditCard } from 'lucide-vue-next'

interface Props {
  data: {
    hotelName: string
    reviewStars: number
    openTime: string
    closeTime: string
    address: string
    openingDate: string
    closingDate: string
    paymentMethods: string[]
    price: number
  }
}

const props = defineProps<Props>()
</script>
