<template>
  <div
    class="result-item row items-center justify-between q-pa-lg"
    :class="{ 'q-pa-lg': $q.screen.gt.sm, 'q-mx-xl': $q.screen.gt.sm }"
  >
    <div class="column col-7">
      <span class="q-mb-sm text-uppercase fontsize-10">{{ title }}</span>
      <span class="fontsize-16 text-bold">{{ value }}</span>
    </div>

    <div class="col-5">
      <slot>
        <div class="fontsize-9">{{ description }}</div>
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
