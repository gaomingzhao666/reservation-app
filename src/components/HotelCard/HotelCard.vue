<template>
  <section class="flex flex-col items-center justify-center gap-y-5">
    <HotelShower />

    <HotelInfoCard :hotel="props.hotel" :status="{ useFor: 'info' }" />
  </section>
</template>

<script lang="ts" setup>
import HotelShower from '@/components/HotelCard/HotelShower.vue'
import HotelInfoCard from '@/components/HotelCard/HotelInfoCard.vue'

interface Props {
  hotel: {
    hotelId: string
    name: string
    reviewStars: number
    isOpening: boolean
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
