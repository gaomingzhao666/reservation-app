<template>
  <nav class="flex flex-col items-start justify-start space-x-2 p-4 md:flex-row">
    <RouterLink to="/admin" class="w-full cursor-pointer">
      <button class="mx-2 hidden cursor-pointer md:block">Admin</button>
      <Button variant="outline" class="my-2 w-full p-5 md:hidden">Admin</Button>
    </RouterLink>

    <section v-if="true" class="w-full space-x-2 md:flex">
      <RouterLink to="/signup" class="w-full">
        <button class="mx-2 hidden cursor-pointer text-nowrap md:block">Sign Up</button>
        <Button :variant="'outline'" class="my-2 w-full p-5 md:hidden">Sign Up</Button>
      </RouterLink>

      <RouterLink to="/login" class="w-full cursor-pointer">
        <button class="mx-2 hidden cursor-pointer md:block">Login</button>
        <Button variant="outline" class="my-2 w-full p-5 md:hidden">Login</Button>
      </RouterLink>
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
