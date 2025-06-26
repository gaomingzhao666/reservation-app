<template>
  <header class="p-5 flex items-center justify-between">
    <!-- logo -->
    <section class="flex items-center justify-start space-x-4">
      <RouterLink to="/index">
        <h1 class="text-xl font-semibold">Reservation App</h1>
      </RouterLink>

      <Input type="text" placeholder="Search by place" class="w-full md:w-80" />
    </section>

    <!-- navbar & controllers -->
    <section class="flex items-center justify-end">
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

        <RouterLink
          :to="item.trim().toLowerCase()"
          v-for="(item, index) in ['Management', 'Sign Up', 'Sign in']"
          :key="index"
        >
          <Button variant="outline" class="w-full my-2 p-5">{{ item }}</Button>
        </RouterLink>

        <DrawerFooter> </DrawerFooter>
      </DrawerContent>
    </Drawer>
  </header>
</template>

<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import LanguagePicker from '@/components/LanguagePicker.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
import { Menu } from 'lucide-vue-next'
</script>

<style></style>
