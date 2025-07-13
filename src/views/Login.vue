<template>
  <main class="flex flex-col items-center justify-center space-y-4">
    <h2 class="text-3xl font-semibold">Login</h2>

    <form class="w-full space-y-6 p-5 md:w-xl" @submit="onSubmit">
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

      <section class="flex justify-start">
        <RouterLink to="/signup" class="text-sm hover:underline">
          Don't have an account? To sign up
        </RouterLink>
      </section>

      <section class="flex flex-col items-center justify-center space-y-4">
        <Button
          type="submit"
          variant="default"
          class="w-full cursor-pointer"
          size="lg"
          @click="loginWithEmail()"
        >
          Login
        </Button>
        <Button
          type="submit"
          variant="default"
          class="w-full cursor-pointer"
          size="lg"
          @click="loginWithGoogle()"
        >
          <Google class="mr-2 size-5" />
          Login with Google
        </Button>
      </section>
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
import Google from '@/components/icons/Google.vue'
import { Input } from '@/components/ui/input'
import { toast } from 'vue-sonner'
import { storeToken } from '@/lib/token'
import { googleIcon } from ''

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '@/lib/firebase'
const router = useRouter()

const provider = new GoogleAuthProvider()
const auth = getAuth()
// apply the default browser preference
auth.useDeviceLanguage()

const loginWithGoogle = () => {
  signInWithPopup(auth, provider).then(async (result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result)

    if (credential && credential.accessToken) {
      const token = credential.accessToken
      storeToken(token)

      // add user to db
      const user = result.user
      await addDoc(collection(db, 'user'), {
        uid: user.uid,
        email: user.email,
        username: user.displayName,
        avatar_url: user.photoURL,
        // guide user to set birth_at variable because google auth doesn't provide birth_at
        birth_at: 'undefined',
      })

      toast.success('Hello, Google User ' + user.displayName)
      router.push('/index')
    } else {
      toast.error('Failed to login with Google')
    }
    router.push('/index')
  })
}
</script>
