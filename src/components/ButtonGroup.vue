<template>
  <ul>
    <li v-for="(item, index) in props.data.categories" :key="index">
      <Button :variant="item === props.data.selectedCategory ? 'secondary' : 'outline'">
        {{ item }}
      </Button>
    </li>
  </ul>
</template>

<script lang="ts" setup>
interface Props {
  data: {
    categories: string[]
    selectedCategory: string
  }
}
const props = defineProps<Props>()
</script>

<style></style>
