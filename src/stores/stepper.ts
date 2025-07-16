import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useStepperValueStore = defineStore('setpperValue', () => {
  const setpperValue: Ref<number> = ref(1)

  const updateStepperValue = (value: number) => {
    setpperValue.value = value
  }

  return { updateStepperValue, setpperValue }
})
