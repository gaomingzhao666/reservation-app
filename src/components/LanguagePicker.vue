<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Button variant="outline">
        <Languages class="size-5" />
      </Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent class="mr-5 space-y-1 p-2">
      <DropdownMenuItem @click="$i18n.locale = 'en'"> English </DropdownMenuItem>
      <DropdownMenuItem @click="$i18n.locale = 'ja'"> 日本語 </DropdownMenuItem>
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
</script>
