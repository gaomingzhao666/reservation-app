<template>
  <Card>
    <CardHeader>
      <h2>Order Information</h2>

      <section>
        <img :src="serviceImageUrl" alt="Selected Service's Image" />

        <h4>{{ serviceProviderName }}</h4>
      </section>
    </CardHeader>

    <CardContent class="flex items-center justify-between">
      <h4>{{ serviceTitle }}</h4>
      <p>{{ servicePrice }}</p>
    </CardContent>

    <CardContent class="flex items-center justify-between">
      <h4>Service Duration</h4>
      <p>{{ serviceDuration }}</p>
    </CardContent>

    <CardContent class="flex items-center justify-between">
      <h4>Service Date</h4>
      <p>{{ serviceDateRange }}</p>
    </CardContent>

    <CardFooter>
      <Button>Continue</Button>
    </CardFooter>
  </Card>
</template>

<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'

// it's not be filled, we need that schema types from supabase dashboard but we don't have create the project in dashboard yet
// here we just define the types for the service section and fill the styles and component just for service information
interface Props {
  data: {
    // for service
    serviceImageUrl: string
    serviceProviderName: string
    serviceTitle: string
    serviceDuration: string
    servicePrice: string
    serviceDateRange: string
  }
}
const props = defineProps<Props>()
const {
  serviceImageUrl,
  serviceProviderName,
  serviceTitle,
  serviceDuration,
  servicePrice,
  serviceDateRange,
} = props.data
</script>
