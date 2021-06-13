<template>
  <q-field v-model="currentValue" v-bind="$attrs" v-on="$listeners">
    <template v-slot:control="{ id, value, emitValue }">
      <money
        :id="id"
        ref="field"
        class="q-field__input"
        :value="value"
        @input="emitValue"
        v-bind="moneyFormatForComponent"
      />
    </template>

    <template v-slot:hint>
      <div class="text-right">{{ hint }}</div>
    </template>
  </q-field>
</template>

<script>
import { Money } from 'v-money';

export default {
  name: 'ImputMoney',

  components: { Money },

  props: {
    value: {
      type: [Number, String],
      default: 0,
    },
    hint: {
      type: String,
      default: '',
    },
  },

  mounted() {
    this.$refs.field.$el.value = '';
  },

  data() {
    return {
      currentValue: this.value,

      moneyFormatForComponent: {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        precision: 2,
      },
    };
  },
};
</script>

<style>
</style>