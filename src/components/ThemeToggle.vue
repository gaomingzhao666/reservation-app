<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-vue-next'
import { useColorMode } from '@vueuse/core'

// pass { disableTransition: false } to enable transitions
const mode = useColorMode({ disableTransition: false })
</script>

<template>
  <button>
    <Button variant="outline" @click="mode = 'dark'" class="dark:hidden">
      <Moon class="size-5" />
    </Button>

    <Button variant="outline" @click="mode = 'light'" class="hidden dark:block">
      <Sun class="size-5" />
    </Button>

    <span class="sr-only">Toggle Theme</span>
  </button>
</template>
