<template>
  <section class="w-full md:w-5xl">
    <section class="flex items-center justify-center">
      <video
        :src="hotelVideo"
        class="h-[434px] w-xl rounded-xl object-cover"
        :controls="isControls"
        @click="isControls = true"
      ></video>

      <ul class="ml-4 hidden grid-cols-2 gap-4 border md:grid">
        <li>
          <img :src="hotelImg1" class="h-52 w-64 rounded-xl" alt="" />
        </li>
        <li>
          <img :src="hotelImg2" class="h-52" alt="" />
        </li>
        <li>
          <img :src="hotelImg3" class="h-52" alt="" />
        </li>
        <li>
          <img :src="hotelImg4" class="h-52" alt="" />
        </li>
        <!-- <li>
          <img :src="hotelImg5" alt="" />
        </li> -->
      </ul>
    </section>
  </section>
</template>

<script lang="ts" setup>
import hotelVideo from '@/assets/images/hotel-video.mp4'
import hotelImg1 from '@/assets/images/hotel-1.jpg'
import hotelImg2 from '@/assets/images/hotel-2.jpg'
import hotelImg3 from '@/assets/images/hotel-3.jpg'
import hotelImg4 from '@/assets/images/hotel-4.jpg'
// import hotelImg5 from '@/assets/images/hotel-5.jpg'
import { ref, type Ref } from 'vue'

const isControls: Ref<boolean> = ref(false)
</script>
