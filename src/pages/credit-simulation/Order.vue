<template>
  <div class="form-container">
    <div v-if="isLoading" class="flex justify-center">
      <Loader label="CALCULANDO..." />
    </div>

    <q-form v-else class="column">
      <FormItem
        label="VALOR DO PEDIDO"
        :label-classes="$q.screen.gt.sm ? 'q-mb-lg' : null"
      >
        <ImputMoney
          v-model="data.amount"
          outlined
          dense
          bottom-slots
          hint="Valores entre R$ 500 e R$ 300.000"
          :error="$v.data.amount.$error"
          error-message="Deve receber um valor entre 500 e 300.000"
          @blur="$v.data.amount.$touch()"
        />
      </FormItem>

      <FormItem
        label="PARCELAS"
        :label-classes="$q.screen.gt.sm ? 'q-mb-xl' : null"
      >
        <Slider
          v-model="data.term"
          :min="INSTALLMENT_MIN"
          :max="INSTALLMENT_MAX"
          :min-label="`${INSTALLMENT_MIN} meses`"
          :max-label="`${INSTALLMENT_MAX} meses`"
          :selected-label="selectedTerm"
        />
      </FormItem>

      <FormItem label="LOAN TO VALUE">
        <div class="flex justify-between">
          <q-btn
            v-for="(option, index) in ltvOptions"
            :key="index"
            :label="option.label"
            :outline="data.ltv != option.value"
            color="primary"
            @click="setLoan(option)"
          />
        </div>
      </FormItem>

      <FormItem label="VENCIMENTO">
        <q-select v-model="dueDate" outlined dense :options="dueDateOptions" />
      </FormItem>

      <q-btn
        :disabled="isInvalidForm"
        class="self-end"
        color="primary"
        label="Próximo"
        @click="onNext"
      />
    </q-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import FormItem from 'components/FormItem.vue';
import Slider from 'components/Slider.vue';
import Loader from 'components/Loader.vue';
import ImputMoney from 'components/ImputMoney.vue';
import {
  required,
  decimal,
  minValue,
  maxValue,
} from 'vuelidate/lib/validators';

export default {
  name: 'Order',

  components: { FormItem, Slider, Loader, ImputMoney },

  props: {
    value: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      data: this.value,

      INSTALLMENT_MIN: 6,
      INSTALLMENT_MAX: 12,

      dueDate: 'dia 10 de cada mês',

      dueDateOptions: [
        'dia 05 de cada mês',
        'dia 10 de cada mês',
        'dia 15 de cada mês',
        'dia 20 de cada mês',
      ],

      ltvOptions: [
        { label: '20%', value: 20 },
        { label: '35%', value: 35 },
        { label: '50%', value: 50 },
      ],
    };
  },

  computed: {
    ...mapGetters('acquisition', ['isLoading']),

    selectedTerm() {
      const { term } = this.data;
      return `${term} meses`;
    },

    isInvalidForm() {
      return this.$v.$invalid;
    },
  },

  methods: {
    ...mapActions('acquisition', ['simulate']),

    async onNext() {
      await this.simulate(this.data);

      this.$emit('next');
    },

    setLoan({ value }) {
      this.data.ltv = value;
    },
  },

  validations: {
    data: {
      amount: {
        required,
        decimal,
        minValue: minValue(500),
        maxValue: maxValue(300_000),
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.form-container {
  background-color: white;
  padding: 1rem;
  margin-top: 2rem;
}
</style>
