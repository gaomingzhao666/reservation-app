<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { Toaster } from '@/components/ui/sonner'
</script>

<template>
  <Toaster richColors :expand="true" position="bottom-right" />

  <Header />
  <RouterView />
  <Footer />
</template>

<style scoped></style>
