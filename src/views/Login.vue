<template>
  <main class="flex flex-col items-center justify-center space-y-4">
    <h2 class="text-3xl font-semibold">Login</h2>

    <form class="md:w-xl w-full p-5 space-y-6" @submit="onSubmit">
      <FormField v-slot="{ componentField }" name="email">
        <FormItem>
          <FormLabel class="font-semibold">Email</FormLabel>

          <FormControl>
            <Input type="email" v-bind="componentField" />
          </FormControl>

          <FormDescription>
            We won't store your email, here's just for validation purpose.
          </FormDescription>

          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="password">
        <FormItem>
          <FormLabel class="font-semibold">Password</FormLabel>

          <FormControl>
            <Input type="password" v-bind="componentField" />
          </FormControl>

          <FormMessage />
        </FormItem>
      </FormField>
      <Button type="submit"> Login </Button>
    </form>
  </main>
</template>

<script lang="ts" setup>
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { useRouter } from 'vue-router'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from 'vue-sonner'
import { supabase } from '@/lib/supabaseClient'

const router = useRouter()

const formSchema = toTypedSchema(
  z.object({
    email: z.string().email(),
    password: z.string().min(8).max(20),
  }),
)

const { handleSubmit } = useForm({
  validationSchema: formSchema,
})

interface UserInfo {
  email: string
  password: string
}
const loginWithEmail = async (userInfo: UserInfo) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: userInfo.email,
    password: userInfo.password,
  })

  if (error) toast.error(error.message)
  else {
    toast.success('Welcome, ' + data.user.email + data.session.access_token)
    router.push('/index')
  }
}

const onSubmit = handleSubmit((values) => {
  loginWithEmail(values)
})
</script>

<style></style>
