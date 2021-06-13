<template>
  <div class="q-my-md" :class="{ 'row items-center': $q.screen.gt.sm }">
    <div
      class="col-3 text-left q-pr-md"
      :class="[
        labelClasses,
        {
          'text-right': $q.screen.gt.sm,
          'q-mb-sm': $q.screen.lt.md,
        },
      ]"
    >
      {{ label }}
    </div>

    <div class="col-9">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormItem',

  props: {
    label: {
      type: String,
      default: '',
    },
    labelClasses: {
      type: String,
      default: '',
    },
  },
};
</script>
