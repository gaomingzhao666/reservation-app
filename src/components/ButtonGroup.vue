<template>
  <ul class="flex flex-nowrap gap-x-4 border rounded-xl p-5 w-fit">
    <li v-for="(item, index) in props.data.categories" :key="index">
      <Button :variant="item === props.data.selectedCategory ? 'secondary' : 'outline'">
        {{ item }}
      </Button>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import Button from '@/components/ui/button/Button.vue'
interface Props {
  data: {
    categories: string[]
    selectedCategory: string
  }
}
const props = defineProps<Props>()
</script>

<style></style>
