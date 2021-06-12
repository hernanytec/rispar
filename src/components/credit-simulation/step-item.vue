<template>
  <div class="step-item">
    <div
      class="step-item__indicator"
      :class="{ 'step-item__indicator--active': active }"
    >
      <span class="text-bold">{{ name }}</span>
    </div>

    <div class="column">
      <span class="text-bold">{{ title }} </span>
      <span>{{ subtitle }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepItem",

  props: {
    name: {
      type: [String, Number],
      required: true,
      default: null
    },
    title: {
      type: String,
      required: true,
      default: null
    },
    subtitle: {
      type: String,
      default: ""
    },
    active: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.step-item {
  display: flex;
  align-items: center;

  &__indicator {
    margin-right: 16px;
    width: 32px;
    height: 32px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid $primary;
    color: $primary;
    transition: all 0.2s;

    &--active {
      color: white;
      background-color: $primary;
      border: none;
    }
  }
}
</style>
