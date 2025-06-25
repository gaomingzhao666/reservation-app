<template>
  <header class="p-5 flex items-center justify-between">
    <section class="flex items-center justify-start space-x-4">
      <RouterLink to="/index">
        <h1 class="text-xl font-semibold">Reservation App</h1>
      </RouterLink>

      <Input type="text" placeholder="Search by place" class="w-full md:w-80" />
    </section>

    <section class="flex items-center justify-end">
      <Navbar />

      <section class="flex items-center justify-start space-x-4">
        <ThemeToggle />
        <LanguagePicker />
      </section>
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
