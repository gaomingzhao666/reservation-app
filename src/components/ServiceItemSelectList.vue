<template>
  <ul class="border rounded-xl p-5 space-y-4">
    <li v-for="(item, index) in fakeData" :key="index">
      <ServiceItemSelect :data="item" />
    </li>
  </ul>
</template>

<script lang="ts" setup>
import ServiceItemSelect from '@/components/ServiceItemSelect.vue'

const fakeData = [
  {
    serviceTitle: 'Room Service',
    serviceDuration: '30 minutes',
    servicePrice: '$20.00',
  },
  {
    serviceTitle: 'Laundry Service',
    serviceDuration: '1 hour',
    servicePrice: '$15.00',
  },
  {
    serviceTitle: 'Spa Treatment',
    serviceDuration: '2 hours',
    servicePrice: '$100.00',
  },
]
</script>

<style></style>
