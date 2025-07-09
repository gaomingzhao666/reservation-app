<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Button variant="outline">
        <Languages class="size-5" />
      </Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent class="mr-5 space-y-1 rounded-xl p-2">
      <DropdownMenuLabel class="rounded-md bg-gray-100 text-sm dark:bg-gray-800"
        >Only support UI translation</DropdownMenuLabel
      >
      <DropdownMenuSeparator />

      <DropdownMenuRadioGroup v-model="currentLocale">
        <DropdownMenuRadioItem value="en" @click="$i18n.locale = currentLocale">
          English
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="ja" @click="$i18n.locale = currentLocale">
          日本語
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script lang="ts" setup>
import {
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Languages } from 'lucide-vue-next'
import { ref } from 'vue'
import type { Ref } from 'vue'
import { useI18n } from 'petite-vue-i18n'

const i18n = useI18n()
const currentLocale: Ref<string> = ref(i18n.locale.value)
</script>
