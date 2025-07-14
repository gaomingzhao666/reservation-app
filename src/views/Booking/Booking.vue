<template>
  <section class="flex flex-col items-start justify-around md:flex-row">
    <main class="flex flex-col gap-y-4">
      <Stepper class="flex w-full items-start gap-2" :default-value="2">
        <StepperItem
          v-for="step in steps"
          :key="step.step"
          v-slot="{ state }"
          class="relative flex w-full flex-col items-center justify-center"
          :step="step.step"
        >
          <StepperIndicator>
            <component :is="step.icon" class="size-5" />
          </StepperIndicator>

          <StepperSeparator
            v-if="step.step !== steps[steps.length - 1].step"
            class="absolute top-5 right-[calc(-50%+10px)] left-[calc(50%+20px)] block h-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary"
          />

          <div class="mt-5 flex flex-col items-center text-center">
            <StepperTitle
              :class="[state === 'active' && 'text-primary']"
              class="text-sm font-semibold transition lg:text-base"
            >
              {{ step.title }}
            </StepperTitle>
            <StepperDescription
              :class="[state === 'active' && 'text-primary']"
              class="sr-only text-xs text-muted-foreground transition md:not-sr-only lg:text-sm"
            >
              {{ step.description }}
            </StepperDescription>
          </div>
        </StepperItem>
      </Stepper>

      <RouterView></RouterView>
    </main>

    <aside class="sticky top-24 w-full max-w-sm">
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
  </section>
</template>

<script lang="ts" setup>
import { onMounted, reactive, watchEffect, type Reactive } from 'vue'
import { useRoute } from 'vue-router'
import OrderInfoCard from '@/components/OrderInfoCard.vue'
import { Info, CheckCircle2, Truck } from 'lucide-vue-next'

import { db } from '@/lib/firebase'
import { collection, getDocs } from 'firebase/firestore'

import { Button } from '@/components/ui/button'
import {
  Stepper,
  StepperDescription,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperIndicator,
} from '@/components/ui/stepper'

import type { DocumentData } from 'firebase/firestore'

let hotelsData: Reactive<DocumentData[]> = reactive([])

const route = useRoute()

const init = async () => {
  const querySnapshot = await getDocs(collection(db, 'hotel'))
  // querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, ' => ', doc.data())
  // })
  // querySnapshot.forEach((doc) => {
  //   hotelsData.push(doc.data())
  //   console.log(doc.data())
  // })
  hotelsData = querySnapshot.docs.map((doc) => doc.data())

  console.log(hotelsData)
}

onMounted(() => {
  init()
})

watchEffect(async () => {
  const res = route.params.id
})

const steps = [
  {
    step: 1,
    title: 'Select Service and Date',
    description: 'Select the service you want to book',
    icon: Truck,
  },
  {
    step: 2,
    title: 'Input Necessary Information',
    description: 'A few details about you so we can take identification',
    icon: Info,
    state: 'active',
  },
  {
    step: 3,
    title: 'Confirm Overall Information',
    description: 'Review your order and confirm',
    icon: CheckCircle2,
  },
]
</script>
