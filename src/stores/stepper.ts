import { ref, type Ref } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useStepperValueStore = defineStore('stepperValue', () => {
  const stepperValue: Ref<number> = ref(1)

  const updateStepperValue = (value: number) => {
    stepperValue.value = value
  }

  return { updateStepperValue, stepperValue }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStepperValueStore, import.meta.hot))
}
