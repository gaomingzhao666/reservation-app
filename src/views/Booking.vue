<template>
  <div>
    <h2>Select Service</h2>

    <main class="flex flex-col md:flex-row justify-around items-center">
      <section class="flex flex-col gap-y-4">
        <ServiceSelector />
        <ServiceItemSelectList />
      </section>

      <aside class="sticky top-0 right-0 w-full max-w-sm">
        <OrderInfoCard
          :data="{
            serviceImageUrl: 'https://picsum.photos/200',
            serviceProviderName: 'John Doe',
            serviceTitle: 'Haircut',
            serviceDuration: '1 hour',
            servicePrice: '$20.00',
            serviceDateRange: '2024-01-01 - 2024-01-01',
          }"
        />
      </aside>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'

import ServiceSelector from '@/components/ServiceSelector.vue'
import ServiceItemSelectList from '@/components/ServiceItemSelectList.vue'
import OrderInfoCard from '@/components/OrderInfoCard.vue'
const route = useRoute()

watchEffect(async () => {
  const res = route.params.id
})
</script>

<style></style>
