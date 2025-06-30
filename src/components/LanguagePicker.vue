<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Button variant="outline">
        <Languages class="size-5" />
      </Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent class="mr-5">
      <DropdownMenuItem
        v-for="locale in availableLocales"
        :key="`locale-${locale}`"
        @click="$i18n.locale = locale"
        >{{ locale }}</DropdownMenuItem
      >
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script lang="ts" setup>
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Languages } from 'lucide-vue-next'

import { useI18n } from 'petite-vue-i18n'

const { availableLocales } = useI18n()
</script>
