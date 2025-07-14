<template>
  <section>
    <h2 class="text-xl font-semibold">Select Service</h2>

    <ButtonGroup
      :data="{
        categories: ['Room', 'selectedRoom'],
      }"
    />
  </section>
</template>

<script lang="ts" setup>
import ButtonGroup from '@/components/ServiceSelectList.vue'
</script>
