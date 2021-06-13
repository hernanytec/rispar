<template>
  <div>
    <div class="q-pa-lg q-mt-xs" :class="{ row: $q.screen.lt.md }">
      <div class="fontsize-20 text-secondary text-bold lt-md q-mr-md">
        {{ `${currentStep}/${totalSteps}` }}
      </div>
      <div class="fontsize-20" :class="{ 'text-uppercase': $q.screen.lt.md }">
        {{ title }}
      </div>
      <div class="gt-sm fontsize-8">{{ subtitle }}</div>
    </div>

    <div
      class="bg-white q-mt-lg"
      :class="{ 'q-pa-sm': $q.screen.gt.lg, 'q-ml-md': $q.screen.gt.sm }"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'StepPanel',

  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    currentStep: {
      type: Number,
      default: 0,
    },
    totalSteps: {
      type: Number,
      default: 0,
    },
  },
};
</script>
