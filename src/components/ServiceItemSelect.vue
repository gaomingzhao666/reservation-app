<script setup lang="ts">
import { Card } from '@/components/ui/card'
import { reactive, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  data: {
    serviceTitle: string
    serviceDuration: string
    servicePrice: string
  }
}
const props = defineProps<Props>()

interface ChangeStyles {
  isRing: boolean
}
const changeStyles = reactive<ChangeStyles>({
  isRing: false,
})

const handleClickOutside = (event: MouseEvent) => {
  if (!event.target || !(event.target as HTMLElement).closest('.card')) {
    changeStyles.isRing = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <Card
    class="card"
    :class="
      cn('p-5 w-3xl hover:cursor-pointer hover:ring transition-all', changeStyles.isRing && 'ring')
    "
    @click.stop="changeStyles.isRing = !changeStyles.isRing"
  >
    <section class="flex items-center justify-start gap-x-4">
      <h3
        for="terms"
        class="font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {{ props.data.serviceTitle }}
      </h3>
      <p class="text-neutral-600 dark:text-neutral-400">
        {{ props.data.servicePrice }}
      </p>
    </section>

    <p class="text-sm text-neutral-600 dark:text-neutral-400">
      {{ props.data.serviceDuration }}
    </p>
  </Card>
</template>
