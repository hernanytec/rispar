<template>
  <div class="result-item row items-center justify-between q-pa-lg">
    <div class="column col-5">
      <span class="text-h6 q-mb-sm text-uppercase">{{ title }}</span>
      <span class="text-h4">{{ value }}</span>
    </div>

    <div class="col-7">
      <slot>
        {{ description }}
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultItem',

  props: {
    title: {
      type: String,
      required: true,
      default: null,
    },
    value: {
      type: String,
      required: true,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.result-item {
  border-bottom: 2px solid #c8c8c8;
}
</style>
