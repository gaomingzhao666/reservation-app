<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-vue-next'
import { useColorMode } from '@vueuse/core'

// pass { disableTransition: false } to enable transitions
const mode = useColorMode({ disableTransition: false })
</script>

<template>
  <button>
    <Button
      variant="outline"
      @click="mode = 'dark'"
      class="absolute scale-100 transition-all dark:scale-0 rotate-0 dark:-rotate-90"
    >
      <Moon class="h-[1.2rem] w-[1.2rem]" />
    </Button>

    <Button
      variant="outline"
      @click="mode = 'light'"
      class="absolute scale-0 transition-all dark:scale-100 rotate-90 dark:rotate-0"
    >
      <Sun class="h-[1.2rem] w-[1.2rem]" />
    </Button>

    <span class="sr-only">Toggle Theme</span>
  </button>
</template>
