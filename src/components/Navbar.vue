<template>
  <nav class="flex flex-col items-start justify-start space-x-2 p-4 md:flex-row">
    <Button variant="secondary" class="my-2 w-full p-5 md:hidden">{{ username }}</Button>

    <RouterLink to="/admin" class="w-full cursor-pointer">
      <Button variant="ghost" class="mx-2 hidden cursor-pointer md:block">Admin</Button>
      <Button variant="outline" class="my-2 w-full p-5 md:hidden">Admin</Button>
    </RouterLink>

    <section class="w-full space-x-2 md:flex">
      <RouterLink v-if="!isLoggedIn" to="/signup" class="w-full">
        <Button variant="ghost" class="mx-2 hidden cursor-pointer text-nowrap md:block"
          >Sign Up</Button
        >
        <Button variant="outline" class="my-2 w-full p-5 md:hidden">Sign Up</Button>
      </RouterLink>

      <RouterLink v-if="!isLoggedIn" to="/login" class="w-full cursor-pointer">
        <Button variant="ghost" class="mx-2 hidden cursor-pointer md:block">Login</Button>
        <Button variant="outline" class="my-2 w-full p-5 md:hidden">Login</Button>
      </RouterLink>

      <Button
        variant="outline"
        class="my-2 w-full p-5 md:hidden"
        v-if="isLoggedIn"
        @click="logout()"
        >Logout</Button
      >
    </section>

    <DropdownMenu v-if="isLoggedIn">
      <DropdownMenuTrigger class="mr-2 hidden md:block">
        <Button variant="secondary" class="cursor-pointer">{{ username }}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <LogOut class="size-5" />
          <span @click="logout()">Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </nav>
</template>

<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-vue-next'
import { ref, type Ref } from 'vue'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { toast } from 'vue-sonner'
import { useRouter } from 'vue-router'

const auth = getAuth()
const isLoggedIn: Ref<boolean> = ref(auth.currentUser ? true : false)
const username: Ref<string> = ref(auth.currentUser?.displayName || 'undefined')
const router = useRouter()

onAuthStateChanged(auth, (user) => {
  if (user) {
    isLoggedIn.value = true
    username.value = user.displayName || 'undefined'
  } else isLoggedIn.value = false
})

const logout = () => {
  signOut(auth).then(() => {
    toast.success('Logout successfully')
    router.push('/login')
  })
}
</script>
