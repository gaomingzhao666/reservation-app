<template>
  <ul class="flex flex-nowrap gap-x-4 border rounded-xl p-5 w-fit">
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
import Button from '@/components/ui/button/Button.vue'
interface Props {
  data: {
    categories: string[]
  }
}
const props = defineProps<Props>()

const selectedCategory = ref(props.data.categories[0])
</script>

<style></style>
