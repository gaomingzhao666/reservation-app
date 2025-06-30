<script setup lang="ts">
import { RouterView } from 'vue-router'
import { watch } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { Toaster } from '@/components/ui/sonner'

import { useI18n } from 'petite-vue-i18n'

const { locale } = useI18n()
watch(
  () => locale.value,
  (newVal) => {
    // set the lang attribute depending on the new locale value
    document.getElementsByTagName('html')[0].setAttribute('lang', newVal)
  },
)
</script>

<template>
  <Toaster richColors :expand="true" position="bottom-right" />

  <Header />
  <RouterView />
  <Footer />
</template>
