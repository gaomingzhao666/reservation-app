<template>
  <Card class="mx-auto w-full">
    <CardHeader>
      <CardTitle>User Information</CardTitle>
      <CardDescription
        >We got your basic information from Google if you logged in by Google, check, revise or
        input rest of information.</CardDescription
      >
    </CardHeader>

    <!-- email: '',
    username: '',
    avatar_url: '',
    age: '', -->
    <CardContent>
      <form @submit="onSubmit">
        <section class="mb-4 flex items-center justify-between">
          <FormField v-slot="{ componentField }" name="username">
            <FormItem>
              <FormLabel>Customer Name</FormLabel>
              <FormControl>
                <Input type="text" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField name="age">
            <FormItem>
              <FormLabel>Age</FormLabel>
              <NumberField id="age" :default-value="20" :min="1">
                <NumberFieldContent>
                  <NumberFieldDecrement />
                  <NumberFieldInput />
                  <NumberFieldIncrement />
                </NumberFieldContent>
              </NumberField>
            </FormItem>
          </FormField>
        </section>

        <FormField v-slot="{ componentField }" name="email">
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="text" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <Button type="submit" class="mt-4 px-5"> Save </Button>
      </form>
    </CardContent>
  </Card>
</template>

<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from '@/components/ui/number-field'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { ref, type Ref } from 'vue'
import * as z from 'zod'

import { getAuth } from 'firebase/auth'
import { app } from '@/lib/firebase'

import { useOrderInfoStore } from '@/stores/orderInfo'

const auth = getAuth(app)
const userInfo = auth.currentUser

const formSchema = toTypedSchema(
  z.object({
    username: z
      .string()
      .min(2)
      .max(50)
      .default(userInfo?.displayName ?? ''),
    email: z.email().default(userInfo?.email ?? ''),
  }),
)

const { handleSubmit } = useForm({
  validationSchema: formSchema,
})

const orderInfoStore = useOrderInfoStore()
const age: Ref<number> = ref(20)
const onSubmit = handleSubmit((values) => {
  orderInfoStore.orderInfo.username = values.username
  orderInfoStore.orderInfo.email = values.email
  orderInfoStore.orderInfo.age = age.value
})
</script>

<style></style>
