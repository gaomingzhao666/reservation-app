<template>
  <nav class="flex justify-start items-center space-x-4 p-4">
    <RouterLink to="/admin">Management</RouterLink>

    <section v-if="false">
      <RouterLink to="/signup">Sign Up</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
    </section>

    <Button variant="secondary" v-else @click="testApi()">username</Button>
  </nav>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { getToken } from '@/lib/token'

const testApi = () => {
  fetch(`https://www.googleapis.com/oauth2/v2/userinfo?authentication=${getToken()}"`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    })
}
</script>
