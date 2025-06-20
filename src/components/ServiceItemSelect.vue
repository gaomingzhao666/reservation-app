<script setup lang="ts">
import type { DateRange } from 'reka-ui'
import { CalendarDate, DateFormatter, getLocalTimeZone } from '@internationalized/date'

import { Calendar as CalendarIcon } from 'lucide-vue-next'
import { type Ref, ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { RangeCalendar } from '@/components/ui/range-calendar'

import { Card, CardHeader, CardFooter } from '@/components/ui/card'
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

// date picker logic
const df = new DateFormatter('en-US', {
  dateStyle: 'medium',
})
const value = ref({
  start: new CalendarDate(2025, 1, 20),
  end: new CalendarDate(2025, 1, 20).add({ days: 20 }),
}) as Ref<DateRange>
</script>

<template>
  <Card
    class="card"
    :class="
      cn('p-5 w-3xl hover:cursor-pointer hover:ring transition-all', changeStyles.isRing && 'ring')
    "
    @click.stop="changeStyles.isRing = !changeStyles.isRing"
  >
    <CardHeader class="flex flex-col gap-y-2">
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
            <template v-if="value.start">
              <template v-if="value.end">
                {{ df.format(value.start.toDate(getLocalTimeZone())) }} -
                {{ df.format(value.end.toDate(getLocalTimeZone())) }}
              </template>

              <template v-else>
                {{ df.format(value.start.toDate(getLocalTimeZone())) }}
              </template>
            </template>
            <template v-else> Pick a date </template>
          </Button>
        </PopoverTrigger>
        <PopoverContent class="w-auto p-0">
          <RangeCalendar
            v-model="value"
            initial-focus
            :number-of-months="2"
            @update:start-value="(startDate) => (value.start = startDate)"
          />
        </PopoverContent>
      </Popover>
    </CardFooter>
  </Card>
</template>
