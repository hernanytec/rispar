<template>
  <div>
    <div class="text-h5">Pedido</div>
    <div class="text-body2">Informe os seus dados iniciais</div>

    <div class="form-container">
      <q-form class="column">
        <div class="row items-center q-mb-lg">
          <div class="col-3 text-right q-pr-md q-mb-md">VALOR DO PEDIDO</div>
          <q-input
            v-model="form.name"
            class="col-9"
            bottom-slots
            outlined
            dense
          >
            <template v-slot:hint>
              <div class="text-right">
                Valores entre R$ 500 e R$ 300.000
              </div>
            </template>
          </q-input>
        </div>

        <div class="row items-center">
          <div class="col-3 text-right q-pr-md">PARCELAS</div>

          <div class="col-9">
            <q-slider
              v-model="form.installment"
              snap
              :min="INSTALLMENT_MIN"
              :max="INSTALLMENT_MAX"
            />

            <div class="column q-mb-md">
              <div class="flex justify-between">
                <div>{{ INSTALLMENT_MIN }} meses</div>
                <div>{{ INSTALLMENT_MAX }} meses</div>
              </div>

              <div class="text-center">
                Selecionado:
                <span class="text-bold">{{ selectedInstallments }} </span>
              </div>
            </div>
          </div>
        </div>

        <div class="row items-center q-mb-md">
          <div class="col-3 text-right q-pr-md">LOAN TO VALUE</div>

          <div class="flex justify-between col-9">
            <q-btn
              v-for="(option, index) in loanOptions"
              :key="index"
              :label="option.label"
              outline
              color="primary"
              @click="setLoan(option)"
            />
          </div>
        </div>

        <div class="row items-center">
          <div class="col-3 text-right q-pr-md">VENCIMENTO</div>
          <q-select
            v-model="form.dueDate"
            class="col-9"
            outlined
            dense
            :options="dueDateOptions"
          />
        </div>

        <q-btn
          class="self-end q-mt-lg"
          color="primary"
          label="Próximo"
          @click="onNext"
        />
      </q-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",

  data() {
    return {
      INSTALLMENT_MIN: 6,
      INSTALLMENT_MAX: 12,

      form: {
        value: "",
        installment: 9,
        loan: "",
        dueDate: "dia 10 de cada mês"
      },

      dueDateOptions: [
        "dia 05 de cada mês",
        "dia 10 de cada mês",
        "dia 15 de cada mês",
        "dia 20 de cada mês"
      ],
      loanOptions: [
        { label: "20%", value: 0.2 },
        { label: "30%", value: 0.3 },
        { label: "40%", value: 0.4 },
        { label: "50%", value: 0.5 },
        { label: "60%", value: 0.6 }
      ]
    };
  },

  computed: {
    selectedInstallments() {
      const { installment } = this.form;
      return `${installment} meses`;
    }
  },

  methods: {
    onNext() {
      this.$emit("next");
    },
    setLoan({ value }) {
      this.form.loan = value;
    }
  }
};
</script>

<style lang="scss" scoped>
.form-container {
  background-color: white;
  padding: 1rem;
  margin-top: 2rem;
}
</style>
