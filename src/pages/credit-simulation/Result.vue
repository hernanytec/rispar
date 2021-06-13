<template>
  <div class="column" :class="{ 'q-px-xl': $q.screen.gt.md }">
    <ResultItem
      title="você recebe"
      :value="simulation.net_value | currency(...defaultCurrencyProps)"
      description="Dinheiro que cai na sua conta em até 2 dias úteis."
    />

    <ResultItem
      :title="`Pagando em ${simulation.term} vezes de`"
      :value="simulation.installment_value | currency(...defaultCurrencyProps)"
      value-indicator="(1)"
      description="As faturas serão enviadas para o seu e-mail."
    />

    <ResultItem
      title="Deixando como garantia"
      :value="
        simulation.collateral | toBitcoin | currency(...bitcoinCurrencyProps)
      "
      value-indicator="(2)"
      description="Sua criptomoeda estará segura em carteiras BitCo."
    />

    <ResultItem
      title="TX de juros"
      :value="`${simulation.interest_rate}% a.m`"
      value-indicator="(3)"
    >
      <div class="column">
        <span class="q-mb-sm fontsize-10">LOAN TO VALUE (LTV)</span>
        <span class="fontsize-16 text-bold">{{ `${simulation.ltv}%` }}</span>
      </div>
    </ResultItem>

    <ResultItem
      title="TX plataforma"
      :value="`${simulation.interest_rate}% a.m`"
    >
      <div class="column justify-center">
        <span class="q-mb-xs fontsize-10">IOF</span>
        <span class="fontsize-16 text-bold">
          ZERO
          <sup class="fontsize-8 text-bold text-overline">(4)</sup>
        </span>
      </div>
    </ResultItem>

    <q-btn
      class="self-center q-my-xl q-px-xl"
      color="secondary"
      unelevated
      label="Nova simulação"
      @click="onFinish"
    />

    <InfoTextItem
      :class="{ 'q-px-md': $q.screen.lt.md }"
      v-for="info in infoTexts"
      :key="info.key"
      :index="info.key"
      :text="info.text"
    />
  </div>
</template>

<script>
import currency from 'currency.js';
import { mapGetters } from 'vuex';
import ResultItem from './ResultItem.vue';
import InfoTextItem from './InfoTextItem.vue';

export default {
  name: 'Result',

  components: { ResultItem, InfoTextItem },

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

      infoTexts: [
        {
          key: 1,
          text: `Esta é apenas uma simulação. Os valores podem sofrer alterações no
      momento da solicitação real do empréstimo, baseado em diversos fatores
      como o dia de vencimento da parcela, mudanças nas taxas e outras condições
      não previstas nesse simulador.`,
        },
        {
          key: 2,
          text: `Foi utilizada a cotação BRL/BTC na data de hoje (04/11/2020) às 15h30
      que corresponde ao valor de R$ 80.000,00. Este valor pode sofrer mudanças
      no momento final da solicitação do crédito.`,
        },
        {
          key: 3,
          text: `Taxa de juros utilizada para o cálculo das prestações. Esta taxa não
      representa o Custo Efetivo Total, que nesta simulação é de 1,34% ao mês e
      24,44% ao ano.`,
        },
        {
          key: 4,
          text: `De acordo com o decreto Nº 10.504 de 2 de outubro de 2020.`,
        },
      ],
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
