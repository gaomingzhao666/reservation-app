<template>
  <main>
    <HotelCard v-for="(item, index) in sample" :key="index" :data="item" class="my-10" />
  </main>
</template>

<script lang="ts" setup>
import HotelCard from '@/components/HotelCard/HotelCard.vue'
import { reactive } from 'vue'

const sample = reactive([
  {
    name: 'Bistro Bliss',
    reviewStars: 4.5,
    isOpening: true,
    openTime: '11:00 AM',
    closeTime: '10:00 PM',
    address: '123 Main St, Anytown, USA',
    openingDate: '2020-01-01',
    closingDate: '2022-12-31',
    paymentMethods: ['Cash', 'Credit', 'Debit'],
    price: 25.99,
  },
  {
    name: 'Tasty Tacos',
    reviewStars: 4.2,
    isOpening: false,
    openTime: '12:00 PM',
    closeTime: '9:00 PM',
    address: '456 Elm St, Othertown, USA',
    openingDate: '2019-06-01',
    closingDate: '2021-12-31',
    paymentMethods: ['Cash', 'Credit'],
    price: 18.99,
  },
  {
    name: 'Sushi Haven',
    reviewStars: 4.8,
    isOpening: true,
    openTime: '5:00 PM',
    closeTime: '11:00 PM',
    address: '789 Oak St, Thistown, USA',
    openingDate: '2021-03-01',
    closingDate: '2023-12-31',
    paymentMethods: ['Cash', 'Credit', 'Debit', 'Apple Pay'],
    price: 32.99,
  },
])
</script>
