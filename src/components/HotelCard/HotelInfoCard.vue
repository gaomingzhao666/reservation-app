<template>
  <Card class="">
    <CardHeader>
      <section>
        <CardTitle>{{ props.name }}</CardTitle>
        <Button>Review</Button>
        <Button>Book</Button>
      </section>

      <section>
        <section>
          <Star color="black" />
          <Star />
          <Star />
          <Star />
          <Star />
        </section>

        <section>
          <p>Opening</p>
          <p>opens soon at 00:00</p>
        </section>
      </section>
    </CardHeader>
    <CardContent>
      <p>{{ props.address }}</p>

      <p>{{ props.openingDate }} - {{ props.closingDate }}</p>

      <section>
        <h5>Closed</h5>

        <p>{{ props.openTime }} - {{ props.closeTime }}</p>
      </section>

      <p v-for="(item, index) in props.paymentMethods" :key="index">{{ item }},</p>
    </CardContent>
  </Card>
</template>

<script lang="ts" setup>
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star } from 'lucide-vue-next'

interface Props {
  name: string
  reviewStars: number
  isOpening: boolean
  openTime: string
  closeTime: string
  address: string
  openingDate: string
  closingDate: string
  paymentMethods: string[]
  price: number
}

const props = defineProps<Props>()
</script>

<style></style>
