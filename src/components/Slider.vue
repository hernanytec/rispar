<template>
  <div>
    <q-slider v-model="selectedValue" snap :min="min" :max="max" />

    <div class="column">
      <div class="flex justify-between">
        <div>{{ minLabel }}</div>
        <div>{{ maxLabel }}</div>
      </div>
    </div>

    <div class="text-center q-mt-sm">
      Selecionado:
      <span class="text-bold">
        {{ selectedLabel }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slider',

  props: {
    value: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 0,
    },
    minLabel: {
      type: String,
      default: '',
    },
    maxLabel: {
      type: String,
      default: '',
    },
    selectedLabel: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      selectedValue: this.value,
    };
  },

  watch: {
    selectedValue(value) {
      this.$emit('input', value);
    },
  },
};
</script>
