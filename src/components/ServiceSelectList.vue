<template>
  <ul class="flex w-fit flex-nowrap gap-x-4 rounded-xl border p-5">
    <li v-for="(item, index) in props.data.categories" :key="index">
      <Button
        :variant="item === selectedCategory ? 'secondary' : 'outline'"
        @click="selectedCategory = item"
      >
        {{ item }}
      </Button>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
interface Props {
  data: {
    categories: string[]
  }
}
const props = defineProps<Props>()

const selectedCategory = ref(props.data.categories[0])
</script>
