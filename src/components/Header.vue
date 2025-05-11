<template>
  <header class="p-5 flex items-center justify-between">
    <section class="flex items-center justify-start space-x-4">
      <h1 class="text-xl font-semibold">Reservation App</h1>

      <Input type="text" placeholder="Search by place" class="w-full md:w-80" />
    </section>

    <Navbar />

    <section class="flex items-center justify-start space-x-4">
      <ThemeToggle />
      <LanguagePicker />
    </section>
  </header>
</template>

<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue'
import { Input } from '@/components/ui/input'
import LanguagePicker from '@/components/LanguagePicker.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
</script>

<style></style>
