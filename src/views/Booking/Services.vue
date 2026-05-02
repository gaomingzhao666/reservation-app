<template>
  <BookingStepper :steps="steps" :currentStepValue="1" />
  <ServiceSelector />
  <ServiceItemSelectList />
</template>

<script lang="ts" setup>
import BookingStepper from '@/components/BookingStepper.vue'
import ServiceSelector from '@/components/ServiceSelector.vue'
import ServiceItemSelectList from '@/components/ServiceItemSelectList.vue'

import { Info, CheckCircle2, Truck } from 'lucide-vue-next'

const steps = [
  {
    value: 1,
    title: 'Select Service and Date',
    description: 'Select the service you want to book',
    icon: Truck,
  },
  {
    value: 2,
    title: 'Input Necessary Information',
    description: 'A few details about you so we can take identification',
    icon: Info,
    state: 'active',
  },
  {
    value: 3,
    title: 'Confirm Overall Information',
    description: 'Review your order and confirm',
    icon: CheckCircle2,
  },
]
</script>
