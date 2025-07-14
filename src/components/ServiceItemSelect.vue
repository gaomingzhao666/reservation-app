<script setup lang="ts">
import type { DateRange } from 'reka-ui'
import { CalendarDate, DateFormatter, getLocalTimeZone } from '@internationalized/date'

import { Calendar as CalendarIcon } from 'lucide-vue-next'
import { type Ref, ref, watch } from 'vue'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { RangeCalendar } from '@/components/ui/range-calendar'

import { Card, CardHeader, CardFooter } from '@/components/ui/card'
import { reactive, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'
import { useOrderInfoStore } from '@/stores/orderInfo'

interface Props {
  data: {
    serviceTitle: string
    serviceDuration: string
    servicePrice: string
  }
}
const props = defineProps<Props>()

const value: Ref<boolean> = ref(false)

interface Styles {
  isRing: boolean
}
const styles = reactive<Styles>({
  isRing: false,
})

// temporarily remove outside click cancel logic
// const handleClickOutside = (event: MouseEvent) => {
//   if (!event.target || !(event.target as HTMLElement).closest('.card')) {
//     styles.isRing = false
//     value.value = false
//   }
// }
// onMounted(() => {
//   document.addEventListener('click', handleClickOutside)
// })
// onUnmounted(() => {
//   document.removeEventListener('click', handleClickOutside)
// })

// date picker logic
const df = new DateFormatter('en-US', {
  dateStyle: 'medium',
})
const dateValue = ref({
  start: new CalendarDate(2025, 1, 20),
  end: new CalendarDate(2025, 1, 20).add({ days: 20 }),
}) as Ref<DateRange>

const clickAction = () => {
  styles.isRing = !styles.isRing
  value.value = !value.value
}

const orderInfoStore = useOrderInfoStore()
const sendOrderInfo = () => {
  orderInfoStore.orderInfo.serviceItem = props.data.serviceTitle
  orderInfoStore.orderInfo.servicePrice = props.data.servicePrice
  orderInfoStore.orderInfo.serviceDuration = props.data.serviceDuration
  orderInfoStore.orderInfo.serviceDateRange.start = dateValue.value.start?.toString() ?? ''
  orderInfoStore.orderInfo.serviceDateRange.end = dateValue.value.end?.toString() ?? ''
}
watch([() => value.value, () => dateValue.value], () => {
  sendOrderInfo()
  console.log(value.value)
})
</script>

<template>
  <Card
    class="card"
    :class="cn('w-3xl p-5 transition-all hover:cursor-pointer hover:ring', styles.isRing && 'ring')"
    @click.prevent="clickAction()"
  >
    <CardHeader class="flex flex-col gap-y-2">
      <section class="flex items-center justify-start gap-x-4">
        <h3
          for="terms"
          class="leading-none font-semibold peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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
    </CardHeader>

    <!-- date picker -->
    <CardFooter>
      <Popover>
        <PopoverTrigger as-child>
          <Button
            variant="outline"
            :class="
              cn('w-[280px] justify-start text-left font-normal', !value && 'text-muted-foreground')
            "
          >
            <CalendarIcon class="mr-2 h-4 w-4" />
            <template v-if="dateValue.start">
              <template v-if="dateValue.end">
                {{ df.format(dateValue.start.toDate(getLocalTimeZone())) }} -
                {{ df.format(dateValue.end.toDate(getLocalTimeZone())) }}
              </template>

              <template v-else>
                {{ df.format(dateValue.start.toDate(getLocalTimeZone())) }}
              </template>
            </template>
            <template v-else> Pick a date </template>
          </Button>
        </PopoverTrigger>
        <PopoverContent class="w-auto p-0">
          <RangeCalendar
            v-model="dateValue"
            initial-focus
            :number-of-months="2"
            @update:start-value="(startDate) => (dateValue.start = startDate)"
          />
        </PopoverContent>
      </Popover>
    </CardFooter>
  </Card>
</template>
