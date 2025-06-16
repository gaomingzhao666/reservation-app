<template>
  <section>
    <ButtonGroup
      :data="{
        categories: ['Room', 'Room', 'Room', 'Room', 'Room', 'selectedRoom'],
        selectedCategory: 'selectedRoom',
      }"
    />
  </section>
</template>

<script lang="ts" setup>
import ButtonGroup from '@/components/ServiceSelectList.vue'
</script>

<style></style>
