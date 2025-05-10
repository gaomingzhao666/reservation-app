<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Languages />
    </DropdownMenuTrigger>

    <DropdownMenuContent>
      <DropdownMenuItem>English</DropdownMenuItem>
      <DropdownMenuItem>日本語</DropdownMenuItem>
      <DropdownMenuItem>简体中文</DropdownMenuItem>
      <DropdownMenuItem>繁體中文</DropdownMenuItem>
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
import { Languages } from 'lucide-vue-next'
</script>

<style></style>
