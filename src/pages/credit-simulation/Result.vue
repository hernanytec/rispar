<template>
  <div class="column q-px-xl">
    <ResultItem
      title="você recebe"
      :value="simulation.net_value | currency(...defaultCurrencyProps)"
      description="Dinheiro que cai na sua conta em até 2 dias úteis."
    />

    <ResultItem
      :title="`Pagando em ${simulation.term} vezes de`"
      :value="simulation.installment_value | currency(...defaultCurrencyProps)"
      description="As faturas serão enviadas para o seu e-mail."
    />

    <ResultItem
      title="Deixando como garantia"
      :value="
        simulation.collateral | toBitcoin | currency(...bitcoinCurrencyProps)
      "
      description="Sua criptomoeda estará segura em carteiras BitCo."
    />

    <ResultItem title="TX de juros" :value="`${simulation.interest_rate}% a.m`">
      <div class="column">
        <span class="text-h6 q-mb-sm">LOAN TO VALUE (LTV)</span>
        <span class="text-h4">{{ `${simulation.ltv}%` }}</span>
      </div>
    </ResultItem>

    <ResultItem
      title="TX plataforma"
      :value="`${simulation.interest_rate}% a.m`"
    >
      <div class="column">
        <span class="text-h6 q-mb-sm">IOF</span>
        <span class="text-h4">ZERO</span>
      </div>
    </ResultItem>

    <q-btn
      class="self-center q-mt-lg"
      color="secondary"
      label="Nova simulação"
      @click="onFinish"
    />
  </div>
</template>

<script>
import currency from 'currency.js';
import { mapGetters } from 'vuex';
import ResultItem from './ResultItem.vue';

export default {
  name: 'Result',

  components: { ResultItem },

  filters: {
    toBitcoin(value) {
      return currency(value).divide(100_000_000);
    },
  },

  data() {
    return {
      defaultCurrencyProps: [
        'R$ ',
        2,
        {
          thousandsSeparator: '.',
          decimalSeparator: ',',
        },
      ],

      bitcoinCurrencyProps: ['₿ ', 6, { decimalSeparator: ',' }],
    };
  },

  computed: {
    ...mapGetters('acquisition', ['simulation']),
  },

  methods: {
    onFinish() {
      this.$emit('finish');
    },
  },
};
</script>
