<template>
  <q-page>
    <div class="row window-height">
      <div class="stepper-container col-4">
        <stepper v-model="step" :steps="steps" />
      </div>
    </div>
  </q-page>
</template>

<script>
import Stepper from "src/components/credit-simulation/stepper.vue";

export default {
  name: "CreditSimulation",

  components: { Stepper },

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
  }
};
</script>

<style lang="scss" scoped>
.stepper-container {
  margin: 2rem 0;
  padding: 1rem;
  background-color: white;
  height: 70%;
}
</style>
