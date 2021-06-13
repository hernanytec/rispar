<template>
  <div class="row items-center q-mb-lg">
    <div class="col-3 text-right q-pr-md" :class="labelClasses">
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
