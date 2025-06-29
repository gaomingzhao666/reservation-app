<template>
  <section class="flex flex-col justify-center items-center gap-y-5">
    <HotelShower />

    <HotelInfoCard :data="props.data" />
  </section>
</template>

<script lang="ts" setup>
import HotelShower from '@/components/HotelCard/HotelShower.vue'
import HotelInfoCard from '@/components/HotelCard/HotelInfoCard.vue'

interface Props {
  data: {
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

<style></style>
