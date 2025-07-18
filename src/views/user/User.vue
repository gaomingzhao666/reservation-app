<template>
  <main>
    <UserInfoCard
      :user="{
        displayName: user?.displayName || '',
        phoneNumber: user?.phoneNumber || '',
        email: user?.email || '',
        photoURL: user?.photoURL || '',
      }"
    />

    <RouterView></RouterView>
  </main>
</template>

<script lang="ts" setup>
import UserInfoCard from '@/components/UserInfoCard.vue'
import { getAuth } from 'firebase/auth'

const auth = getAuth()
const user = auth.currentUser
</script>
