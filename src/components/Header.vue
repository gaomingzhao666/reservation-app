<template>
  <header class="p-5 mb-10 flex items-center justify-between backdrop-blur-xs sticky top-0">
    <!-- logo -->
    <section class="flex items-center justify-start space-x-4">
      <RouterLink to="/index">
        <h1 class="text-xl font-semibold">Reservation App</h1>
      </RouterLink>

      <Input type="text" :placeholder="t('searchByPlace')" class="w-sm hidden md:block" />
    </section>

    <!-- navbar & controllers -->
    <section class="md:flex items-center justify-end hidden">
      <Navbar />

      <section class="flex items-center justify-start space-x-4">
        <ThemeToggle />
        <LanguagePicker />
      </section>
    </section>

    <!-- menu that wrapped navbar and controllers for mobile -->
    <Drawer>
      <DrawerTrigger class="block md:hidden"><Menu /></DrawerTrigger>
      <DrawerContent class="h-full p-5">
        <section class="flex items-center justify-between my-8">
          <h2 class="text-xl font-semibold">Navigation</h2>

          <section class="flex items-center justify-start space-x-4">
            <ThemeToggle />
            <LanguagePicker />
          </section>
        </section>

        <Input type="text" placeholder="Search by place" class="w-full p-5 mb-5" />
        <Navbar />
        <!-- <DrawerFooter> </DrawerFooter> -->
      </DrawerContent>
    </Drawer>
  </header>
</template>

<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerFooter, DrawerTrigger } from '@/components/ui/drawer'
import LanguagePicker from '@/components/LanguagePicker.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
import { Menu } from 'lucide-vue-next'

import { useI18n } from 'petite-vue-i18n'
const { t } = useI18n()
</script>

<style></style>
