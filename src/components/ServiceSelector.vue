<template>
  <section>
    <h1>Select Service</h1>

    <ButtonGroup
      :data="{
        categories: ['Room', 'Room', 'Room', 'Room', 'Room', 'selectedRoom'],
        selectedCategory: 'selectedRoom',
      }"
    />
  </section>
</template>

<script lang="ts" setup>
import ButtonGroup from '@/components/ButtonGroup.vue'
</script>

<style></style>
