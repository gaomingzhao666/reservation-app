<template>
  <Stepper
    :steps="props.steps"
    class="flex w-full items-start gap-2"
    :default-value="props.currentStepValue"
  >
    <StepperItem
      v-for="step in props.steps"
      :key="step.value"
      v-slot="{ state }"
      class="relative flex w-full flex-col items-center justify-center"
      :step="step.value"
    >
      <StepperIndicator>
        <component :is="step.icon" class="size-5" />
      </StepperIndicator>

      <StepperSeparator
        v-if="step.value !== steps[steps.length - 1].value"
        class="absolute top-5 right-[calc(-50%+10px)] left-[calc(50%+20px)] block h-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary"
      />

      <div class="mt-5 flex flex-col items-center text-center">
        <StepperTitle
          :class="[state === 'active' && 'text-primary']"
          class="text-sm font-semibold transition lg:text-base"
        >
          {{ step.title }}
        </StepperTitle>
        <StepperDescription
          :class="[state === 'active' && 'text-primary']"
          class="sr-only text-xs text-muted-foreground transition md:not-sr-only lg:text-sm"
        >
          {{ step.description }}
        </StepperDescription>
      </div>
    </StepperItem>
  </Stepper>
</template>

<script lang="ts" setup>
import type { Component } from 'vue'

interface Step {
  value: number
  title: string
  description: string
  icon: Component
}
interface Props {
  currentStepValue: number
  steps: Step[]
}
const props = defineProps<Props>()
</script>

<style></style>
