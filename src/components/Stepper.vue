<template>
  <div>
    <div v-for="(step, index) in steps" :key="index">
      <step-item
        :active="step.name === value"
        :name="step.name"
        :title="step.title"
        :subtitle="step.subtitle"
      />

      <div v-if="isNotLast(index)" class="item-separator" />
    </div>
  </div>
</template>

<script>
import StepItem from "./StepItem.vue";

export default {
  name: "Stepper",

  components: { StepItem },

  props: {
    value: {
      type: [String, Number],
      default: null
    },
    steps: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    isNotLast(index) {
      return index != this.steps.length - 1;
    }
  }
};
</script>

<style lang="scss" scoped>
.item-separator {
  height: 20px;
  margin-left: 16px;
  width: 1px;
  background-color: $primary;
}
</style>
