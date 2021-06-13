<template>
  <div class="q-pa-lg">
    <div class="text-h5">{{ title }}</div>
    <div class="text-body2">{{ subtitle }}</div>

    <div class="bg-white q-pa-sm q-mt-xl">
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
  },
};
</script>
