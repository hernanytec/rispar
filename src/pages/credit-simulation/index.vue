<template>
  <q-page>
    <div class="row window-height">
      <div class="gt-sm default-spacing stepper-container col-4">
        <Stepper v-model="step" :steps="steps" />
      </div>

      <StepPanel
        class="col-8"
        :class="{ 'col-12': $q.screen.lt.md }"
        :title="currentStep.title"
        :subtitle="currentStep.subtitle"
        :currentStep="step"
        :totalSteps="steps.length"
      >
        <component
          :is="currentStep.component"
          v-model="form"
          @next="onNext"
          @finish="onFinish"
        />
      </StepPanel>
    </div>
  </q-page>
</template>

<script>
import Stepper from 'components/Stepper.vue';
import StepPanel from '../../components/StepPanel.vue';
import Register from 'pages/credit-simulation/Register.vue';
import Order from 'pages/credit-simulation/Order.vue';
import Result from 'pages/credit-simulation/Result.vue';

export default {
  name: 'CreditSimulation',

  components: { Stepper, StepPanel, Register, Order, Result },

  data() {
    return {
      form: {},

      step: 1,

      steps: [
        {
          name: 1,
          title: 'Cadastro',
          subtitle: 'Dados iniciais',
        },
        {
          name: 2,
          title: 'Pedido',
          subtitle: 'Detalhes do empréstimo',
        },
        {
          name: 3,
          title: 'Resultado',
          subtitle: 'Sua Simulação Rispar',
        },
      ],
    };
  },

  created() {
    this.resetForm();
  },

  computed: {
    currentStep() {
      const components = Object.freeze({
        1: {
          title: 'Cadastro',
          subtitle: 'Informe os seus dados cadastrais',
          component: Register,
        },
        2: {
          title: 'Pedido',
          subtitle: 'Informe os seus dados iniciais',
          component: Order,
        },
        3: {
          title: 'Resultado',
          subtitle: 'Seu crédito Rispar',
          component: Result,
        },
      });

      return components[this.step];
    },
  },

  methods: {
    onNext() {
      if (this.step === this.steps.length) return;

      this.step++;
    },

    onFinish() {
      this.resetForm();
    },

    resetForm() {
      this.form = {
        fullname: '',
        email: '',
        ltv: 0.25,
        amount: '',
        term: 9,
      };

      this.step = 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.default-spacing {
  margin: 2rem 0;
  padding: 1rem;
}

.stepper-container {
  background-color: white;
  height: 70%;
}
</style>
