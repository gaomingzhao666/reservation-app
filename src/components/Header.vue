<template>
  <header>
    <section>
      <h1>Reservation App</h1>

      <Input type="email" placeholder="Email" />
    </section>

    <Navbar />
  </header>
</template>

<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue'
import { Input } from '@/components/ui/input'
</script>

<style></style>
