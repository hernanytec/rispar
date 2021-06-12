<template>
  <q-page>
    <div class="row window-height">
      <div class="default-spacing stepper-container col-4">
        <stepper v-model="step" :steps="steps" />
      </div>

      <div class="default-spacing col-8">
        <component :is="currentStepComponent" @next="onNext" />
      </div>
    </div>
  </q-page>
</template>

<script>
import Stepper from "src/components/Stepper.vue";
import Register from "src/pages/credit-simulation/Register.vue";
import Order from "src/pages/credit-simulation/Order.vue";

export default {
  name: "CreditSimulation",

  components: { Stepper, Register, Order },

  data() {
    return {
      step: 1,

      steps: [
        {
          name: 1,
          title: "Cadastro",
          subtitle: "Dados iniciais"
        },
        {
          name: 2,
          title: "Pedido",
          subtitle: "Detalhes do empréstimo"
        },
        {
          name: 3,
          title: "Resultado",
          subtitle: "Sua Simulação Rispar"
        }
      ]
    };
  },

  computed: {
    currentStepComponent() {
      const components = Object.freeze({
        1: Register,
        2: Order
      });

      return components[this.step];
    }
  },

  methods: {
    onNext() {
      if (this.step === this.steps.length) return;

      this.step++;
    }
  }
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
