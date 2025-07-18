<template>
  <Card>
    <CardContent>
      <img :src="props.user.photoURL" alt="User Avatar" />

      <section>
        <h3>{{ props.user.displayName }}</h3>
        <section>
          <p>Email: {{ props.user.email }}</p>
          <p>Phone: {{ props.user.phoneNumber }}</p>
        </section>
      </section>
    </CardContent>
  </Card>
</template>

<script lang="ts" setup>
import { Card, CardContent } from '@/components/ui/card'

interface Props {
  user: {
    displayName: string
    phoneNumber: string
    email: string
    photoURL?: string
  }
}
const props = defineProps<Props>()
</script>
