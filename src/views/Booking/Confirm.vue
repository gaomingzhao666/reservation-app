<template>
  <BookingStepper :steps="steps" :currentStepValue="3" />

  <h2 class="mt-16 w-3xl text-center text-3xl">
    The process is not finished, please check all of the information on right aside of card, and
    click the submit button if everything's good
  </h2>
</template>

<script setup lang="ts">
import { Info, CheckCircle2, Truck } from 'lucide-vue-next'
import BookingStepper from '@/components/BookingStepper.vue'

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
