<template>
  <nav class="flex justify-start items-center space-x-2 p-4">
    <router-link to="/admin">Management</router-link>
    <router-link to="/signup">Sign Up</router-link>
    <router-link to="/login">Login</router-link>

    <ThemeToggle />
    <LanguagePicker />

    <aside>
      <!-- burger icon -->
    </aside>
  </nav>
</template>

<script setup lang="ts">
import LanguagePicker from '@/components/LanguagePicker.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
</script>
